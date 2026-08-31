export const siteConfig = {
    name: 'CoolPotOS',
    description: 'CoolPotOS 4.0 rebuild — official documentation site.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cpos.plos.edu.ci',
    repository: {
        slug: 'plos-clan/CoolPotOS',
        url: 'https://github.com/plos-clan/CoolPotOS',
    },
    docsRepository: 'https://github.com/plos-clan/CPOSWebsite/tree/main',
} as const
