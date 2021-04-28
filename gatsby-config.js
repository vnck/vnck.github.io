const siteMetadata = {
  title: `vnck`,
  description: `Exploring the Urban Machine for Living. Raised and residing in Singapore  `,
  author: `vnck`,
  siteUrl: "https://vnck.xyz",
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content`, name: `content` },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `VNCK`,
        icon: `src/images/favicon.png`,
      }
    },
  ],
};