'use client'
import { Geist, Geist_Mono } from "next/font/google";
import { motion } from 'framer-motion'
import {logoFont} from "@/components/Fonts"
import Sidebar from '@/components/Sidebar'
import DocumentNavbar from '@/components/DocumentNavbar'
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function DocumentLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${logoFont.variable}`}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex mx-auto h-screen w-screen overflow-hidden">
            <div
                className="fixed top-0 left-0 right-0 h-14 z-50">
                <DocumentNavbar/>
            </div>
            <div className="flex pt-14 w-full h-screen">
                <aside
                    className="w-[20%] bg-neutral-950 text-white flex justify-end top-1">
                    <Sidebar/>
                </aside>
                <div className="w-[80%]  h-[calc(100vh-56px)] overflow-y-auto bg-neutral-950 text-gray-100 p-6">
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </div>
        </body>
        </html>
)
}