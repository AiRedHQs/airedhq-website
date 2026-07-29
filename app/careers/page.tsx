import { StandardPage } from "@/components/pages/standard-page";
import { standardPages } from "@/data/standard-pages";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Careers",
  description: standardPages.careers.description,
  path: "/careers",
});

export default function CareersPage() {
  return <StandardPage page={standardPages.careers} />;
}
