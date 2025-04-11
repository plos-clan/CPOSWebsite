"use client"
import Image from "next/image"
import {motion} from "framer-motion";
import CodeBlock from '@/components/CodeBlock'
import Alert from '@/components/Alert'

const coreMembers = [
    {
        name: "Mdr-C-Tutorial",
        avatar: "/avatars/mdr_c_tutorial.png",
        bio: "梦猫大典社区的成员参与进 CoolPotOS 的各种模块贡献",
    },
    {
        name: "Plos-clan",
        avatar: "/avatars/plos_clan.jpg",
        bio: "CoolPotOS 项目隶属于 plos-clan, 是本项目主要的贡献社区",
    },
    {
        name: "ViudiraTech",
        avatar: "/avatars/viudira_tech.jpg",
        bio: "负责驱动部分的调优和编写, 是除plos-clan外最先贡献的组织",
    },
]

const contributors_kernel = [
    {
        avatar: "/avatars/xiaoyi1212.jpg",
        url: "https://github.com/xiaoyi1212",
    }, {
        avatar: "/avatars/vinbe_wan.jpg",
        url: "https://github.com/VinbeWan",
    }, {
        avatar: "/avatars/yuemingruoan.jpg",
        url: "https://github.com/yuemingruoan",
    }, {
        avatar: "/avatars/copi143.png",
        url: "https://github.com/copi143",
    }, {
        avatar: "/avatars/wenxuanjun.jpg",
        url: "https://github.com/wenxuanjun",
    }, {
        avatar: "/avatars/a4_tacks.png",
        url: "https://github.com/A4-Tacks",
    }, {
        avatar: "/avatars/microfish.png",
        url: "https://github.com/FengHeting",
    }, {
        avatar: "/avatars/black.jpg",
        url: "https://github.com/lihanrui2913",
    }, {
        avatar: "/avatars/min0911Y.jpg",
        url: "https://github.com/min0911Y",
    }, {
        avatar: "/avatars/suhuajun.jpg",
        url: "https://github.com/suhuajun-github",
    }, {
        avatar: "/avatars/minsecrus.jpg",
        url: "https://github.com/Minsecrus",
    },
]

const contributors_docs = [
    {
        avatar: "/avatars/qt_little_xu.png",
        url: "https://github.com/QtLittleXu",
    }, {
        avatar: "/avatars/onion108.png",
        url: "https://github.com/onion108",
    }, {
        avatar: "/avatars/fengling0915.jpg",
        url: "https://github.com/fengling0915",
    }, {
        avatar: "/avatars/rho_paper.jpg",
        url: "https://github.com/RhoPaper",
    }
]

const contributors_other = [
    {
        avatar: "/avatars/ly_xiang.png",
        url: "https://github.com/LY-Xiang",
    }, {
        avatar: "/avatars/climber_rong.png",
        url: "https://github.com/CLimber-Rong",
    }, {
        avatar: "/avatars/wyf856136.jpg",
        url: "https://github.com/wyf856136",
    }
]

function dedent(str: string) {
    const lines = str.split('\n');
    while (lines.length > 0 && lines[0].trim() === '') lines.shift();
    while (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop();
    const indentLengths = lines
        .filter(line => line.trim() !== '')
        .map(line => line.match(/^ */)![0].length);
    const minIndent = Math.min(...indentLengths);
    const unindented = lines.map(line => line.slice(minIndent));
    return unindented.join('\n');
}

export default function CommunityPage() {

    return (
        <main className="p-8 text-white pt-32">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-center text-3xl font-bold mb-8">社区贡献组织</h1>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {coreMembers.map((member) => (
                        <div key={member.name}
                             className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 shadow-md text-center">
                            <Image
                                src={member.avatar}
                                alt={member.name}
                                width={96}
                                height={96}
                                className="rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl text-center font-semibold mb-2">{member.name}</h3>
                            <p className="text-gray-400 text-sm text-center">{member.bio}</p>
                        </div>
                    ))}
                </div>

                <div className="h-12"/>

                <h2 className="text-center text-2xl font-semibold mb-4">内核贡献者</h2>
                <p className="text-center text-neutral-500 mb-4">对内核源码进行增加, 修复, 注释的贡献者</p>
                <div className="flex flex-wrap gap-4 justify-center">
                    {contributors_kernel.map((src, idx) => (
                        <a key={idx} href={src.url}>
                            <Image
                                key={idx}
                                src={src.avatar}
                                alt={`贡献者 ${idx + 1}`}
                                width={48}
                                height={48}
                                className="rounded-full border border-neutral-700"
                            />
                        </a>
                    ))}
                </div>

                <div className="h-12"/>

                <h2 className="text-center text-2xl font-semibold mb-4">文档贡献者</h2>
                <p className="text-center text-neutral-500 mb-4">对文档进行编写, 修订, 翻译的贡献者</p>
                <div className="flex flex-wrap gap-4 justify-center">
                    {contributors_docs.map((src, idx) => (
                        <a key={idx} href={src.url}>
                            <Image
                                key={idx}
                                src={src.avatar}
                                alt={`贡献者 ${idx + 1}`}
                                width={48}
                                height={48}
                                className="rounded-full border border-neutral-700"
                            />
                        </a>
                    ))}
                </div>

                <div className="h-12"/>

                <h2 className="text-center text-2xl font-semibold mb-4">其他贡献者</h2>
                <p className="text-center text-neutral-500 mb-4">对额外功能如软件生态, 代码审查,
                    存储库流程优化作出贡献</p>
                <div className="flex flex-wrap gap-4 justify-center">
                    {contributors_other.map((src, idx) => (
                        <a key={idx} href={src.url}>
                            <Image
                                key={idx}
                                src={src.avatar}
                                alt={`贡献者 ${idx + 1}`}
                                width={48}
                                height={48}
                                className="rounded-full border border-neutral-700"
                            />
                        </a>
                    ))}
                </div>

                <div className="h-[64]"/>
            </div>

            <section className="py-24 px-6 bg-[#222222] relative w-full">
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
                        How to contribute
                    </motion.h2>
                    <div className="max-w-4xl mx-auto p-3">
                        <Alert type="warning" title="环境注意">
                            CoolPotOS构建需要在 Linux 环境下进行, 如果您是 Windows 请使用 WSL2, MacOS用户请使用虚拟机
                            <br/>
                            国内用户需要自己想办法开启网络工具以实现xmake自动工具链下载
                        </Alert>
                        <br/>
                        <h1 className="text-3xl logo-font text-start">Fork repo & Download Tools</h1>
                        <br/>
                        <div className="space-y-4 text-start">
                            <ul className="list-disc pl-6 marker:text-white">
                                <li className="text-gray-300">从CoolPotOS主仓库 fork 进你自己的账户下</li>
                                <li className="text-gray-300">克隆仓库至本地</li>
                                <CodeBlock
                                    code="git clone https://github.com/your-name/CoolPotOS"
                                    language="bash"
                                    className="my-8"
                                />
                                <li className="text-gray-300">下载xmake构建工具</li>
                                <CodeBlock
                                    code={dedent(`
                                    sudo add-apt-repository ppa:xmake-io/xmake
                                    sudo apt update
                                    sudo apt install xmake
                                    `)}
                                    language="bash"
                                    title="Debian/Ubuntu"
                                    className="my-8"
                                />
                                <CodeBlock
                                    code='syay -S xmake'
                                    language="bash"
                                    title="Arch/Manjaro"
                                    className="my-8"
                                />
                                <CodeBlock
                                    code={dedent(`
                                    git clone --recursive https://github.com/xmake-io/xmake.git
                                    cd xmake
                                    ./scripts/get.sh __local__
                                    source ~/.xmake/profile
                                    `)}
                                    language="bash"
                                    title="Arch/Manjaro"
                                    className="my-8"
                                />
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto p-3">
                        <Alert type="info" title="架构编译">
                            amd64架构与ia32架构的编译流程是不同的
                        </Alert>
                        <br/>
                        <h1 className="text-3xl logo-font text-start">Download Compiler & Build Kernel</h1>
                        <br/>
                        <div className="space-y-4 text-start">
                            <ul className="list-disc pl-6 marker:text-white">
                                <li className="text-gray-300">x86_64贡献者只需下载 clang xorriso 即可</li>
                                <CodeBlock
                                    code="sudo apt clang xorriso #其他linux用户自行查找下载方式"
                                    language="bash"
                                    title="Debian/Ubuntu"
                                    className="my-8"
                                />
                                <li className="text-gray-300">构建并运行</li>
                                <CodeBlock
                                    code='xmake run'
                                    language="bash"
                                    className="my-8"
                                />
                                <li className="text-gray-300">ia32用户需要下载 zigcc nasm xorriso
                                    (有网络工具可以让xmake自行下载)
                                </li>
                                <CodeBlock
                                    code={dedent(`
                                           --3行 解除zig工具链注释
                                           add_requires("zig","nasm")
                                           --116行 解除iso32的注释, 并将iso64注释掉
                                           target("default_build")
                                             --add_deps("iso64")
                                               add_deps("iso32")
                                           --124行 注释掉 x86_64 xmake run 并解除 i386 xmake run 的注释
                                           -- x86_64 xmake run
                                           --local flags = {
                                           --     -- argument --
                                           --}
                                           --os.execv("qemu-system-x86_64 " , flags)
      
                                           -- i386 xmake run
                                           local misc = "-serial stdio -m 4096"
                                           local speaker = " -audiodev pa,id=speaker -machine pcspk-audiodev=speaker "
                                           local ahci = "-device ahci,id=ahci -drive file=./disk.qcow2,if=none,id=disk0 -device ide-hd,bus=ahci.0,drive=disk0"
                                           local kvm = " -enable-kvm"
                                           local vga = " -vga std -global VGA.vgamem_mb=32 "
                                           local net = " -net nic,model=pcnet -net user "
                                           local audio = " -device sb16,audiodev=speaker -device intel-hda -device hda-micro,audiodev=speaker "
                                           local flags = misc..speaker..vga..net..kvm..audio
                                           os.exec("qemu-system-i386 -cdrom $(buildir)/CoolPotOS.iso %s", flags)
                                           `)}
                                    language="lua"
                                    title="xmake.lua"
                                    className="my-8"
                                />
                                <li className="text-gray-300">构建并运行</li>
                                <CodeBlock
                                    code='xmake run'
                                    language="bash"
                                    className="my-8"
                                />
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto p-3">
                        <Alert type="info" title="架构编译">
                            因为CoolPotOS主仓库更新较为频繁, 您需要不断的更新您本地的仓库
                        </Alert>
                        <br/>
                        <h1 className="text-3xl logo-font text-start">Open pull request</h1>
                        <br/>
                        <div className="space-y-4 text-start">
                            <ul className="list-disc pl-6 marker:text-white">
                                <li className="text-gray-300">递交你的代码</li>
                                <li className="text-gray-300">向CoolPotOS主仓库打开你的拉取请求</li>
                            </ul>
                        </div>
                        <br/>
                        <Alert type="info" title="架构编译">
                            拉取请求被合并后你就成为了 CoolPotOS 贡献者了, 根据贡献度会被记录到README或者文档里 :)
                        </Alert>
                    </div>
                </div>
            </section>
        </main>
    )
}