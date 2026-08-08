import { BlogExperiencePage } from "@/components/pages/blog-experience-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Notes",
  description:
    "Notes from AiRedHQ: product decisions, engineering lessons and applied AI research from the teams building our products.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogExperiencePage />;
}
