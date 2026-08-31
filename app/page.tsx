'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadingFooter from '@/app/components/FadingFooter'
import GitHubStats from '@/app/components/GitHubStats'
import { siteConfig } from '@/app/site'

const features = [
    {
        icon: '/community.svg',
        title: '社区',
        description: ['隶属于庞大的 plos-clan 社区组织', '拥有 22+ 贡献者'],
    },
    {
        icon: '/book.svg',
        title: '学习',
        description: ['开发初衷为学习性操作系统，为初学者提供参考实例'],
    },
    {
        icon: '/contributor.svg',
        title: '贡献',
        description: ['欢迎为项目修复问题与增加功能', '您的支持是我们的动力'],
    },
] as const

const timeline = [
    {
        date: '2023 年',
        title: 'ShellXDOS',
        description: 'UEFI Shell 小程序，仅适用于 x86_64 平台',
    },
    {
        date: '2024 年初',
        title: 'CrashPowerDOS 386',
        description: '适用于 i386 平台的宏内核操作系统，第一次具备文件系统与多任务能力',
    },
    {
        date: '2024 年中',
        title: 'CrashPowerOS',
        description: '适用于 i686 平台的宏内核操作系统，具有 IDE 硬盘驱动和 FAT 文件系统等功能',
    },
    {
        date: '2024 年 9 月 23 日',
        title: '宣发委员会',
        description: '在 Bilibili 平台进行第一次宣发，获得 22.9 万播放量与 1.3 万点赞',
    },
    {
        date: '2025 年 1 月 12 日',
        title: 'CoolPotOS',
        description: '开启 x86_64 分支，正式面向现代化操作系统架构开发',
    },
    {
        date: '2025 年 5 月至 10 月',
        title: '功能递增',
        description: '增加 70+ POSIX 系统调用，运行 GCC、Lua、Bash 等程序，并支持 EEVDF 调度器',
    },
    {
        date: '2025 年 10 月 16 日',
        title: '第三次项目重构',
        description: '支持多平台架构，优化冗余和高耦合代码',
    },
] as const

export default function HomePage() {
    return (
        <main className="min-h-screen bg-[url('/footer.png')] bg-cover bg-center bg-fixed pt-16 text-white">
            <section className="bg-black px-6 py-17 text-center">
                <div className="mx-auto max-w-3xl">
                    <motion.div
                        className="mx-auto mb-4 size-50"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <Image src="/coya_icon.png" alt="CoolPotOS logo" width={200} height={200} priority />
                    </motion.div>
                    <motion.h1
                        className="mb-2 font-logo text-5xl"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {siteConfig.name}
                    </motion.h1>
                    <motion.p
                        className="mb-6 font-logo text-lg text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        A simple toy operating system
                    </motion.p>
                    <motion.a
                        href={siteConfig.repository.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        View on GitHub
                    </motion.a>
                    <motion.div
                        className="ml-6 inline-block"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        <Link
                            href="/docs"
                            className="inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-200 hover:text-black"
                        >
                            View Documentation
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className="relative -mt-1 bg-[#222] px-6 py-24">
                <div className="absolute -top-20 left-0 h-24 w-full">
                    <svg viewBox="0 0 1440 320" className="h-full w-full" preserveAspectRatio="none">
                        <path fill="#1a1a1a">
                            <animate
                                attributeName="d"
                                dur="10s"
                                repeatCount="indefinite"
                                values="M0,160 C480,280 960,40 1440,160 L1440,320 L0,320 Z; M0,180 C520,100 920,280 1440,180 L1440,320 L0,320 Z; M0,160 C480,280 960,40 1440,160 L1440,320 L0,320 Z"
                            />
                        </path>
                        <path fill="#1f1f1f">
                            <animate
                                attributeName="d"
                                dur="8s"
                                repeatCount="indefinite"
                                values="M0,180 C400,100 1040,240 1440,180 L1440,320 L0,320 Z; M0,160 C460,240 980,80 1440,160 L1440,320 L0,320 Z; M0,180 C400,100 1040,240 1440,180 L1440,320 L0,320 Z"
                            />
                        </path>
                        <path fill="#222222">
                            <animate
                                attributeName="d"
                                dur="6s"
                                repeatCount="indefinite"
                                values="M0,192 C480,232 960,128 1440,192 L1440,320 L0,320 Z; M0,208 C520,144 920,240 1440,208 L1440,320 L0,320 Z; M0,192 C480,232 960,128 1440,192 L1440,320 L0,320 Z"
                            />
                        </path>
                    </svg>
                </div>

                <div className="mx-auto max-w-5xl text-center">
                    <motion.h2
                        className="mb-8 font-logo text-3xl font-bold tracking-wide"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        Features
                    </motion.h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.article
                                key={feature.title}
                                className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 shadow-md"
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 + index * 0.2, duration: 0.8, ease: 'easeOut' }}
                            >
                                <h3 className="mb-2 flex items-center justify-center gap-2 text-xl font-semibold">
                                    <Image width={20} height={20} src={feature.icon} alt="" />
                                    {feature.title}
                                </h3>
                                <p className="text-start text-gray-400">
                                    {feature.description.map((line) => <span key={line} className="block">{line}</span>)}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <motion.h2
                        className="mb-16 text-center font-logo text-3xl font-bold tracking-wide text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        CoolPotOS Timeline
                    </motion.h2>

                    <div className="relative">
                        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-600 md:left-1/2 md:-translate-x-0.5" />
                        {timeline.map((item, index) => (
                            <motion.article
                                key={item.title}
                                className={`relative mb-12 flex flex-col items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                            >
                                <div className="absolute left-0 z-10 flex size-8 items-center justify-center rounded-full bg-white shadow-md md:left-1/2 md:-translate-x-1/2">
                                    <div className="size-3 rounded-full bg-gray-800" />
                                </div>
                                <div className={`ml-12 w-full rounded-xl p-5 text-white backdrop-blur-sm md:w-5/12 ${index % 2 === 0 ? 'md:ml-16 md:text-right' : 'md:ml-0 md:mr-16 md:text-left'}`}>
                                    <time className="font-mono text-sm text-gray-300">{item.date}</time>
                                    <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <GitHubStats />
            <FadingFooter />
        </main>
    )
}
