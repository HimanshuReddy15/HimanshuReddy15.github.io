import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Dock from "@/components/Dock";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himanshu Reddy Mukkera — Portfolio",
  description:
    "Full-Stack & AI/ML Engineer — Climate Tech, EdTech, Travel Rewards, Legal Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#080c14] text-white min-h-screen antialiased`}
      >
        {/* Ambient purple glow */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="fixed inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <main className="relative min-h-screen pb-28">
          <PageTransition>{children}</PageTransition>
        </main>

        <Dock />
      </body>
    </html>
  );
}
