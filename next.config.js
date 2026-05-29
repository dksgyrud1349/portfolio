const { homepage } = require('./package.json');

const basePath =
  process.env.NODE_ENV === 'production' && homepage
    ? new URL(homepage).pathname
    : '';

module.exports = {
  output: 'export',

  basePath,
  assetPrefix: basePath,

  images: {
    unoptimized: true,
  },
};