// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Coopérative Code Commun',
    tagline: 'Fabrique de communs numériques',
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
            image: 'img/CCClogo_node_color.svg',
            navbar: {
                title: 'Coopérative Code Commun',
                logo: {
                    alt: 'Logo',
                    src: 'img/CCClogo_node_color.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Créations',
                    },
                    {to: '/blog', label: 'Recettes', position: 'left'},
                    {to: '/sysadmin', label: 'Hebergement', position: 'left'},
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
                        title: 'Créations',
                        items: [
                            {
                                label: 'Présentation',
                                to: '/docs/intro',
                            },
                            {
                                label: 'TiBillet',
                                to: '/docs/category/tibillet--event',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Rocket Chat',
                                href: 'https://chat.tiers-lieux.org/channel/TiBillet',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/FNxsdZrf',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Recettes',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/CoopCodeCommun/',
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
