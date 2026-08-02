import { BarChart3, CalendarDays, Car, Home, Landmark, ShieldCheck, TrendingUp, WalletCards } from "lucide-react";
import type { CalculatorDefinition } from "@/constants/calculators";

const icons = { chart: BarChart3, wallet: WalletCards, home: Home, car: Car, landmark: Landmark, calendar: CalendarDays, shield: ShieldCheck, trend: TrendingUp };

export function CalculatorIcon({ name, className }: { name: CalculatorDefinition["icon"]; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
