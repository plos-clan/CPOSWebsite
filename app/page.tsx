'use client'
import Link from 'next/link'
import { Button } from 'nextra/components'
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
        <main className="min-h-screen bg-[#111111] text-white pt-16">
            <section className="py-17 px-6 text-center">
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
        </main>
    )
}