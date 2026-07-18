import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techmate4u.com"),
  title: "TechMate4u | Digital Product Studio & Web Engineering | Ahmedabad, India",
  description: "We engineer highly interactive, conversion-optimized websites and AI-integrated digital systems that accelerate business growth.",
  keywords: ["web development", "AI automation", "Next.js applications", "digital product studio", "SaaS websites", "web development Ahmedabad", "AI automation India"],
  authors: [{ name: "TechMate4u" }],
  creator: "TechMate4u",
  icons: {
    icon: [
      { url: "/assets/t-logo.webp", type: "image/webp" },
    ],
    apple: "/assets/t-logo.webp",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techmate4u.com",
    siteName: "TechMate4u",
    title: "TechMate4u | Next-Gen Digital Products | Ahmedabad, India",
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
    title: "TechMate4u | Digital Product Studio | Ahmedabad, India",
    description: "We engineer highly interactive, conversion-optimized websites and AI-integrated digital systems that accelerate business growth.",
  },
  verification: {
    google: "w56WffuDI3QBXzEvLwEoDB7K9mra_NmO_PZCwtgMMFM",
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" style={{ backgroundColor: '#ffffff' }}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FW1J903DLP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FW1J903DLP');
          `}
        </Script>
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
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "402, Corporate House, Nr. Dinesh Hall, Ashram Road",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380009",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919327263267",
                "contactType": "sales",
                "email": "info@techmate4u.com"
              },
              "sameAs": [
                "https://wa.me/919327263267",
                "https://www.linkedin.com/company/techmate-4u",
                "https://www.instagram.com/officialtechmate4u/"
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
