import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ApplicationShell } from "@/components/layout/application-shell";
import { AppProviders } from "@/components/providers/app-providers";
import { siteConfig } from "@/constants/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AiRedHQ - AI, Immersive Tech & Product Engineering",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  other: {
    "google-adsense-account": "ca-pub-2453493824530034",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    other: [{ rel: "icon", url: "/icon" }],
    shortcut: "/favicon.ico",
    apple: "/apple-icon",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/airedhq/og-default.png",
        width: 1200,
        height: 630,
        alt: "AiRedHQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/airedhq/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const googleTagManagerId =
    process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ?? "GTM-TL6JCCCK";

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <GoogleTagManager gtmId={googleTagManagerId} />
        <AppProviders>
          <ApplicationShell>{children}</ApplicationShell>
        </AppProviders>
        {googleAnalyticsId ? <GoogleAnalytics gaId={googleAnalyticsId} /> : null}
      </body>
    </html>
  );
}
