import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { getAllBlogArticles } from "../src/lib/blog";

async function main() {
  const outputRoot = path.join(process.cwd(), "public", "blog-data");
  await rm(outputRoot, { recursive: true, force: true });

  const articles = await getAllBlogArticles();
  for (const article of articles) {
    const directory = path.join(outputRoot, article.category);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, `${article.slug}.json`), JSON.stringify(article), "utf8");
  }

  console.log(`Generated ${articles.length} preprocessed blog articles.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
