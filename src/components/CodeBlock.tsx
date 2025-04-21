'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

interface CodeBlockProps {
    code: string
    language?: string
    title?: string
    className?: string
}

const CodeBlock = ({ code, language = 'typescript', title = language, className }: CodeBlockProps) => {
    const [copied, setCopied] = useState(false)
    const [htmlContent, setHtmlContent] = useState('')

    useEffect(() => {
        hljs.registerLanguage("ldscript", function (hljs) {
            return {
                name: "Linker Script",
                keywords: {
                    keyword: "SECTIONS MEMORY ENTRY PROVIDE KEEP ALIGN",
                    literal: "TRUE FALSE",
                    built_in: "__executable_start __bss_start _end"
                },
                contains: [
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE,
                    hljs.QUOTE_STRING_MODE,
                    hljs.NUMBER_MODE
                ]
            }
        })

        const highlighted = hljs.highlight(code, {
            language,
            ignoreIllegals: true
        }).value

        const lines = highlighted.split('\n')
        const numberedCode = lines
            .map((line, index) => `<div class="flex">
        <span class="line-number select-none pr-4 text-gray-500">${index + 1}</span>
        <code class="line-content whitespace-pre-wrap break-words">${line}</code>
      </div>`)
            .join('')

        setHtmlContent(numberedCode)
    }, [code, language])

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    return (
        <motion.div
            className={`group relative ${className}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="rounded-lg bg-[#1e1e1e] p-4 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-sm text-gray-400">{title}</span>
                    <button
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 rounded px-3 py-1.5 text-sm transition-colors hover:bg-white/10"
                    >
                        <svg
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                        </svg>
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>

                {/* 代码区域 */}
                <pre className="overflow-x-auto">
          <div
              className="font-mono text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </pre>
            </div>

            <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.div>
    )
}

export default CodeBlock