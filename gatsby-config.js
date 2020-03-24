require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Kulijuli 2020 - Nöjesgrytan`,
    description: `Kulijuli 2020 bjuder på mängder av spännande artister även i år. Se vilka artister som kommer samt få de senaste nyheterna om kulijuli.`,
    author: `@nickwallentin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.AIRTABLE_API_KEY}`,

        tables: [
          {
            baseId: `${process.env.AIRTABLE_BASE_ID}`,
            tableName: `Program`,
            tableView: `Webb`,
            mapping: { Bild: `fileNode` },
          },
          {
            baseId: `${process.env.AIRTABLE_BASE_ID}`,
            tableName: `Nyheter`,
            tableView: `Allt`,
            mapping: { Img: `fileNode`, Text: "text/markdown" },
          },
          {
            baseId: `${process.env.AIRTABLE_BASE_ID}`,
            tableName: `Info`,
            tableView: `Allt`,
          },
          {
            baseId: `${process.env.SPONSORER_AIRTABLE_BASE_ID}`,
            tableName: `Sponsorer`,
            tableView: `Allt`,
            mapping: { Logo: `fileNode` },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik`,
            variants: [`400`, `500`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kij-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
