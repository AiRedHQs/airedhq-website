import type { Metadata } from "next";

import { siteConfig } from "@/constants/brand";

type MetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

const defaultSocialImage = {
  url: "/airedhq/og-default.png",
  width: 1200,
  height: 630,
  alt: "AiRedHQ",
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: MetadataOptions = {}): Metadata {
  const url = new URL(path, siteConfig.url);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title ?? siteConfig.name,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [defaultSocialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteConfig.name,
      description,
      images: [defaultSocialImage.url],
    },
  };
}
