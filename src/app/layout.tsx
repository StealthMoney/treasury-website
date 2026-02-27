import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title:
    "Stealth Treasury | Corporate Treasury Infrastructure for Global South",
  description:
    "Stealth Treasury helps businesses securely hold and manage Company treasury using stealth custody technology. Build your company’s treasury with privacy and confidence.",
  keywords: [
    "Stealth Treasury",
    "corporate treasury custody",
    "corporate treasury",
    "crypto custody",
    "Treasury for companies",
    "secure treasury management",
    "crypto security platform",
    "Corporate treasury",
    "Corporate Treasury Infrastructure",
  ],
  authors: [{ name: "Stealth" }],
  creator: "Stealth",
  metadataBase: new URL("https://www.stealthtreasury.com"),
  openGraph: {
    title:
      "Stealth Treasury | Corporate Treasury Infrastructure for Global South",
    description:
      "Hold and manage Treasury with enterprise-level security and stealth custody. Protect your company's crypto assets with Stealth Treasury.",
    url: "https://www.stealthtreasury.com",
    siteName: "Stealth Treasury",
    images: [
      {
        url: "/images/office-hero.png",
        width: 1200,
        height: 630,
        alt: "Stealth Treasury -  Corporate Treasury Infrastructure for Global South",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Stealth Treasury |  Corporate Treasury Infrastructure for Global South",
    description:
      "Stealth Treasury helps businesses hold and manage Your company Treasury with stealth custody solutions for maximum privacy and control.",
    images: ["/images/office-hero.png"],
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
      <body
        className={`antialiased max-w-[1440px] m-auto !overflow-x-hidden my-scroll-container`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
