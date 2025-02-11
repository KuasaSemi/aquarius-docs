const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Aquarius Docs",
  tagline: "Build optimized websites quickly, focus on your content",

  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",

  themeConfig: {
    navbar: {
      logo: {
        alt: "Docusaurus Logo",
        src: "img/logo/kuasasemi-logo-light.png", // Default (Light Mode)
        srcDark: "img/logo/kuasasemi-logo-dark.png", // Dark Mode Logo
      },
      items: [
        { to: "/docs/intro", label: "Docs", position: "right" },
        { href: "https://github.com/your-repo", label: "GitHub", position: "right" },
      ],
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