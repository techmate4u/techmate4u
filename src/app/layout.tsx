import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechMate4u | Digital Product Studio & Web Engineering",
  description: "We engineer highly interactive, conversion-optimized websites and AI-integrated digital systems that accelerate business growth.",
  keywords: ["web development", "AI automation", "Next.js applications", "digital product studio", "SaaS websites"],
  authors: [{ name: "TechMate4u" }],
  creator: "TechMate4u",
  icons: {
    icon: "/assets/t-logo.webp",
    apple: "/assets/t-logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techmate4u.com",
    siteName: "TechMate4u",
    title: "TechMate4u | Next-Gen Digital Products",
    description: "Accelerate your business with performance-driven code and beautiful web design.",
    images: [
      {
        url: "/assets/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "TechMate4u Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechMate4u | Digital Product Studio",
    description: "We engineer highly interactive, conversion-optimized websites and AI-integrated digital systems that accelerate business growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" style={{ backgroundColor: '#0a1a1f' }}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
        style={{ backgroundColor: '#0a1a1f' }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
