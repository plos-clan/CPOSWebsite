"use client"

import {useEffect, useState} from "react"
import VisibilityAnimation from "@/components/VisibilityAnimation";

export default function GitHubStats() {
    const [data, setData] = useState({
        stars: 0,
        forks: 0,
        watchers: 0,
        contributors: 0
    })

    useEffect(() => {
        fetch("/api/github")
            .then(res => res.json())
            .then(setData)
            .catch(console.error)
    }, [])

    return (
        <section className="py-24 px-6 bg-[#111111]">
            <div className="max-w-5xl mx-auto text-center">
                <VisibilityAnimation
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 30}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    <h2 className="text-3xl font-bold text-white mb-12">GitHub 仓库统计</h2>
                    <div className="bg-[#000000] rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">★ {data.stars}</span>
                            <span className="text-sm text-gray-400">Star</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">🍴 {data.forks}</span>
                            <span className="text-sm text-gray-400">Fork</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">👁️ {data.watchers}</span>
                            <span className="text-sm text-gray-400">Watching</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">👥 {data.contributors}</span>
                            <span className="text-sm text-gray-400">Contributors</span>
                        </div>
                    </div>
                </VisibilityAnimation>
            </div>
        </section>
    )
}