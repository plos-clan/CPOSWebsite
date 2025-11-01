import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Banner, Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import {logoFont} from "@/app/components/Fonts"
import Link from "next/link";

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
    <Navbar logo={<b>CoolPotOS</b>}>
        <Link
            href={'https://github.com/plos-clan/CoolPotOS'}
            className="text-gray-300 transition-colors font-medium text-sm px-3 py-1.5 rounded-lg hover:bg-neutral-800"
        >
            GitHub
        </Link>
        <Link
            href={'/docs'}
            className="text-gray-300 transition-colors font-medium text-sm px-3 py-1.5 rounded-lg hover:bg-neutral-800"
        >
            Docs
        </Link>
        <Link
            href={'/contributors'}
            className="text-gray-300 transition-colors font-medium text-sm px-3 py-1.5 rounded-lg hover:bg-neutral-800"
        >
            Contributors
        </Link>
    </Navbar>
)
const footer = <Footer>MIT {new Date().getFullYear()} © plos-clan.</Footer>

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
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}