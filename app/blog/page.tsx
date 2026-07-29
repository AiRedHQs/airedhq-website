import { BlogExperiencePage } from "@/components/pages/blog-experience-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Notes",
  description:
    "Product decisions, engineering lessons and research notes from AiRedHQ.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogExperiencePage />;
}
