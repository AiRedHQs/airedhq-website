import { BrandMark } from "@/components/navigation/brand-mark";
import { DesktopNavigation } from "@/components/navigation/desktop-navigation";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { Container } from "@/components/layout/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <BrandMark />
        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </header>
  );
}
