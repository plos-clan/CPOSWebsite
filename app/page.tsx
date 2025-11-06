'use client'
import FadingFooter from '@/app/components/FadingFooter'
import GitHubStats from  '@/app/components/GitHubStats'
import {useInView} from "react-intersection-observer"
import {useEffect} from "react"
import Image from "next/image"
import {motion, useAnimation} from "framer-motion"
import './globals.css'

export default function HomePage() {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    })

    useEffect(() => {
        if (inView) {
            controls.start({opacity: 1, y: 0})
        } else {
            controls.start({opacity: 0, y: 30})
        }
    }, [inView, controls])

    return (
        <main className="min-h-screen pt-16 text-white"
              style={{
                  backgroundImage: "url('/footer.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed',
              }}>
            <section className="py-17 px-6 text-center bg-black">
                <div className="max-w-3xl mx-auto">
                    <motion.img src="/coya_icon.png" alt="Logo"
                                className="w-50 h-50 mx-auto mb-4"
                                initial={{opacity: 0, y: -30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, ease: "easeOut"}}/>
                    <motion.h1 className="text-5xl mb-2 logo-font animation"
                               initial={{opacity: 0, y: -30}}
                               animate={{opacity: 1, y: 0}}
                               transition={{duration: 0.8, ease: "easeOut"}}>
                        CoolPotOS
                    </motion.h1>
                    <motion.p className="text-lg text-gray-400 mb-6 logo-font"
                              initial={{opacity: 0}}
                              animate={{opacity: 1}}
                              transition={{delay: 0.5, duration: 0.8}}>
                        A simple toy operating system
                    </motion.p>
                    <motion.a
                        href="https://github.com/plos-clan/CoolPotOS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-black text-sm px-5 py-2.5 rounded-full font-semibold transition hover:bg-gray-200"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.7, duration: 0.8}}
                    >
                        View on GitHub
                    </motion.a>
                    <motion.a
                        href="/docs"
                        className="inline-block text-white text-sm px-5 py-2.5 rounded-full font-semibold transition hover:bg-gray-200 ml-6"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.7, duration: 0.8}}
                    >
                        View Document
                    </motion.a>
                </div>
            </section>
            <section className="py-24 px-6 bg-[#222222] relative -mt-1">
                <div className="absolute -top-[80px] left-0 w-full h-24">
                    <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                        <path fill="#1a1a1a" fillOpacity="1">
                            <animate attributeName="d" dur="10s" repeatCount="indefinite"
                                     values="
                                     M0,160 C480,280 960,40 1440,160 L1440,320 L0,320 Z;
                                     M0,180 C520,100 920,280 1440,180 L1440,320 L0,320 Z;
                                     M0,160 C480,280 960,40 1440,160 L1440,320 L0,320 Z
                                     "
                            />
                        </path>
                        <path fill="#1f1f1f" fillOpacity="1">
                            <animate attributeName="d" dur="8s" repeatCount="indefinite"
                                     values="
                                     M0,180 C400,100 1040,240 1440,180 L1440,320 L0,320 Z;
                                     M0,160 C460,240 980,80 1440,160 L1440,320 L0,320 Z;
                                     M0,180 C400,100 1040,240 1440,180 L1440,320 L0,320 Z
                                     "
                            />
                        </path>
                        <path fill="#222222" fillOpacity="1">
                            <animate attributeName="d" dur="6s" repeatCount="indefinite"
                                     values="
                                     M0,192 C480,232 960,128 1440,192 L1440,320 L0,320 Z;
                                     M0,208 C520,144 920,240 1440,208 L1440,320 L0,320 Z;
                                     M0,192 C480,232 960,128 1440,192 L1440,320 L0,320 Z
                                     "
                            />
                        </path>
                    </svg>
                </div>

                <div className="max-w-5xl mx-auto text-center">
                    <motion.h2 className="text-3xl logo-font tracking-wide font-bold mb-8"
                               initial={{opacity: 0, y: 10}}
                               animate={{opacity: 1, y: 0}}
                               transition={{delay: 1, duration: 0.8}}>
                        Features
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md"
                                    initial={{opacity: 0, y: -30}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 1.2, duration: 0.8, ease: "easeOut"}}>
                            <h3 className="text-xl text-center font-semibold mb-2 flex items-center gap-2">
                                <Image width={20} height={20} src="/community.svg" alt="徽标" className=""/>
                                社区
                            </h3>
                            <p className="text-gray-400 text-start">
                                隶属于庞大的 plos-clan 社区组织
                                <br/>
                                拥有22+贡献者
                            </p>
                        </motion.div>
                        <motion.div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md"
                                    initial={{opacity: 0, y: -30}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 1.4, duration: 0.8, ease: "easeOut"}}>
                            <h3 className="text-xl text-center font-semibold mb-2 flex items-center gap-2">
                                <Image width={20} height={20} src="/book.svg" alt="徽标" className=""/>
                                学习
                            </h3>
                            <p className="text-gray-400 text-start">
                                开发初衷为学习性操作系统, 给予初学者一个参考实例
                            </p>
                        </motion.div>
                        <motion.div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md"
                                    initial={{opacity: 0, y: -30}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 1.6, duration: 0.8, ease: "easeOut"}}>
                            <h3 className="text-xl text-center font-semibold mb-2 flex items-center gap-2">
                                <Image width={20} height={20} src="/contributor.svg" alt="徽标" className=""/>
                                贡献
                            </h3>
                            <p className="text-gray-400 text-start">
                                欢迎为该项目填补漏洞与增加功能
                                <br/>
                                您的支持是我们的动力
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="py-20 px-6 ">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-3xl logo-font tracking-wide font-bold text-center text-white mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        CoolPotOS TimeLine
                    </motion.h2>

                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gray-600 top-0"></div>
                        {[
                            {
                                date: '2023 年',
                                title: 'ShellXDOS',
                                desc: 'UEFI shell 小程序 - 仅适用于 x86_64 平台',
                            },
                            {
                                date: '2024 年初',
                                title: 'CrashPowerDOS 386',
                                desc: '适用于 i386 平台的宏内核操作系统, 第一次具备文件系统/多任务操作',
                            },
                            {
                                date: '2024 年中',
                                title: 'CrashPowerOS',
                                desc: '适用于 i686 平台的宏内核操作系统, 具有 IDE 硬盘驱动 / fatfs文件系统等',
                            },
                            {
                                date: '2025 - 1/12',
                                title: 'CoolPotOS',
                                desc: '开启 x86_64 分支, 正式面向现代化操作系统架构开发',
                            },
                            {
                                date: '2024 - 9/23',
                                title: '宣发委员会',
                                desc: '在 Bilibili 平台进行第一次宣发, 获得 22.9W播放量 1.3W 点赞量 的优秀成果',
                            },
                            {
                                date: '2025 - 5月至10月',
                                title: '功能递增',
                                desc: '增加 70+ POSIX 系统调用, 运行 gcc/lua/bash 等程序, 扩容生态, 支持EEVDF调度器等',
                            },
                            {
                                date: '2025 - 10/16',
                                title: '第三次项目重构',
                                desc: '支持多平台架构, 优化部分冗余和高耦合性代码',
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center relative`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                            >
                                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center z-10 shadow-md">
                                    <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                                </div>
                                <div
                                    className={`w-full md:w-5/12 p-5 rounded-xl  backdrop-blur-sm text-white ${
                                        index % 2 === 0 ? 'md:ml-16 md:text-right md:mr-0 mr-0 ml-12' : 'md:mr-16 md:text-left ml-12'
                                    }`}
                                >
                                    <span className="text-sm text-gray-300 font-mono">{item.date}</span>
                                    <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                                    <p className="text-gray-400 mt-2 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <GitHubStats/>
            <FadingFooter/>
        </main>
    )
}