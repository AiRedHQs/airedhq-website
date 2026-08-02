export function LegacyHashRedirect() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(() => {
          if (window.location.pathname !== "/") return;
          const routes = {
            about: "/about",
            contact: "/contact",
            industries: "/industries",
            products: "/products",
            services: "/solutions",
            solutions: "/solutions",
            "case-studies": "/case-studies"
          };
          const destination = routes[window.location.hash.slice(1).toLowerCase()];
          if (destination) window.location.replace(destination);
        })();`,
      }}
    />
  );
}
