/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://cpos.plos-clan.org',

    generateRobotsTxt: true,

    exclude: [
        '*/_meta',
        '*/_meta/*',

        '/404',
        '/api/*',
    ],

    transform: async (config, path) => {
        if (path.includes('/sitemap') || path.includes('/robots.txt')) {
            return null;
        }

        if (path.includes('/_app') || path.includes('/_document')) {
            return null;
        }

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
}