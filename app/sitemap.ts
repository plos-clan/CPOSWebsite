import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cpos.plos-clan.org';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseRoutes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    const docPages: MetadataRoute.Sitemap = [
        '/source',
        '/docs',
        "/contributors",
    ].map((slug) => ({
        url: `${BASE_URL}${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    return [...baseRoutes, ...docPages];
}