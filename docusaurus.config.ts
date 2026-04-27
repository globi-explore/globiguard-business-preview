import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GlobiGuard Strategy Preview',
  tagline: 'Read-only business review for co-founder preview',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://globi-explore.github.io',
  baseUrl: '/globiguard-business-preview/',

  organizationName: 'globi-explore',
  projectName: 'globiguard-business-preview',

  onBrokenLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'noindex,nofollow,noarchive,nosnippet,noimageindex',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    announcementBar: {
      id: 'preview-bar',
      content:
        'Temporary read-only preview. Basic client-side password only. Do not share broadly.',
      backgroundColor: '#111827',
      textColor: '#d1d5db',
      isCloseable: false,
    },
    navbar: {
      title: 'GlobiGuard Strategy Preview',
      logo: {
        alt: 'GlobiGuard Strategy Preview',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'businessSidebar',
          position: 'left',
          label: 'Business Pack',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Preview',
          items: [
            {
              label: 'Overview',
              to: '/',
            },
          ],
        },
        {
          title: 'Key pages',
          items: [
            {
              label: 'Business model',
              to: '/04-business-model-and-sequencing',
            },
            {
              label: 'Final verdict',
              to: '/09-final-verdict',
            },
          ],
        },
      ],
      copyright: 'Temporary GlobiGuard strategy preview.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
