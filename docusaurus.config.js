import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://kuasasemi.github.io', // GitHub Pages base URL
  baseUrl: '/aquarius-docs/',         // Use your repo name here
  organizationName: 'KuasaSemi',      // Your GitHub username or org
  projectName: 'aquarius-docs',       // Your repo name
  deploymentBranch: 'gh-pages',

  themeConfig: {
    navbar: {
      logo: {
        alt: 'Docusaurus Logo',
        src: 'img/logo/kuasasemi-logo-light.png',
        srcDark: 'img/logo/kuasasemi-logo-dark.png',
      },
      items: [
        { to: '/', label: 'Docs', position: 'right' },
        { href: 'https://github.com/KuasaSemi', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} KuasaSemi Ltd. All rights reserved.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        pages: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
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
};


export default config;
