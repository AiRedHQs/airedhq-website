import { NextResponse } from "next/server";
import { z } from "zod";
import { appendLead, saveResume } from "@/src/lib/lead-storage";

export const runtime = "nodejs";

const applicationSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  position: z.string().trim().min(2).max(120),
  message: z.string().trim().max(2000),
});

const maximumResumeSize = 5 * 1024 * 1024;

export async function POST(request: Request) {
  const formData = await request.formData();
  const resume = formData.get("resume");
  const parsed = applicationSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    position: formData.get("position"),
    message: formData.get("message") ?? "",
  });

  if (!parsed.success || !(resume instanceof File) || resume.size === 0) {
    return NextResponse.json(
      { error: "Complete the required fields and attach your resume." },
      { status: 400 },
    );
  }

  if (resume.size > maximumResumeSize) {
    return NextResponse.json({ error: "Resume files must be 5 MB or smaller." }, { status: 413 });
  }

  try {
    const storedResume = await saveResume(resume);
    const id = await appendLead("career-applications", {
      ...parsed.data,
      resume: storedResume,
    });
    return NextResponse.json({ id }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "UNSUPPORTED_RESUME_TYPE") {
      return NextResponse.json(
        { error: "Upload a PDF, DOC or DOCX resume." },
        { status: 415 },
      );
    }
    throw error;
  }
}
