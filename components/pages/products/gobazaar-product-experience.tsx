import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Compass,
  MapPin,
  Search,
  ShieldCheck,
  Store,
  Tags,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const discoveryModes = [
  [
    Store,
    "Bazaars and businesses",
    "Explore trusted local places through structured profiles and useful context.",
  ],
  [
    Tags,
    "Nearby offers",
    "Find timely offers connected to places that are genuinely nearby.",
  ],
  [
    CalendarDays,
    "Events and fairs",
    "See what is happening around the city without searching across scattered sources.",
  ],
  [
    Compass,
    "Intent-aware discovery",
    "Move between food, shopping, services and experiences without losing local relevance.",
  ],
] as const;

export default function GoBazaarProductExperience() {
  return (
    <main className="overflow-hidden bg-[#06101c] text-white">
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
        <Image
          src="/gobazaar/gobazaar-product-preview.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-65"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#06101c_4%,rgba(6,16,28,.94)_32%,rgba(6,16,28,.12)_78%),linear-gradient(0deg,#06101c,transparent_45%)]" />
        <Container className="relative flex min-h-[calc(100svh-4rem)] max-w-[96rem] items-center py-20">
          <div className="max-w-3xl">
            <Image
              src="/gobazaar/GoBazaar Logo Dark Transparent Trimmed.png"
              alt="GoBazaar"
              width={1693}
              height={929}
              className="h-auto w-56 object-contain"
              priority
            />
            <p className="mt-14 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#3898ff]">
              Hyperlocal discovery across India · Private beta
            </p>
            <h1 className="mt-6 text-[clamp(4rem,7vw,7.4rem)] font-semibold leading-[.9]">
              Your city has more
              <br />
              to <span className="text-[#2388ff]">discover.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/60">
              Find nearby bazaars, food, shopping, events and offers through one living
              map of local life.
            </p>
            <div className="mt-9 flex max-w-xl items-center gap-3 rounded-md bg-white p-2 pl-4 text-[#07111c]">
              <Search className="size-5 text-black/35" />
              <span className="flex-1 text-sm text-black/45">
                Search a market, place or experience
              </span>
              <Link
                href="/contact"
                className="rounded bg-[#2388ff] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#55a5ff] hover:text-[#06101c]"
              >
                Join waitlist
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#3898ff]">
              Why GoBazaar
            </p>
            <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
              Local life is rich.
              <br />
              Finding it is <span className="text-[#2388ff]">fragmented.</span>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/48">
              Search engines know what is popular. Social feeds know what is promoted.
              GoBazaar is designed to understand what is useful nearby, right now.
            </p>
          </div>
          <div className="divide-y divide-white/10 border-t border-white/10">
            {discoveryModes.map(([Icon, title, description]) => (
              <article key={title} className="grid gap-5 py-9 sm:grid-cols-[3rem_1fr]">
                <Icon className="size-6 text-[#3898ff]" />
                <div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/44">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative min-h-[52rem] overflow-hidden border-y border-white/8">
        <Image
          src="/gobazaar/gobazaar-product-preview-transparent.webp"
          alt="GoBazaar map showing local markets and nearby offers"
          fill
          className="object-contain object-right opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#06101c_8%,rgba(6,16,28,.93)_38%,transparent_76%)]" />
        <Container className="relative flex min-h-[52rem] max-w-[96rem] items-center">
          <div className="max-w-lg">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#3898ff]">
              The GoBazaar USP
            </p>
            <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
              A map built around <span className="text-[#2388ff]">intent.</span>
            </h2>
            <p className="mt-7 text-sm leading-7 text-white/50">
              Discovery begins with where you are, then adapts to what you need: a market,
              a meal, an event, a service or simply something worth exploring.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Food", "Shopping", "Street bazaars", "Fairs", "Events", "Services"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#2388ff]/25 bg-[#2388ff]/8 px-4 py-2 text-xs text-[#75b8ff]"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#3898ff]">
                Better local decisions
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
                Know before you <span className="text-[#2388ff]">go.</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-white/55">
              Useful discovery needs more than a pin. GoBazaar brings together practical
              information that helps people decide whether a place fits the moment.
            </p>
          </div>
          <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">
            {[
              [
                "Place confidence",
                "Location, category, operating status and merchant verification where available.",
              ],
              [
                "Timely relevance",
                "Offers and events carry visible dates instead of lingering indefinitely.",
              ],
              [
                "Local context",
                "Understand what a place is known for and why it may be worth visiting.",
              ],
            ].map(([title, description]) => (
              <article key={title} className="min-h-72 bg-[#06101c] p-7">
                <span className="block h-px w-12 bg-[#3898ff]" aria-hidden="true" />
                <h3 className="mt-16 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/42">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#081728] py-28 sm:py-36">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[.74fr_1.26fr]">
          <div>
            <ShieldCheck className="size-8 text-[#3898ff]" />
            <h2 className="mt-8 text-5xl font-semibold leading-[.95] sm:text-7xl">
              Discovery people can <span className="text-[#2388ff]">trust.</span>
            </h2>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {[
              [
                MapPin,
                "Location integrity",
                "Clear location and service-area information.",
              ],
              [
                Store,
                "Merchant ownership",
                "Profiles that businesses can claim and maintain.",
              ],
              [
                CalendarDays,
                "Current information",
                "Dates and availability shown where relevant.",
              ],
              [
                ShieldCheck,
                "Visible verification",
                "Verified and unverified information are not presented alike.",
              ],
            ].map(([Icon, title, description]) => (
              <article key={title as string} className="bg-[#081728] p-7">
                <Icon className="size-6 text-[#3898ff]" />
                <h3 className="mt-10 text-xl font-semibold">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-white/42">
                  {description as string}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid min-h-[34rem] max-w-[96rem] place-items-center bg-[radial-gradient(circle_at_50%_100%,rgba(35,136,255,.34),transparent_58%)] text-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#3898ff]">
              India-wide private beta
            </p>
            <h2 className="mx-auto mt-6 max-w-[12ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Be first to explore what&apos;s nearby.
            </h2>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#2388ff] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#55a5ff] hover:text-[#06101c]"
            >
              Join the waitlist <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
