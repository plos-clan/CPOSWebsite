export default {
    logo: <b>CoolPotOS</b>,
    project: {
        link: 'https://github.com/plos-clan/CoolPotOS',
    },
    docsRepositoryBase: 'https://github.com/plos-clan/CoolPotOS/tree/main/app/docs',
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
    navigation: {
        '/docs': [
            {
                title: 'Getting Started',
                items: [
                    { title: 'Introduction', href: '/docs' },
                    { title: 'Installation', href: '/docs/install' },
                ],
            },
            {
                title: 'Development',
                items: [
                    { title: 'Kernel', href: '/docs/kernel' },
                    { title: 'Scheduler', href: '/docs/scheduler' },
                    { title: 'Contributors', href: '/docs/contributors' },
                ],
            },
        ],
    },
}