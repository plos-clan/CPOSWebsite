import {CodeLine} from "@/components/DocumentCode";

export default function FAQPage(){
    return(
        <section className="p-8">
            <h1 className="text-slate-50 mt-4 font-bold text-4xl">FAQ</h1>
            <p className="mt-4 tracking-wide">
                <CodeLine>CoolPotOS</CodeLine> 常见疑难问题解答.
            </p>
            <hr className="my-4 border-t border-neutral-700"/>
            <br/>
            <h1 className="text-slate-0 mt-4 font-bold text-3xl">操作系统无响应 & 死机问题</h1>
            <p className="mt-4 tracking-wide">
                一般这种情况需要优先检查一下虚拟机串口是否有输出, 有可能内核内部发生错误造成虚拟终端环境崩溃而无法将错误信息打印至屏幕。
            </p>
            <p className="mt-4 tracking-wide">
                还有一种情况为TTY键盘缓冲区发生错误, 应用程序无法响应用户输入造成操作系统死机问题
            </p>
            <hr className="my-4 border-t border-neutral-700"/>
            <br/>
        </section>
    )
}
