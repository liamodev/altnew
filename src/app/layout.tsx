import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/widgets/Header";
import Footer from "@/components/widgets/Footer";
import { headerData, footerData } from "@/lib/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Altitude Consulting",
    template: "%s — Altitude Consulting",
  },
  description: "Board-Ready AI Strategy in 90 Days. We help COOs and GMs of mid-sized financial firms unlock the full potential of AI—without compromising governance or wasting resources.",
  keywords: ["AI Strategy", "Financial Services", "Center of Excellence", "AI Governance", "Consulting"],
  authors: [{ name: "Altitude Consulting" }],
  creator: "Altitude Consulting",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.altitude7.com",
    title: "Altitude Consulting — Board-Ready AI Strategy in 90 Days",
    description: "Board-Ready AI Strategy in 90 Days. We help COOs and GMs of mid-sized financial firms unlock the full potential of AI—without compromising governance or wasting resources.",
    siteName: "Altitude Consulting",
    images: [
      {
        url: "/images/AI-CoE-Consult.jpg",
        width: 1200,
        height: 628,
        alt: "AI Strategy Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altitude Consulting — Board-Ready AI Strategy in 90 Days",
    description: "Board-Ready AI Strategy in 90 Days. We help COOs and GMs of mid-sized financial firms unlock the full potential of AI—without compromising governance or wasting resources.",
    images: ["/images/AI-CoE-Consult.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="2xl:text-[20px]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-default bg-page tracking-tight`}
      >
        <Header data={headerData} isSticky />
        <main>{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
