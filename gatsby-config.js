require('dotenv').config()
const { INLINES } = require("@contentful/rich-text-types")
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `嘉手苅志朗|Shiro Kadekaru`,
    description: `嘉手苅志朗のポートフォリオサイト`,
    keywords: `嘉手苅志朗,カデカルシロウ,Shiro Kadekaru`,
    author: `Shiro Kadekaru`,
    siteUrl: `https://kadekaru.netlify.app/`
  },
  plugins: [
    `gatsby-plugin-scss-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    },
    {
      resolve: `gatsby-plugin-svgr`
    },
    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
          renderNode: {
            [INLINES.HYPERLINK]: node => {
              const {
                content,
                data: { uri },
              } = node
              const { value } = content[0]
              return `<a href="${uri}" target="_blank">${value}</a>`
            },
          },
        },
      },
    },
  ],
}
