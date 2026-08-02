import Image from "next/image";
import type { ArticleVisual } from "@/src/types/blog";

export function ArticleEditorialImage({
  visual,
  priority = false,
  className = "",
}: {
  visual: ArticleVisual;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`group ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.035]">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          priority={priority}
          sizes={priority ? "(min-width: 1024px) 46vw, 92vw" : "(min-width: 1024px) 52rem, 92vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>
      <figcaption className="mt-3 text-xs leading-5 text-white/34">{visual.caption}</figcaption>
    </figure>
  );
}
