"use client";

import { useEffect, useState } from "react";

export function ArticleReadingProgress({ accent }: { accent: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector("[data-blog-article]");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const distance = Math.max(1, article.scrollHeight - window.innerHeight);
      setProgress(Math.min(1, Math.max(0, -rect.top / distance)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-0.5 bg-transparent" aria-hidden="true">
      <div
        className="h-full origin-left transition-transform duration-150 motion-reduce:transition-none"
        style={{ backgroundColor: accent, transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

