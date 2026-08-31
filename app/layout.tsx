import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Banner } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import { logoFont } from '@/app/components/Fonts'
import { siteConfig } from '@/app/site'

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: `${siteConfig.name} Documentation`,
    description: siteConfig.description,
    icons: {
        icon: '/icon.png',
        shortcut: '/icon.png',
        apple: '/icon.png',
    },
}

const banner = <Banner storageKey="cpos-development-banner">CoolPotOS 4.0 rebuild developing</Banner>
const navbar = (
    <Navbar logo={<b>{siteConfig.name}</b>} align="left" />
)

const feedback = {
    link: `${siteConfig.repository.url}/issues`,
    content: 'Question? Give us feedback',
    labels: 'feedback',
}

export default async function RootLayout({ children }: {
    children: ReactNode
}) {
    return (
        <html
            lang="zh-CN"
            dir="ltr"
            suppressHydrationWarning
            className={logoFont.variable}
        >
            <body>
                <Layout
                    banner={banner}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase={siteConfig.docsRepository}
                    feedback={feedback}
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}
