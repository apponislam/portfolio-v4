import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider/LenisProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Appon Islam | Full-Stack Developer",
    template: "%s | Appon Islam",
  },
  description: "Dynamic development portfolio showcasing projects, skills, education, and credentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased h-full flex flex-col min-h-screen bg-[#eaeaea] text-neutral-950`} suppressHydrationWarning>
        <LenisProvider>
          <Header />
          <div className="flex-1 flex flex-col pt-24">
            {children}
          </div>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
