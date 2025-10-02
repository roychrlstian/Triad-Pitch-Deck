import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Triad-Pitch-Deck",
  description: "TRIAD Platform",
  icons: {
    icon: "/TRIAD.png",
    shortcut: "/TRIAD.png",
    apple: "/TRIAD.png",
  },
  openGraph: {
    title: "TRIAD",
    description: "TRIAD Platform",
    images: [
      {
        url: "/TRIAD.png",
        width: 512,
        height: 512,
        alt: "TRIAD Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased snap-y bg-black text-white`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
