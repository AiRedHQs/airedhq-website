import { Container } from "@/components/layout/container";

export type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

export function LegalPage({
  label,
  title,
  introduction,
  sections,
}: {
  label: string;
  title: string;
  introduction: string;
  sections: readonly LegalSection[];
}) {
  return (
    <main className="bg-[#050608] text-white">
      <section className="border-b border-white/8 py-24 sm:py-32">
        <Container className="max-w-[88rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#5a9fe8]">{label}</p>
          <h1 className="mt-7 max-w-[11ch] text-5xl font-semibold leading-[.95] sm:text-7xl">{title}</h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/50">{introduction}</p>
          <p className="mt-7 inline-flex border border-amber-300/20 bg-amber-300/[.06] px-4 py-3 text-xs leading-5 text-amber-100/70">
            Operational draft for Version 1. Review with qualified legal counsel before public production launch.
          </p>
        </Container>
      </section>
      <Container className="grid max-w-[88rem] gap-16 py-20 lg:grid-cols-[15rem_1fr] lg:py-28">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/30">On this page</p>
          <nav aria-label={`${title} sections`} className="mt-6 space-y-3">
            {sections.map((section, index) => (
              <a key={section.title} href={`#legal-${index + 1}`} className="block text-sm text-white/42 transition hover:text-white">
                {section.title}
              </a>
            ))}
          </nav>
        </aside>
        <div>
          {sections.map((section, index) => (
            <section key={section.title} id={`legal-${index + 1}`} className="scroll-mt-28 border-t border-white/10 py-10 first:border-t-0 first:pt-0">
              <div>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-5 max-w-3xl text-sm leading-7 text-white/48">{paragraph}</p>
                  ))}
                  {section.items ? (
                    <ul className="mt-6 max-w-3xl space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-4 text-sm leading-7 text-white/48">
                          <span className="mt-3 size-1 shrink-0 rounded-full bg-[#5a9fe8]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
