module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'img',
            path: `${__dirname}/src/images`
        }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: `${__dirname}/src/images/Logo.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true
        }
      }
    },
  	'gatsby-plugin-react-helmet',
  	'gatsby-transformer-sharp',
  	'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components'
  ],
};
