import {CodeLine, dedent} from "@/components/DocumentCode";
import CodeBlock from '@/components/CodeBlock'
import Alert from "@/components/Alert";
import Blockquote from  "@/components/Blockquote"

export default function CPKernelModule() {
    return (
        <section className="p-8">
            <h1 className="text-slate-50 mt-4 font-bold text-4xl">CP_Kernel Module</h1>
            <p className="mt-4 tracking-wide">
                自 <CodeLine>AMD64 0.1.1</CodeLine> 版本后, 由宏内核转为混合内核, 支持内核模块的动态加载。
                <br/>
                内核模块是ELF格式的动态链接库, 与内核本体一同运行在R0特权级, 后缀名为 <CodeLine>*.cdl</CodeLine> ,
                意为 <CodeLine>CP_Kernel Dynamic Library</CodeLine>.
                <br/>
                您可以以内核模块形式向 <CodeLine>CoolPotOS</CodeLine> 提供如设备驱动、文件系统等其他内核功能扩展。
            </p>
            <br/>
            <Blockquote>
                <p className="mt-4 tracking-wide">
                    实际上 <CodeLine>CoolPotOS</CodeLine> 并没有严格要求内核模块后缀名, 只需要保证可以正常加载即可.
                </p>
                <br/>
            </Blockquote>
            <br/>
            <Alert type="warning" title="开发注意">
                <p className="mt-4 tracking-wide">
                    内核模块与内核本体共用一个堆区域, 如发生内存写入越界等潜在错误会导致自身甚至内核本体或其他内核模块崩溃。
                </p>
            </Alert>
            <hr className="my-4 border-t border-neutral-700"/>
            <br/>
            <h1 className="text-slate-50 mt-4 font-bold text-3xl">环境搭建</h1>
            <p className="mt-4 tracking-wide">
                我们提供了一个内核模块基础的开发模板, 您只需要下载
                <CodeLine>clang</CodeLine> 就可以直接使用。
            </p>
            <CodeBlock
                code="clang -shared -fPIC -fuse-ld=lld -nostdinc -nostdlib -I <头文件目录> -w -o <输出文件名>.cdl <源文件>.c -T <链接脚本>.ld"
                language="bash"
                className="my-8"/>
            <p className="mt-4 tracking-wide">
                以及我们提供了一份可供参考的 <CodeLine>linker.ld</CodeLine> 写法, 用于链接内核模块
            </p>
            <CodeBlock code={dedent(`
                        OUTPUT_FORMAT(elf64-x86-64)

                        PHDRS{
                            text PT_LOAD;
                            rodata PT_LOAD;
                            data PT_LOAD;
                            ksymtab PT_LOAD;
                            dynamic PT_DYNAMIC;
                        }
                        
                        SECTIONS {
                            . = 0xffff801000400000;
                        
                            .text : {
                                *(.text .text.*)
                            } :text
                        
                            . = ALIGN(CONSTANT(MAXPAGESIZE));
                        
                            .rodata : {
                                *(.rodata .rodata.*)
                            } :rodata
                        
                            . = ALIGN(CONSTANT(MAXPAGESIZE));
                        
                            .data : {
                                *(.data .data.*)
                            } :data
                        
                            . = ALIGN(CONSTANT(MAXPAGESIZE));
                        
                            .bss : {
                                *(.bss .bss.*)
                                *(COMMON)
                            } :data
                        
                            . = ALIGN(CONSTANT(MAXPAGESIZE));
                        
                            .dynamic : {
                                *(.dynamic)
                            } :data :dynamic
                        
                            .dynsym : { *(.dynsym) } :data
                            .dynstr : { *(.dynstr) } :data
                            .rela.dyn : { *(.rela.dyn) } :data
                        
                        
                            . = ALIGN(CONSTANT(MAXPAGESIZE));
                        
                            .ksymtab ALIGN(0x1000) : ALIGN(0x1000) {
                                __ksymtab_start = .;
                                KEEP(*(.ksymtab))
                                __ksymtab_end = .;
                            } :ksymtab
                        
                            . = ALIGN(CONSTANT(MAXPAGESIZE));
                        
                            /DISCARD/ : {
                                *(.eh_frame*)
                                *(.note .note.*)
                            }
                        }
                       `)}
                       language="ldscript"
                       className="my-8"/>
            <Alert type="info" title="构建">
                <p className="mt-4 tracking-wide">
                    也可以自行搭建一个开发环境, 根据上述信息配置一个构建脚本等
                </p>
            </Alert>
            <hr className="my-4 border-t border-neutral-700"/>
            <br/>
            <h1 className="text-slate-50 mt-4 font-bold text-3xl">入口函数</h1>
            <p className="mt-4 tracking-wide">
                CP_Kernel 内核模块使用 <CodeLine>dlmain</CodeLine> 作为内核模块入口函数, 在模块被加载时调用.
                其传入一个系统信息表用于内核模块判断当前加载该模块内核的各项信息.
                <br/>
                其中 <CodeLine>dlmain</CodeLine> 函数的返回值用于判断模块是否成功加载, 如有错误返回非0值.
            </p>
            <br/>
            <CodeBlock code={dedent(`
            int dlmain(cpm_system_info info){
                return 0;
            }
            `)} language="c" title="main.c"/>
            <br/>
            <Blockquote>
                <p className="mt-4 tracking-wide">
                    有关于 <CodeLine>cpm_system_info</CodeLine> 系统表信息的结构体定义, 详见开发接口标准
                </p>
                <br/>
            </Blockquote>
            <hr className="my-4 border-t border-neutral-700"/>
            <br/>
            <h1 className="text-slate-50 mt-4 font-bold text-3xl">卸载函数</h1>
            <p className="mt-4 tracking-wide">
                CP_Kernel 内核模块使用 <CodeLine>dlexit</CodeLine> 作为内核模块入口函数, 在模块被卸载时调用.
            </p>
            <br/>
            <Alert type="warning" title="注意">
                <p className="mt-4 tracking-wide">
                    <CodeLine>dlexit</CodeLine> 函数可以选择性定义, 但是你必须保证内核模块中所有占用的资源在卸载前得到释放.
                    <br/>
                    内核不会对内核模块所占用的资源进行释放, 如果不能妥善处置将造成内核的内存泄漏。
                </p>
            </Alert>
            <br/>
            <CodeBlock code={dedent(`
            void dlexit(void){
                // 释放所占用的资源
            }
            `)} language="c" title="main.c"/>
        </section>
    )
}