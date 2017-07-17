require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Quartile',
    description: 'Data-driven advertising solutions experts',
    head: {
      titleTemplate: 'Quartile',
      meta: [
        { name: 'description', content: 'Data-driven advertising solutions experts' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'quartile' },
        { property: 'og:image', content: 'http://quartile.io/qlogo.jpg' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'quartile' },
        { property: 'og:description', content: 'Data-driven advertising solutions experts' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@quartile' },
        { property: 'og:creator', content: '@quartile' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  },

}, environment);
