"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaDownload, FaTag } from "react-icons/fa"

interface Release {
    id: number
    tag_name: string
    name: string
    body: string
    html_url: string
    published_at: string
    assets: {
        name: string
        browser_download_url: string
        size: number
    }[]
}

function formatFileSize(size: number): string {
    if (size < 1024) return size + " B"
    if (size < 1024 * 1024) return (size / 1024).toFixed(1) + " KB"
    return (size / 1024 / 1024).toFixed(1) + " MB"
}

export default function ReleasePage() {
    const [releases, setReleases] = useState<Release[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://api.github.com/repos/xiaoyi1212/CoolPotOS/releases")
            .then((res) => res.json())
            .then((data) => {
                setReleases(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error("加载 Release 出错", err)
                setLoading(false)
            })
    }, [])

    return (
        <main className="max-w-4xl mx-auto text-white pt-32 p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">发行版本列表</h1>

            {loading && <p className="text-center text-gray-400">正在加载发布信息喵...</p>}

            {!loading && releases.length === 0 && (
                <p className="text-center text-gray-400">目前没有找到任何发行版本喵~</p>
            )}

            <ul className="space-y-10">
                {releases.map((release,i) => (
                    <motion.li
                        key={release.id}
                        className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md"
                        initial={{opacity: 0, y: -30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2 + i * 0.1,duration: 0.8}}
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            <a href={release.html_url} target="_blank" className="hover:underline text-blue-400">
                                <FaTag className="inline-block mr-2 text-blue-400"/> {/* 标签图标 */}
                                {release.name || release.tag_name}
                            </a>
                        </h2>
                        <p className="text-sm text-gray-500 mb-4">
                            版本标签：{release.tag_name}｜发布日期：{new Date(release.published_at).toLocaleDateString()}
                        </p>

                        {release.assets.length > 0 && (
                            <div className="mt-4">
                                <p className="font-semibold mb-2">下载链接：</p>
                                <ul className="space-y-1">
                                    {release.assets.map((asset, idx) => (
                                        <li key={idx} className="flex items-center space-x-2">
                                            <FaDownload className="text-green-400"/>
                                            <a
                                                href={asset.browser_download_url}
                                                className="text-blue-400 hover:underline"
                                                target="_blank"
                                            >
                                                {asset.name}（{formatFileSize(asset.size)}）
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.li>
                ))}
            </ul>
        </main>
    )
}