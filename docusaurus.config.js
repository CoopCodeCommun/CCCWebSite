// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Coopérative Code Commun",
    tagline: "Fabrique de communs numériques",
    favicon: 'img/CCClogo_node_color.svg',
    scripts: [{src: 'https://plausible.codecommun.co/js/script.js', defer: true, 'data-domain': 'codecommun.coop'}],

    // Set the production url of your site here
    url: 'https://codecommun.coop/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'CoopCodeCommun', // Usually your GitHub org/user name.
    projectName: 'CCCWebSite', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/CoopCodeCommun/CCCWebSite/',
                },
                blog: {
                    showReadingTime: true,
                    blogTitle: 'Code Commun, le blog.',
                    blogDescription: 'Les recettes de la coopérative pour de chouettes communs numériques.',
                    postsPerPage: 'ALL',
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
                    editUrl:
                        'https://github.com/CoopCodeCommun/CCCWebSite/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/Graphical_codecommun270.png',
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            forceDarkMode: true,
            metadata: [{
                name: 'keywords',
                content: "Logiciel libre, coopérative, développement, informatique, Adhésion, billetterie, cashless, monnaie locale, monnaie temps, compagne de don, gestion de prise de commande buvette et restauration"
            }],
            navbar: {
                title: 'Coopérative Code Commun',
                logo: {
                    alt: 'Logo',
                    src: 'img/CCClogo_node_color.svg',
                },
                items: [
                    // {
                    //     type: 'docSidebar',
                    //     sidebarId: 'tutorialSidebar',
                    //     position: 'left',
                    //     label: 'Créations',
                    // },
                    // {to: '/docs/charte', label: 'Fabrique', position: 'left'},
                    {to: '/docs/category/la-fabrique-à-commun', label: 'Présentation', position: 'left'},
                    {to: '/docs/category/créations', label: 'Créations', position: 'left'},
                    {to: '/docs/category/services', label: 'Services', position: 'left'},
                    {to: '/docs/category/formations', label: 'Formations', position: 'left'},
                    {to: '/blog', label: 'Recettes & blog', position: 'left'},
                    {
                        href: 'https://github.com/CoopCodeCommun/',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Plan du site',
                        items: [
                            {
                                label: 'Présentation',
                                to: '/docs/category/la-fabrique-à-commun',
                            },
                            {
                                label: 'Créations',
                                to: '/docs/category/créations',
                            },
                            {
                                label: 'Services',
                                to: '/docs/category/services',
                            },
                            {
                                label: 'Formations',
                                to: '/docs/category/formations',
                            },
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                        ],
                    },
                    {
                        title: 'Communauté et Contacts',
                        items: [
                            {
                                label: 'Matrix',
                                href: 'https://matrix.to/#/#tibillet:tiers-lieux.org',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/pmVMJ4eMQB',
                            },
                            {
                                label: 'Email',
                                href: 'mailto:contact@tibillet.re',
                            },

                        ],
                    },
                    {
                        title: 'Divers',
                        items: [
                            {
                                label: 'Flux RSS',
                                href: 'https://codecommun.coop/blog/rss.xml',
                            },
                            {
                                label: 'GitHub Code Commun',
                                href: 'https://github.com/CoopCodeCommun/',
                            },
                            {
                                label: 'GitHub TiBIllet',
                                href: 'https://github.com/TiBillet/',
                            },
                        ],
                    },
                ],
                copyright: `Tout les textes hébergés ici sont sous licence creative common : Attribution - Partage dans les Mêmes Conditions CC BY-SA`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
