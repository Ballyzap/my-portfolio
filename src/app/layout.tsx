import { Header } from "@/components/layouts/header/header";
import { Footer } from "@/components/layouts/footer/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontInter = Inter({ subsets: ["latin"], variable: "--font-sans" });

import Providers from "@/components/lib/providers";
import { cn } from "@/components/lib/utils";

export const metadata: Metadata = {
  title:
    "Joshua Bala Noma | Full Stack Developer - React, Next.js, Node.js WordPress Expert",
  description:
    "Full-stack web developer specializing in React, Next.js, TypeScript, Node.js and WordPress. Building scalable web applications and e-commerce solutions in Lagos, Nigeria. View my portfolio of successful projects.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "WordPress Developer",
    "Web Developer Lagos",
    "Nigeria Web Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Portfolio",
    "Joshua Bala Noma",
    "Ballyzap",
    "Web Applications",
    "E-commerce Soltutions",
    "Remote Web Developer",
  ],
  authors: [{ name: "Joshua Bala Noma" }],
  creator: "Joshua Bala Noma",
  publisher: "Joshua Bala Noma",
  metadataBase: new URL("https://ballyzap.netlify.app"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ballyzap.netlify.app",
    title: "Joshua Bala Noma | Full Stack Developer",
    description:
      "Full-stack web developer specializing in React, Next.js, TypeScript, Node.js and WordPress. Building modern web applications in Lagos, Nigeria.",
    siteName: "Joshua Bala Noma Portfolio",
    images: [
      {
        url: "/assets/image/og-image.jpg", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Joshua Bala Noma - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Bala Noma | Full Stack Developer",
    description:
      "Full-stack web developer specializing in React, Next.js, TypeScript, Node.js and WordPress.",
    images: ["/assets/image/og-image.jpg"],
    creator: "@yourhandle", // Replace with your actual Twitter handle
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
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon.png",
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joshua Bala Noma",
    url: "https://ballyzap.netlify.app", // Replace with your actual domain
    image: "https://ballyzap.netlify.app/assets/image/bala--bass.jpg",
    sameAs: [
      "https://www.linkedin.com/in/joshua-bala-noma", // Replace with your actual profiles
      "https://twitter.com/yourhandle",
      "https://github.com/yourhandle",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "WordPress",
      "Web Development",
      "JavaScript",
      "Node.js",
      "Tailwind CSS",
    ],
    email: "ballyzap@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Niger State",
      addressRegion: "Niger State",
      addressCountry: "NG",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={cn("min-h-screen font-sans antialiased", fontInter.variable)}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
