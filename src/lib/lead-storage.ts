import "server-only";

type LeadCollection = "contact-leads" | "career-applications";

type D1StatementLike = {
  bind: (...values: unknown[]) => D1StatementLike;
  run: () => Promise<unknown>;
};

type D1DatabaseLike = {
  prepare: (query: string) => D1StatementLike;
};

type R2BucketLike = {
  put: (
    key: string,
    value: ArrayBuffer,
    options?: { httpMetadata?: { contentType?: string }; customMetadata?: Record<string, string> },
  ) => Promise<unknown>;
};

type StorageBindings = {
  DB?: D1DatabaseLike;
  RESUMES?: R2BucketLike;
};

async function cloudflareBindings(): Promise<StorageBindings | null> {
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    return (await getCloudflareContext({ async: true })).env as StorageBindings;
  } catch {
    return null;
  }
}

async function localDataRoot() {
  const path = await import("node:path");
  return process.env.AIREDHQ_DATA_DIR
    ? path.resolve(process.env.AIREDHQ_DATA_DIR)
    : path.join(process.cwd(), ".data");
}

export async function appendLead(collection: LeadCollection, value: Record<string, unknown>) {
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const bindings = await cloudflareBindings();

  if (bindings?.DB) {
    await bindings.DB.prepare(
      "INSERT INTO leads (id, type, created_at, payload) VALUES (?, ?, ?, ?)",
    )
      .bind(id, collection, createdAt, JSON.stringify(value))
      .run();
    return id;
  }

  const { appendFile, mkdir } = await import("node:fs/promises");
  const path = await import("node:path");
  const dataRoot = await localDataRoot();
  await mkdir(dataRoot, { recursive: true });
  await appendFile(
    path.join(dataRoot, `${collection}.jsonl`),
    `${JSON.stringify({ id, createdAt, ...value })}\n`,
    "utf8",
  );

  return id;
}

export async function saveResume(file: File) {
  const extensionByType: Record<string, string> = {
    "application/pdf": ".pdf",
    "application/msword": ".doc",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
  };
  const extension = extensionByType[file.type];

  if (!extension) {
    throw new Error("UNSUPPORTED_RESUME_TYPE");
  }

  const storedName = `${crypto.randomUUID()}${extension}`;
  const originalName = file.name.split(/[\\/]/).pop()?.slice(0, 180) ?? "resume";
  const fileBuffer = await file.arrayBuffer();
  const bindings = await cloudflareBindings();

  if (bindings?.RESUMES) {
    await bindings.RESUMES.put(`career-resumes/${storedName}`, fileBuffer, {
      httpMetadata: { contentType: file.type },
      customMetadata: { originalName },
    });
  } else {
    const { mkdir, writeFile } = await import("node:fs/promises");
    const path = await import("node:path");
    const resumeDirectory = path.join(await localDataRoot(), "career-resumes");
    await mkdir(resumeDirectory, { recursive: true });
    await writeFile(path.join(resumeDirectory, storedName), Buffer.from(fileBuffer));
  }

  return {
    storedName,
    objectKey: `career-resumes/${storedName}`,
    originalName,
    contentType: file.type,
    size: file.size,
  };
}
