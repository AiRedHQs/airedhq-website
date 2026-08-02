import Script from "next/script";

const ADSENSE_PUBLISHER_ID = "ca-pub-2453493824530034";

export function AdSenseScript() {
  return (
    <Script
      id="google-adsense"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
      crossOrigin="anonymous"
    />
  );
}
