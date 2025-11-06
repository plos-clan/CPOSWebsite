---
title: 快速上手
---

# 如何使用 CoolPotOS

CoolPotOS 是一个基于 CP_Kernel 混合内核的服务器操作系统( ~~虽然远远达不到服务器的标准~~ )

> 故目前的定位仍然是学术研究性的玩具操作系统.

## 发行版下载

不想搭建繁琐的编译环境? 我们提供了预编译的可引导光盘映像以供快速体验!

CoolPotOS 所有的发行版都发布在其主开源仓库的 [Release](https://github.com/plos-clan/CoolPotOS/releases) 中.
有关于设备的要求如下

### x64 硬件要求

* (建议) 支持 UEFI 的 `x86_64` 架构现代PC机器.
* 内存不得小于 512MB (qemu极端环境测试可以在 256MB 运存下运行, 128MB引导器无法分配充足内存)
* CPU 需要支持 sse/sse2 扩展指令集.
* 支持 ACPI 与 APIC
* (建议) 支持 x2apic
* (建议) 支持 PCIE

> 为了兼容性, CoolPotOS 支持用 LegacyBIOS 进行引导, 也可以在单核CPU下运行. \
> 同时支持 x2apic 与 xapic, 也支持在没有 PCIE 的机器上枚举 PCI 设备. \
> 不过我们建议您在现代PC机器上运行, 性能更优

## 开始构建

自第三次项目大重构后, CoolPotOS 采用 CMake 构建系统, 需要您准备以下环境.

### 环境搭建

> 我们建议您在 Linux 环境下进行开发.

* cmake: 构建系统
* clang, lld: 内核编译器与链接器
* xorriso: 可引导光盘映像制作工具
* git: 拉取远程仓库代码与拉取依赖 (引导器等)
* qemu: 虚拟机, 构建对应平台需要下载对应架构模拟的 qemu

对于默认的编译架构 `x86_64`, 使用以下命令即可开始编译

```shell
cmake -S . -B build/ -DCMAKE_EXPORT_COMPILE_COMMANDS=ON
cmake --build build/ --target run
```

### IDE高亮

在项目构建文件夹中 (一般位于项目根目录中的 `build` 文件夹) \
提供了 `compile_commands.json`, 可以提供给 `Clion` 和 `VisualStudioCode` 提供高亮和补全. \
在第一次构建完成后可以将 `compile_commands.json` 拷贝至项目根目录.
