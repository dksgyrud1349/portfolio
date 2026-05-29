/* eslint-disable */
const withImages = require('next-images');
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

// GitHub Pages base 경로 계산
let basePath = '';

if (NODE_ENV === 'production' && homepage) {
  try {
    const { pathname } = new URL(homepage);
    basePath = pathname !== '/' ? pathname : '';
  } catch {
    console.warn('> Invalid homepage URL in package.json, basePath not applied');
    basePath = '';
  }
}

module.exports = withImages({
  output: 'export',

  // ✅ 핵심: basePath + assetPrefix 반드시 같이 맞춰야 함
  basePath,
  assetPrefix: basePath,

  images: {
    unoptimized: true, // GitHub Pages 필수
  },
});