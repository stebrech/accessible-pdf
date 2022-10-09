module.exports = {
  siteMetadata: {
    title: "Accessible PDF",
    description: "How to create PDF/UA compliant documents",
    author: "Stefan Brechbühl",
    siteUrl: "https://accessible-pdf.info",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              fromHeading: 2,
              toHeading: 3,
              className: "toc",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `basics`,
        path: `${__dirname}/content/basics`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tutorials`,
        path: `${__dirname}/content/tutorials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`./i18n/config.json`),
        locales: `en de`,
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./i18n/en.json`,
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `accessible-pdf.info`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Accessible PDF",
        short_name: "PDFa11y",
        start_url: "/",
        background_color: "#f1f3f5",
        theme_color: "#099268",
        display: "minimal-ui",
        icon: "static/images/logo_accessiblePDF_square.png",
      },
    },
    "gatsby-plugin-offline",
  ],
};
