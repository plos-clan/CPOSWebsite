'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

type AlertType = 'info' | 'success' | 'warning' | 'error'

interface AlertProps {
    title?: string
    children: ReactNode
    type?: AlertType
}

const Alert = ({
                   title,
                   children,
                   type = 'info',
               }: AlertProps) => {
    const [isOpen] = useState(true)

    const typeStyles = {
        info: {
            bg: 'bg-blue-900/30',
            border: 'border-blue-800/50',
            text: 'text-blue-400',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        success: {
            bg: 'bg-green-900/30',
            border: 'border-green-800/50',
            text: 'text-green-400',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        warning: {
            bg: 'bg-yellow-900/30',
            border: 'border-yellow-800/50',
            text: 'text-yellow-400',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            )
        },
        error: {
            bg: 'bg-red-900/30',
            border: 'border-red-800/50',
            text: 'text-red-400',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    }

    if (!isOpen) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`relative p-4 rounded-lg border ${typeStyles[type].bg} ${typeStyles[type].border} backdrop-blur-sm`}
        >
            <div className={`absolute inset-0 -z-10 rounded-lg bg-gradient-to-r ${typeStyles[type].bg.replace('/30', '/10')} opacity-30`} />

            <div className="flex gap-3">
                <div className={`flex-shrink-0 ${typeStyles[type].text}`}>
                    {typeStyles[type].icon}
                </div>

                <div className="flex-1 space-y-2">
                    {title && <h3 className={`font-semibold text-start ${typeStyles[type].text}`}>{title}</h3>}
                    <div className="text-gray-300 text-start text-sm leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Alert