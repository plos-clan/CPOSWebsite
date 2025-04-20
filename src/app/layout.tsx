'use client'
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"
import {logoFont} from "@/components/Fonts"
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const isDocs = pathname.startsWith('/document')
  if (isDocs) {
    return children
  }
  return (
    <html lang="en" className={`${logoFont.variable}`}>
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <Navbar/>
      <motion.div
          key={pathname}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.3}}
      >{children}
      </motion.div>
    <footer className="text-center py-6 text-sm text-gray-500 border-t border-zinc-800">
      © 2025 CoolPotOS. MIT Licensed. Built by plos-clan
    </footer>
    </body>
    </html>
  );
}
