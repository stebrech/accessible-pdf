const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Accessible PDF',
    description: 'Tutorials how to create PDF/UA compliant documents.',
    author: 'Stefan Brechbühl',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-autolink-headers`,
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 960,
            quality: 90,
            linkImagesToOriginal: false,
          }
        }
      ],
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `de-CH`],
        defaultLanguage: `en`,
        redirect: false,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-i18n',
    //   options: {        
    //     langKeyDefault: 'en',
    //     useLangKeyLayout: true,
    //     pagesPaths: [ "/content/basics/", '/content/tutorials' ]
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `basics`,
        path: `${__dirname}/content/basics`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tutorials`,
        path: `${__dirname}/content/tutorials`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `glossary`,
        path: `${__dirname}/content/glossary`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-default-mdx-basic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
