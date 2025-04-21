import {CodeLine,StrikethroughText} from "@/components/DocumentCode";
import MarkdownList from "@/components/MarkdownList"
import Image from "next/image";

export default function DocumentPage() {
    return (
        <section className="p-8">
            <h1 className="text-slate-50 mt-4 font-bold text-4xl">Hello! CoolPotOS!</h1>
            <p className="mt-4 tracking-wide">
                <CodeLine>CoolPotOS</CodeLine> 是一个简单的混合内核操作系统,
                仅用于学习参考目的, 使用 MIT 开源协议.
            </p>
            <hr className="my-4 border-t border-neutral-700"/>
            <br/>
            <h1 className="text-slate-0 mt-4 font-bold text-3xl">关于文档</h1>
            <p className="mt-4 tracking-wide">
                本文档介绍了有关于 <CodeLine>CoolPotOS</CodeLine> 的内核模块开发以及部分应用程序开发的方式以及接口。
                <br/>
                文档采用 <CodeLine>NextJS</CodeLine> 手搓编写, <StrikethroughText>作者不会将文档框架嵌入进来导致的</StrikethroughText>
                <br/>
                文档如有纰漏，欢迎提出意见或PR帮助修正。
            </p>
            <hr className="my-4 border-t border-neutral-700"/>
            <br/>
            <h1 className="text-slate-0 mt-4 font-bold text-3xl">徽标和名称</h1>
            <div className="flex items-start justify-between w-[70%] p-4">
                <p className="text-white mt-4 text-start tracking-wide">
                    <CodeLine>CoolPotOS</CodeLine> 采用一个中空的白色圆, 并在右上角添加了一个斜向的菱形,
                    <br/>
                    <StrikethroughText>徽标是当时在某徽标设计网站瞎搓出来的</StrikethroughText>
                    <br/>
                    而名称经过了两次迭代, 由 <CodeLine>ShellXDOS</CodeLine> 到 <CodeLine>CrashPowerDOS
                    386</CodeLine> 再到 <CodeLine>CoolPotOS</CodeLine>
                </p>
                <Image
                    src="/icon.png"
                    alt="图像"
                    width={296}
                    height={296}
                    className="h-auto w-auto object-contain ml-4"
                />
            </div>
            <hr className="my-4 border-t border-neutral-700"/>
            <br/>
            <h1 className="text-slate-0 mt-4 font-bold text-3xl">现存版本</h1>
            <MarkdownList items={[
                <p key="1" className="text-white mt-4 text-start tracking-wide">
                    <CodeLine>CoolPotOS IA32</CodeLine> - 适用于 i386 平台的版本, 也是初版 <CodeLine>CoolPotOS</CodeLine>
                </p>,
                <p key="2" className="text-white mt-4 text-start tracking-wide">
                    <CodeLine>CoolPotOS AMD64</CodeLine> - 适用于 x64 平台的版本, 使用现代化操作系统理念开发
                </p>,
                <p key="3" className="text-white mt-4 text-start tracking-wide">
                    <CodeLine>CoolPotOS Vlang</CodeLine> - vlang 语言编写的 x64 平台的版本, 是AMD64版本的前身
                </p>,
            ]}/>
        </section>
    )
}