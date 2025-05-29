const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  url: 'https://kuasasemi.github.io',
  baseUrl: '/docs/', // must match repo name
  organizationName: 'KuasaSemi',
  projectName: 'aquarius-docs',
  themeConfig: {
    // Navigation Bar
    navbar: {
      logo: {
        alt: "Docusaurus Logo",
        src: "img/logo/kuasasemi-logo-light.png", // Default (Light Mode)
        srcDark: "img/logo/kuasasemi-logo-dark.png", // Dark Mode Logo
      },
      items: [
        { to: "/docs/intro", label: "Docs", position: "right" },
        { href: "https://github.com/KuasaSemi", label: "GitHub", position: "right" },
      ],
    },
    // Footer
    footer: {
      style: "dark", // or "light"
      links: [
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Careers",
              href: "/careers",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "/privacy",
            },
            {
              label: "Terms of Service",
              href: "/terms",
            },
          ],
        },
      ],
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