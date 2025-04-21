import {CodeLine, dedent} from "@/components/DocumentCode";
import Blockquote from "@/components/Blockquote";
import CodeBlock from "@/components/CodeBlock";

export default function KernelAPI(){
    return(
        <section className="pt-8">
            <h1 className="text-slate-50 mt-4 font-bold text-4xl">CP_Kernel Kernel Module Interface</h1>
            <p className="mt-4 tracking-wide">
                <CodeLine>CoolPotOS</CodeLine> 内核模块接口文档, 列举了所有内核默认提供的可调用接口.
            </p>
            <br/>
            <Blockquote>
                <p className="mt-4 tracking-wide">
                    当然, 你也可以直接根据源码获取内核中各项没有被暴露出来的函数地址并调用.
                    <br/>
                    不过这种做法不被提倡, 通常某些函数需要在特定环境下调用或需要注意同步性, 以及某些函数是测试用途不会被放进最终的发行版里
                </p>
                <br/>
            </Blockquote>
            <hr className="my-4 border-t border-neutral-700"/>
            <br/>
            <h1 className="text-slate-50 mt-4 font-bold text-3xl">基础接口</h1>
            <br/>
            <CodeBlock code={dedent(`
            /**
             * 向内核堆分配器申请一块指定大小的内存
             * @param size 大小
             * @return 返回这块内存的地址
             */
            void *malloc(size_t size);
            `)} language="c" title="cpkrnl.h"/>
            <br/>
            <CodeBlock code={dedent(`
            /**
             * 释放一块已经申请的内存
             * @param ptr 内存指针
             */
            void free(void* ptr);
            `)} language="c" title="cpkrnl.h"/>
            <br/>
            <CodeBlock code={dedent(`
            /**
             * 向内核TTY会话打印一条信息, 与C标准库的 printf 用法基本一致
             */
            void printf(const char *fmt, ...);
            `)} language="c" title="cpkrnl.h"/>
        </section>
    )
}
