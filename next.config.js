// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  },
  assetPrefix: 'https://lindsayjopson.github.io/catchup/',
})
