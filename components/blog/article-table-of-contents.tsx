import type { TableOfContentsItem } from "@/src/types/blog";

function TocLinks({ items }: { items: TableOfContentsItem[] }) {
  return (
    <ol className="space-y-3">
      {items.filter((item) => item.level === 2).map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="block text-sm leading-5 text-white/42 transition-colors hover:text-[color:var(--article-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--article-accent)]"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function ArticleTableOfContents({ items }: { items: TableOfContentsItem[] }) {
  return (
    <>
      <details className="mb-10 bg-white/[0.035] p-5 lg:hidden">
        <summary className="cursor-pointer text-sm font-semibold text-white">On this page</summary>
        <div className="mt-5 max-h-72 overflow-y-auto pr-2">
          <TocLinks items={items} />
        </div>
      </details>
      <aside className="sticky top-28 hidden max-h-[calc(100vh-9rem)] overflow-y-auto pr-5 lg:block" aria-label="On this page">
        <p className="mb-5 text-[9px] font-semibold uppercase tracking-[.22em] text-white/28">On this page</p>
        <TocLinks items={items} />
      </aside>
    </>
  );
}

