import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luma - Practical courses for curious people",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, " +
    "business and more - one focused lesson at a time.",
  openGraph: {
    title: "Luma - Practical courses for curious people",
    description:
      "Build skills that actually move you forward with short, practical, expert-led courses.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
