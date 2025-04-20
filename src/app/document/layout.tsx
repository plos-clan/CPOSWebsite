'use client'
import { Geist, Geist_Mono } from "next/font/google";
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
                className="fixed top-0 left-0 right-0 h-14 z-50 bg-neutral-950 backdrop-blur border-b border-neutral-800">
                <DocumentNavbar/>
            </div>
            <div className="flex pt-14 w-full h-screen">
                <aside
                    className="w-[20%] bg-neutral-950 text-white flex justify-end">
                    <Sidebar/>
                </aside>
                <div className="w-[80%] h-[calc(100vh-56px)] bg-neutral-950 text-gray-100 p-6">
                    {children}
                </div>
            </div>
        </div>
        </body>
        </html>
    )
}