// next.config.js
const withCSS = require('@zeit/next-css');

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  console.log("Setup assetPrefix for Production");
} else {
  console.log("Setup assetPrefix for dev");
}

module.exports = withCSS({
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },

    }
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://lindsayjopson.github.io/catchup/' : ''
})
