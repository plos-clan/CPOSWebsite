
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {useState} from "react";

type Item = {
    title: string
    href: string
    children?: Item[]
}

const sidebarItems: Item[] = [
    {
        title: 'Introduction',
        href: '/document',
    },
    {
        title: '内核模块开发',
        href: '/document/cpsdk',
    },
    {
        title: '测试占位符',
        href: '#',
        children: [
            { title: '1', href: '/document' },
            { title: '2', href: '/document' },
        ],
    },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-neutral-950 text-white px-4 py-6 h-screen sticky top-0 overflow-y-auto">
            <nav className="space-y-2">
                {sidebarItems.map(item => (
                    <SidebarItem key={item.href} item={item} pathname={pathname} />
                ))}
            </nav>
        </aside>
    )
}

function SidebarItem({ item, pathname }: { item: Item; pathname: string }) {
    const isCurrent = pathname === item.href
    const isParentActive = pathname.startsWith(item.href + '/')
    const hasChildren = item.children && item.children.length > 0
    const [isExpanded, setIsExpanded] = useState(false)
    const shouldExpand = isCurrent || isParentActive || isExpanded

    const handleToggle = () => {
        if (hasChildren) {
            setIsExpanded(prev => !prev)
        }
    }

    return (
        <div>
            <div
                className="flex justify-between items-center rounded hover:bg-neutral-800 transition-colors group"
                onClick={handleToggle}
            >
                <Link
                    href={item.href}
                    className={`relative flex-1 block py-2 px-3 rounded ${
                        isCurrent ? 'text-blue-400 font-semibold' : 'text-gray-300'
                    } group-hover:text-white`}
                >
                    {isCurrent && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-xl bg-blue-500"></span>
                    )}
                    {item.title}
                </Link>
                {hasChildren && (
                    <span className="text-gray-400 text-sm px-3 group-hover:text-white">
            {shouldExpand ? '▾' : '▸'}
          </span>
                )}
            </div>

            <AnimatePresence initial={false}>
                {hasChildren && shouldExpand && (
                    <motion.div
                        className="pl-4 mt-1 space-y-1"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {item.children!.map(child => {
                            const isChildActive = pathname === child.href
                            return (
                                <Link
                                    key={child.href}
                                    href={child.href}
                                    className={`block py-1 px-2 rounded hover:bg-neutral-800 transition-colors ${
                                        isChildActive ? 'text-blue-400 font-semibold bg-neutral-800' : 'text-gray-400'
                                    }`}
                                >
                                    {child.title}
                                </Link>
                            )
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}