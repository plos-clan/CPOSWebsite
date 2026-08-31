import type { NextConfig } from 'next'
import nextra from 'nextra'

const withNextra = nextra({})

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                pathname: '/*.png',
            },
        ],
    },
    turbopack: {
        resolveAlias: {
            'next-mdx-import-source-file': './mdx-components.tsx',
        },
    },
}

export default withNextra(nextConfig)
