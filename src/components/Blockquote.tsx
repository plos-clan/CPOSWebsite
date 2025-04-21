'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BlockquoteProps {
    children: ReactNode
    className?: string
}

const Blockquote = ({ children, className }: BlockquoteProps) => {
    return (
        <motion.blockquote
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`relative border-l-4 border-neutral-500 pl-4 text-neutral-700 italic bg-[#111111] rounded-md py-2 px-3 ${className}`}
        >
            {children}
        </motion.blockquote>
    )
}

export default Blockquote