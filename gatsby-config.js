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
    title: `Title from siteMetadata`,
    description: `A simple description about pandas eating lots`,
    author: `gatsby`
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
          /*
           * Defines custom html string for each node type like heading, embedded entries etc..
           */
          renderNode: {
            // Example
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
