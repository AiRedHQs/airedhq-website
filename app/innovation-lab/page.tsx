import { StandardPage } from "@/components/pages/standard-page";
import { standardPages } from "@/data/standard-pages";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Innovation Lab",
  description: standardPages["innovation-lab"].description,
  path: "/innovation-lab",
});

export default function InnovationLabPage() {
  return <StandardPage page={standardPages["innovation-lab"]} />;
}
