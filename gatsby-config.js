/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `MileBalenovic`,
    description: `Blazing fast modern site generator for React`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        'gatsby-remark-relative-images',
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 750,
            linkImagesToOriginal: false
          }
        }
      ]
    }
  },
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    }
  }
  ]
}
