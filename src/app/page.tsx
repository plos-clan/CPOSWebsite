"use client"
import Image from "next/image"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {useEffect} from "react"
import GitHubStats from "@/components/GitHubStats"
import VisibilityAnimation from "@/components/VisibilityAnimation";
import ScrollFadeByDirection from "@/components/ScrollFadeByDirection"

export default function Home() {
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
                    <motion.img src="/icon.png" alt="Logo"
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
                    <ScrollFadeByDirection>
                        <div className="w-full h-16 bg-pink-200 text-center text-white text-xl p-4">
                            喵呜~我是滚动感知提示条～
                        </div>
                    </ScrollFadeByDirection>
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
                                拥有17+贡献者
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

            <section className="py-24 px-6 bg-[#222222] w-full">
                <div className="max-w-5xl mx-auto text-center w-full">
                    <motion.h2 className="text-3xl logo-font tracking-wider font-bold mb-8 w-full"
                               initial={{opacity: 0, y: 10}}
                               animate={{opacity: 1, y: 0}}
                               transition={{delay: 1, duration: 0.8}}>
                        Capabilities
                    </motion.h2>

                    <div className="flex flex-col gap-16 w-full">
                        <motion.div
                            ref={ref}
                            animate={controls}
                            initial={{opacity: 0, y: 30}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                            className="flex flex-col md:flex-row gap-6"
                        >
                            <div className="flex flex-col md:flex-row items-start gap-6 p-6 w-full">
                                <div className="flex-1 text-left">
                                    <h3 className="text-2xl font-semibold mb-4">默认终端</h3>
                                    <p className="text-gray-400">
                                        CoolPotOS 默认采用 os_terminal 终端环境
                                    </p>
                                    <br/>
                                    <div className="flex items-center gap-2">
                                        <Image width={20} height={20} src="/yes.svg" alt="YES"/>
                                        <span className="logo-font text-white">自定义字体</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Image width={20} height={20} src="/yes.svg" alt="YES"/>
                                        <span className="text-white">根据屏幕分辨率调整字体大小</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Image width={20} height={20} src="/yes.svg" alt="YES"/>
                                        <span className="text-white">支持主题颜色更换</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Image width={20} height={20} src="/yes.svg" alt="YES"/>
                                        <span className="text-white">支持鼠标终端滚动</span>
                                    </div>
                                </div>
                                <div className="md:w-[500px] w-full flex-shrink-0 self-start md:self-end">
                                    <Image
                                        src="/theme.png"
                                        width={2879}
                                        height={1799}
                                        alt="项目截图 1"
                                        className="w-full md:w-[500px] rounded-lg shadow-md object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <VisibilityAnimation
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 30}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                        >
                            <div className="flex flex-col md:flex-row items-start gap-6 w-full pl-0 pr-7">
                                <Image
                                    src="/process.png"
                                    alt="项目截图 2"
                                    width={1555}
                                    height={184}
                                    className="w-full md:w-[500px] rounded-lg shadow-md object-cover mr-auto -ml-4"
                                />
                                <div className="flex-1 text-left">
                                    <h3 className="text-2xl font-semibold mb-4">进程模型</h3>
                                    <p className="text-gray-400">
                                        CoolPotOS 采用非常独特的进程处理机制
                                    </p>
                                    <br/>
                                    <p>
                                        当应用程序或内核调用kill_proc时并不会直接杀死进程,
                                        <br/>
                                        而是将其进程状态标记为死亡并放入释放队列中统一释放处理。
                                        <br/>
                                        进程内部包含的线程会被其调度的CPU核心的IDLE进程服务彻底释放资源,
                                        待所有线程释放完毕则会释放进程公有资源
                                    </p>
                                    <p className="text-gray-400">
                                        这么做的原因是为了解决CoolPotOS中存在很长一段时间的回收漏洞
                                    </p>
                                </div>
                            </div>
                        </VisibilityAnimation>
                    </div>
                </div>
            </section>
            <GitHubStats/>
        </main>
    );
}
