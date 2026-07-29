import Link from "next/link";
import { ArrowRight, BookOpen, Bot, Map, ShieldCheck, Smartphone } from "lucide-react";
import { Container } from "@/components/layout/container";

const editorialTracks = [
  [Bot, "Applied AI", "Evaluation, explainability, workflow design and practical uses of language models."],
  [BookOpen, "Product notes", "What building hiARed, GoBazaar and YojIQ teaches us about real product decisions."],
  [ShieldCheck, "Trust by design", "Privacy, accessibility and clarity in products that handle consequential information."],
  [Map, "Discovery systems", "Search, maps, local context and the architecture of useful marketplaces."],
  [Smartphone, "Interface craft", "Design systems, responsive interaction and the details behind calm software."],
] as const;

export function BlogExperiencePage() {
  return (
    <main className="overflow-hidden bg-[#050608] text-white">
      <section className="relative min-h-[calc(82svh-4rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(35,136,255,.1),transparent_30rem)]" />
        <Container className="relative grid min-h-[calc(82svh-4rem)] max-w-[96rem] items-end gap-16 pb-20 pt-24 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#5a9fe8]">AiRedHQ Notes</p>
            <h1 className="mt-7 max-w-[9ch] text-[clamp(4rem,7.5vw,8rem)] font-semibold leading-[.88]">
              Document the work, not the <span className="text-[#2f91e8]">hype.</span>
            </h1>
          </div>
          <p className="max-w-xl pb-2 text-xl leading-8 text-white/52">
            Product decisions, engineering lessons and research notes from building practical AI,
            immersive experiences and modern software products.
          </p>
        </Container>
      </section>

      <section className="border-y border-white/8 py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">Editorial tracks</p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
                Five subjects worth returning to.
              </h2>
            </div>
            <div className="border-t border-white/10">
              {editorialTracks.map(([Icon, title, description]) => (
                <article key={title} className="group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[3rem_13rem_1fr]">
                  <Icon className="size-5 text-[#5a9fe8] transition-transform group-hover:scale-110" />
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-7 text-white/42">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-40">
        <Container className="max-w-[96rem]">
          <div className="grid min-h-[34rem] items-center gap-16 bg-[#080a0d] px-8 py-16 sm:px-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="font-mono text-xs text-[#5a9fe8]">STATUS / PRE-PUBLICATION</span>
              <h2 className="mt-7 text-5xl font-semibold leading-[.95] sm:text-7xl">The archive begins with verified work.</h2>
            </div>
            <div>
              <p className="max-w-xl text-xl leading-8 text-white/52">
                No articles are published yet. We will not create fictional posts, dates or authors
                to make an empty archive look established.
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/38">
                The first notes should document real product decisions from hiARed, GoBazaar,
                YojIQ and the AiRedHQ engineering practice.
              </p>
              <Link href="/products" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#5a9fe8]">
                Explore the work behind the notes <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
