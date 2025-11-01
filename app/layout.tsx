import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Banner, Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import {logoFont} from "@/app/components/Fonts"
import React from "react";

export const metadata = {
    title: 'CoolPotOS Documentation',
    description: 'CoolPotOS 4.0 rebuild — official documentation site.',
    icons: {
        icon: '/icon.png',
        shortcut: '/icon.png',
        apple: '/icon.png',
    },
}

const banner = <Banner storageKey="some-key">CoolPotOS 4.0 rebuild developing</Banner>
const navbar = (
    <Navbar logo={<b>CoolPotOS</b>} align={'left'}/>
)

const feedback = {
    link: 'https://github.com/plos-clan/CoolPotOS/issues',
    content: 'Question? Give us feedback',
    labels: 'feedback'
};

export default async function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="cn"
            dir="ltr"
            suppressHydrationWarning
            className={`${logoFont.variable}`}
        >
        <Head>
            <link rel="icon" href={'icon.png'}/>
        </Head>
        <body>
        <Layout
            banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/plos-clan"
            feedback={feedback}
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}