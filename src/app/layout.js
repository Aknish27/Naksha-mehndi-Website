import "./globals.css";
import siteConfig from "@/config/siteConfig";

const { name, seoTitle, seoDescription, siteUrl, images, publishing } = siteConfig;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: seoTitle, template: `%s | ${name}` },
  description: seoDescription,
  applicationName: name,
  alternates: { canonical: "/" },
  // Search engines are blocked until PUBLISHING.allowIndexing in siteConfig.js is true.
  robots: publishing.allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: name,
    title: seoTitle,
    description: seoDescription,
    url: "/",
    images: [{ url: images.og.src, width: images.og.width, height: images.og.height, alt: images.og.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [images.og.src],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF8EE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        {/* Fonts: Cormorant Garamond (headings) + DM Sans (body), loaded by the browser from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
