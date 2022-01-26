module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.amykirasack.com',
    title: 'Amy Kirasack',
    description: `Clean, communicative, and comprehensive code. Because code isn’t just for computers. It’s for humans, too.`,
    author: 'Amy Kirasack',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'g,atsby-plugin-fontawesome-css',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        duration: 500,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog-posts',
        path: `${__dirname}/content/blog-posts/`,
      },
      __key: 'blog-posts',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jobs',
        path: `${__dirname}/content/jobs/`,
      },
      __key: 'jobs',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'cv',
        path: `${__dirname}/content/cv/`,
      },
      __key: 'cv',
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
      },
    },
  ],
};
