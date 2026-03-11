import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siva Parvathi Nursery | Trees, Plants, Bulk Orders, Nursery Services",
  description:
    "Siva Parvathi Nursery offers healthy trees, fruit plants, native trees, decorative plants, and bulk nursery orders in Karnataka and across India. Contact for bulk booking, farm planting, and landscaping support.",
  keywords: [
    "Siva Parvathi Nursery",
    "nursery in Karnataka",
    "tree nursery India",
    "fruit plants",
    "native trees",
    "bulk tree orders",
    "farm plants",
    "landscaping plants",
    "Koratagere nursery",
    "Koppolu Ramana nursery",
  ],
  authors: [{ name: "Siva Parvathi Nursery" }],
  creator: "Siva Parvathi Nursery",
  publisher: "Siva Parvathi Nursery",
  metadataBase: new URL("https://www.sivaparvathinursery.in"),
  openGraph: {
    title: "Siva Parvathi Nursery",
    description:
      "Healthy trees, fruit plants, native trees, and bulk nursery orders for homes, farms, layouts, and landscaping.",
    url: "https://www.sivaparvathinursery.in",
    siteName: "Siva Parvathi Nursery",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siva Parvathi Nursery",
    description:
      "Healthy trees, fruit plants, native trees, and bulk nursery orders in Karnataka and across India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}