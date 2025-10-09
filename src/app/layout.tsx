import type { Metadata } from "next";
import { Geist, Playfair, Inter } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stealth Treasury | Secure Bitcoin Custody for Companies",
  description:
    "Stealth Treasury helps businesses securely hold and manage Bitcoin using stealth custody technology. Build your company’s Bitcoin treasury with privacy and confidence.",
  keywords: [
    "Stealth Treasury",
    "Bitcoin custody",
    "corporate treasury",
    "crypto custody",
    "Bitcoin for companies",
    "secure Bitcoin management",
    "crypto security platform",
  ],
  authors: [{ name: "Stealth" }],
  creator: "Stealth",
  metadataBase: new URL("https://www.stealthtreasury.com"),
  openGraph: {
    title: "Stealth Treasury | Secure Bitcoin Custody for Companies",
    description:
      "Hold and manage Bitcoin with enterprise-level security and stealth custody. Protect your company's crypto assets with Stealth Treasury.",
    url: "https://www.stealthtreasury.com",
    siteName: "Stealth Treasury",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Stealth Treasury - Secure Bitcoin Custody",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stealth Treasury | Secure Bitcoin Custody for Companies",
    description:
      "Stealth Treasury helps businesses hold and manage Bitcoin with stealth custody solutions for maximum privacy and control.",
    images: ["/images/hero.png"],
    creator: "@stealthmoney_",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
