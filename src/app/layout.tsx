import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techmate4u.com"),
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
        url: "/assets/hero-visual.webp",
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
  verification: {
    google: "w56WffuDI3QBXzEvLwEoDB7K9mra_NmO_PZCwtgMMFM",
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" style={{ backgroundColor: '#ffffff' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "TechMate4u",
              "url": "https://techmate4u.com",
              "logo": "https://techmate4u.com/assets/t-logo.webp",
              "image": "https://techmate4u.com/assets/hero-visual.webp",
              "description": "Full-cycle digital product studio engineering high-performance websites, automation systems, and custom mobile applications.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919327263267",
                "contactType": "sales",
                "email": "info@techmate4u.com"
              },
              "sameAs": [
                "https://wa.me/919327263267"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
        style={{ backgroundColor: '#ffffff' }}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
