// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  assetPrefix: '/catchup',
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  }
})
