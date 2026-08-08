"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function pushDataLayer(event: Record<string, unknown>) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
}

export function AnalyticsPlaceholder() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (previousPath.current === pathname) return;

    pushDataLayer({
      event: "virtual_page_view",
      page_path: pathname,
      page_title: document.title,
    });
    previousPath.current = pathname;
  }, [pathname]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const control = target.closest<HTMLAnchorElement | HTMLButtonElement>("a, button");
      if (!control) return;

      const label = control.textContent?.replace(/\s+/g, " ").trim();
      if (!label) return;

      pushDataLayer({
        event: control instanceof HTMLAnchorElement ? "navigation_click" : "button_click",
        control_label: label.slice(0, 120),
        destination_url: control instanceof HTMLAnchorElement ? control.href : undefined,
        page_path: window.location.pathname,
      });
    };

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;

      pushDataLayer({
        event: "form_submit_attempt",
        form_name: form.getAttribute("name") ?? form.id ?? "unnamed_form",
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
