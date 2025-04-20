import {CodeLine,StrikethroughText} from "@/components/DocumentCode";
import Image from "next/image";

export default function DocumentPage() {
    return (
        <div className="p-8">
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
                    <CodeLine>CoolPotOS</CodeLine> 采用一个中空的白色圆, 并在右上角添加了一个斜向的菱形
                    <br/>
                    而名称经过了两次迭代, 由 <CodeLine>ShellXDOS</CodeLine> 到 <CodeLine>CrashPowerDOS 386</CodeLine> 再到 <CodeLine>CoolPotOS</CodeLine>
                </p>
                <Image
                    src="/icon.png"
                    alt="图像"
                    width={296}
                    height={296}
                    className="h-auto w-auto object-contain ml-4"
                />
            </div>
        </div>
    )
}