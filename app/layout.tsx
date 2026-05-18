import type { Metadata, Viewport } from "next";

import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060b14",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://slate.so"),
  title: {
    default: "Slate | AI Infrastructure, Refined.",
    template: "%s | Slate",
  },
  description:
    "Slate builds reliable AI systems for modern products, from real-time moderation APIs to intelligent conversational platforms.",
  keywords: [
    "Slate",
    "AI infrastructure",
    "AI moderation API",
    "enterprise AI",
    "AI chatbot platform",
    "Sentinel",
    "Sentra",
  ],
  alternates: {
    canonical: "https://slate.so",
  },
  openGraph: {
    title: "Slate",
    description:
      "Powerful AI systems designed for modern businesses, products, and developers.",
    url: "https://slate.so",
    siteName: "Slate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slate",
    description:
      "Reliable AI infrastructure for modern products, teams, and developers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans text-slate-100 antialiased">{children}</body>
    </html>
  );
}
