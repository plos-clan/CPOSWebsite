// app/not-found.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-gray-200 font-mono p-6 md:p-8">
            <div className="max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-7xl md:text-8xl mb-4 logo-font"
                >
                    :P
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-xl md:text-4xl font-medium mb-2 leading-relaxed whitespace-nowrap logo-font"
                >
                    Your PC ran into a problem with{' '}
                    <span className="text-purple-400">CoolPotOS</span> and needs to restart.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-gray-500 text-sm md:text-base mb-6 max-w-2xl logo-font"
                >
                    We're just collecting some error info, and then we'll restart for you.
                    <br />
                    <span className="text-gray-400">Error code: 404_NOT_FOUND</span>
                </motion.div>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '70%' }}
                    transition={{ delay: 0.6, duration: 2, ease: 'easeInOut' }}
                    className="h-1.5 bg-gray-800 rounded-full mb-6 overflow-hidden"
                    style={{ maxWidth: '600px' }}
                >
                    <div className="h-full bg-gray-600 w-1/4 animate-pulse"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.7 }}
                    className="text-gray-600 text-sm"
                >
                    Press any key to restart... (or just{' '}
                    <Link href="/" className="text-purple-400 hover:underline">
                        click here
                    </Link>
                    )
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="absolute bottom-4 left-6 text-xs text-gray-700"
            >
                CoolPotOS • MIT License • Developed by xiaoyi1212 & plos-clan
            </motion.div>
        </div>
    );
}