import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers3, MapPinned, ShieldCheck, UsersRound } from "lucide-react";
import { Container } from "@/components/layout/container";

const products = [
  {
    name: "hiARed",
    label: "AI Recruitment Ecosystem",
    title: "Hiring intelligence that shows its reasoning.",
    description:
      "A transparent recruitment system connecting company context, job quality, candidate fit, resume intelligence and end-to-end hiring workflows.",
    href: "/products/hiared",
    image: "/hiared/hiared-product-preview-transparent.webp",
    accent: "#6102f5",
    Icon: UsersRound,
  },
  {
    name: "GoBazaar",
    label: "Hyperlocal Discovery Platform",
    title: "A clearer way to discover what is nearby.",
    description:
      "A map-led product for finding bazaars, businesses, offers, services and events while giving local merchants richer digital context.",
    href: "/products/gobazaar",
    image: "/gobazaar/gobazaar-product-preview-transparent.webp",
    accent: "#2388ff",
    Icon: MapPinned,
  },
  {
    name: "YojIQ",
    label: "Smart Financial Planning Platform",
    title: "Financial planning without surrendering privacy.",
    description:
      "A manual-first planning experience for budgets, emergency funds, insurance awareness, savings goals and investment understanding.",
    href: "/products/yojiq",
    image: "/yojiq/yojiq-product-preview-transparent-clean.webp",
    accent: "#8cdf28",
    Icon: ShieldCheck,
  },
] as const;

export function ProductsExperiencePage() {
  return (
    <main className="overflow-hidden bg-[#050608] text-white">
      <section className="relative min-h-[calc(100svh-4rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_65%,rgba(97,2,245,.11),transparent_28rem),radial-gradient(circle_at_75%_35%,rgba(35,136,255,.1),transparent_30rem),radial-gradient(circle_at_74%_80%,rgba(140,223,40,.07),transparent_25rem)]" />
        <Container className="relative grid min-h-[calc(100svh-4rem)] max-w-[96rem] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[.82fr_1.18fr] lg:gap-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#5a9fe8]">
              Products · Built and operated by AiRedHQ
            </p>
            <h1 className="mt-7 max-w-[9ch] text-[clamp(4rem,7.3vw,7.8rem)] font-semibold leading-[.88]">
              Three products. Three real problem <span className="text-[#2f91e8]">spaces.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/50">
              Our products are where strategy, design, engineering and operating reality meet.
              They are not portfolio decoration; they are the proof behind our work.
            </p>
          </div>
          <div
            className="relative mx-auto aspect-[1.18/1] w-full max-w-[48rem] sm:aspect-[1.35/1] lg:aspect-[1.22/1]"
            aria-label="AiRedHQ product portfolio"
          >
            <div className="absolute right-[1%] top-[3%] w-[71%]">
              <Image src={products[0].image} alt="" width={1536} height={1024} sizes="(max-width: 1023px) 72vw, 48vw" className="h-auto w-full object-contain opacity-80" priority />
            </div>
            <div className="absolute bottom-[1%] left-0 w-[64%]">
              <Image src={products[1].image} alt="" width={1692} height={929} sizes="(max-width: 1023px) 65vw, 44vw" className="h-auto w-full object-contain opacity-90" priority />
            </div>
            <div className="absolute bottom-[1%] right-[-3%] w-[36%]">
              <Image src={products[2].image} alt="" width={1536} height={1024} sizes="(max-width: 1023px) 32vw, 22vw" className="h-auto w-full object-contain" priority />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 py-28 sm:py-36">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <Layers3 className="size-8 text-[#5a9fe8]" />
            <h2 className="mt-8 max-w-[10ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Products come before services.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="max-w-2xl text-2xl leading-10 text-white/65 sm:text-3xl sm:leading-[1.45]">
              Building our own products forces us to make the decisions every product team
              faces: what matters, what earns trust, what scales and what should remain simple.
            </p>
          </div>
        </Container>
      </section>

      {products.map((product, index) => {
        const Icon = product.Icon;
        return (
          <article
            key={product.name}
            className={index === 1 ? "bg-[#06101d] py-28 sm:py-40" : "py-28 sm:py-40"}
          >
            <Container className="grid max-w-[96rem] items-center gap-16 lg:grid-cols-[.72fr_1.28fr]">
              <div className={index === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4">
                  <Icon className="size-5" style={{ color: product.accent }} />
                  <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-white/35">
                    {product.label}
                  </p>
                </div>
                <h2 className="mt-8 text-5xl font-semibold leading-[.95] sm:text-7xl">
                  {product.name}
                </h2>
                <h3 className="mt-6 max-w-[13ch] text-2xl font-medium leading-tight text-white/75 sm:text-3xl">
                  {product.title}
                </h3>
                <p className="mt-6 max-w-lg text-sm leading-7 text-white/42">{product.description}</p>
                <Link
                  href={product.href}
                  className="mt-9 inline-flex items-center gap-3 text-sm font-semibold"
                  style={{ color: product.accent }}
                >
                  Explore {product.name} <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className={`relative min-h-[34rem] ${index === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={product.image}
                  alt={`${product.name} product interface`}
                  fill
                  className="object-contain transition duration-700 hover:scale-[1.025]"
                  sizes="(max-width: 1024px) 90vw, 58vw"
                />
              </div>
            </Container>
          </article>
        );
      })}

      <section className="py-12">
        <Container className="grid min-h-[32rem] max-w-[96rem] place-items-center bg-[radial-gradient(circle_at_50%_100%,rgba(35,136,255,.26),transparent_58%)] text-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#5a9fe8]">
              Build from product experience
            </p>
            <h2 className="mx-auto mt-6 max-w-[12ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Bring us the next problem worth solving.
            </h2>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black">
              Start a conversation <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
