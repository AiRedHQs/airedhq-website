import { AdSenseScript } from "@/components/ads/adsense-script";

export default function CalculatorsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><AdSenseScript />{children}</>;
}
