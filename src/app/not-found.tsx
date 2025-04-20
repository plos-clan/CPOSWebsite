'use client'

import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="text-white">
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
                <h1 className="text-5xl font-semibold mb-4">404 Page</h1>
                <p className="mb-6 text-lg">页面不存在</p>
                <Link href="/public" className="text-blue-400 underline hover:text-blue-300 transition">
                    回到首页
                </Link>
            </div>
        </main>
    )
}