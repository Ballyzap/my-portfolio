import { Header } from "@/components/layouts/header/header";
import { Footer } from "@/components/layouts/footer/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontInter = Inter({ subsets: ["latin"], variable: "--font-sans" });

import Providers from "@/components/lib/providers";
import { cn } from "@/components/lib/utils";

export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "My Portfolio ",
};

// Revalidate content every hour
// export const revalidate = 3600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
