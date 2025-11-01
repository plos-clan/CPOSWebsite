/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const config = {
    logo: <b>CoolPotOS</b>,
    project: {
        link: 'https://github.com/plos-clan/CoolPotOS',
    },
    docsRepositoryBase: 'https://github.com/plos-clan/CPOSWebsite/tree/main/app/docs',
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
    navbar: {
        items: [
            {
                text: 'GitHub',
                link: 'https://github.com/plos-clan/CoolPotOS',
                newWindow: true,
            },
            {
                text: 'Contributors',
                link: '/contributors',
            },
            {
                text: 'Docs',
                link: '/docs',
            }
        ],
    },
}

export default config;