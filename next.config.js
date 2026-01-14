/* eslint-disable */
const withImages = require('next-images');
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

module.exports = withImages({
  assetPrefix: (() => {
    if (NODE_ENV === 'production' && homepage) {
      try {
        const { pathname } = new URL(homepage);
        // GitHub Pages 서브 경로 적용
        return pathname !== '/' ? pathname : '';
      } catch {
        console.warn('> Invalid homepage URL in package.json, assetPrefix not applied');
        return '';
      }
    }
    return '';
  })(),
  images: {
    unoptimized: true, // GitHub Pages에서는 이미지 최적화 비활성화
  },
});
