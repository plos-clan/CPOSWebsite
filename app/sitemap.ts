import type { MetadataRoute } from 'next'
import type { PageMapItem } from 'nextra'
import { getPageMap } from 'nextra/page-map'
import { siteConfig } from '@/app/site'

export const dynamic = 'force-static'

function collectRoutes(items: PageMapItem[]): string[] {
    return items.flatMap((item) => {
        if ('children' in item) return collectRoutes(item.children)
        return 'route' in item ? [item.route] : []
    })
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = new Set(['/', ...collectRoutes(await getPageMap())])
    const lastModified = new Date()

    return Array.from(routes, (route) => ({
        url: new URL(route, siteConfig.url).toString(),
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: route === '/' ? 1 : 0.7,
    }))
}
