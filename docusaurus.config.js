// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Subnomicon',
  tagline: 'Subnomicon is the source of knowledge about the Subspace Network scalable blockchain protocol',
  url: 'https://subnomicon.subspace.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'subspace', // Usually your GitHub org/user name.
  projectName: 'subnomicon', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-25NWNJB9MR',
        anonymizeIP: false, 
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/subspace/subnomicon/blob/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',
  
        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',
  
        indexName: 'YOUR_INDEX_NAME',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      colorMode:{
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'Subspace Labs Logo',
          src: 'img/logo-black.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Subnomicon',
          },
          {
            type: 'dropdown',
            label: 'Network Resources',
            position: 'left',
            items: [
              {
                label: 'Subspace Explorer',
                href: 'https://explorer.subspace.network/',
              },
              {
                label: 'Subspace Telemetry',
                href: 'https://telemetry.subspace.network',
              },
              {
                label: 'PolkadotJS Portal',
                href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feu-1.gemini-2a.subspace.network%2Fws#/explorer',
              },
            ],
          },
          {
            href: 'https://docs.subspace.network',
            label: 'Documentation',
            position: 'right',
          },
          {
            href: 'https://github.com/subspace',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Subspace Network',
            items: [
              {
                label: 'Official Website',
                href: 'https://subspace.network'
              },
              {
                label: 'Subspace Desktop',
                href: 'https://github.com/subspace/subspace-desktop'
              },
              {
                label: 'Subspace Explorer',
                href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest-rpc.subspace.network#/explorer'
              },
              {
                label: 'Subspace Relayer',
                href: 'https://testnet-relayer.subspace.network/'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/subspace',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/subspace-network',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/subspace_network',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/sub',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCojYRCZOtVTJHJXivOYJzeQ',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/subspace-blockchain',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/network_subspace',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/subspace-network',
              },
              {
                label: 'Subsocial',
                href: 'https://app.subsocial.network/@NetworkSubspace'
              }
            ],
          },
        ],
        logo: {
          alt: 'Subspace Labs Banner Logo',
          src: 'img/banner-black.svg',
          srcDark: 'img/banner-white.svg',
          href: 'https://subspace.network',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Subspace Labs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['toml'],
      },
    }),
};

module.exports = config;
