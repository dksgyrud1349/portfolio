/* eslint-disable */
const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  assetPrefix: '.',      // 상대 경로로 변경
  webpack: (config) => {
    config.resolve.alias['@'] = __dirname;
    return config;
  },
});
