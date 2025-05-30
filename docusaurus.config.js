const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://mawbydp.github.io', // GitHub Pages base URL
  baseUrl: '/docs/',                // Use your repo name here
  organizationName: 'KuasaSemi', // Your GitHub username or org
  projectName: 'aquarius-docs',         // Your repo name
  deploymentBranch: 'gh-pages',

  themeConfig: {
    // Navigation Bar
    navbar: {
      logo: {
        alt: "Docusaurus Logo",
        src: "img/logo/kuasasemi-logo-light.png", // Default (Light Mode)
        srcDark: "img/logo/kuasasemi-logo-dark.png", // Dark Mode Logo
      },
      items: [
        { to: "/docs/", label: "Docs", position: "right" },
        { href: "https://github.com/KuasaSemi", label: "GitHub", position: "right" },
      ],
    },
    // Footer
    footer: {
      style: "dark", // or "light"
      copyright: `© ${new Date().getFullYear()} KuasaSemi Ltd. All rights reserved.`,
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        pages: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};