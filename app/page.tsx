import { FlagshipHomepage } from "@/components/sections/flagship-homepage";
import { StructuredData } from "@/components/seo/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <FlagshipHomepage />
    </>
  );
}
