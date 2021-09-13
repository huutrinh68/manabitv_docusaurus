const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'ManabiTV',
  tagline: 'Let’s build  a brighter future together',
  url: 'https://huutrinh68.github.io/',
  baseUrl: '/manabitv/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'huutrinh68', // Usually your GitHub org/user name.
  projectName: 'manabitv', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/huutrinh68/manabitv/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/huutrinh68/manabitv/website/master/',
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
      navbar: {
        title: 'Manabitv',
        logo: {
          alt: 'manabitv logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'About Me',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/huutrinh68/manabitv',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Information',
            items: [
              {
                label: 'About Me',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube channel',
                href: 'https://www.youtube.com/channel/UC249ZCTGpyttnCsdc7aSpWg',
              },
              {
                label: 'Slack channel',
                href: 'https://join.slack.com/t/manabi-tv/shared_invite/zt-dys8x4h1-bDmMzVmutsFlrLbXo9lNrg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/huutrinh68/manabitv',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Manabitv blog`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
