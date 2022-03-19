/* eslint-disable */
const sourcebit = require('sourcebit')
/* eslint-disable */
const withOptimizedImages = require('next-optimized-images')

const sourcebitConfig = require('./sourcebit.js')

sourcebit.fetch(sourcebitConfig)

module.exports = withOptimizedImages({
	/* config for next-optimized-images */
	optimizeImagesInDev: true,
	/* general nextjs config */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Unset client-side javascript that only works server-side
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      config.node = {
				fs: 'empty',
				module: 'empty'
			}
    }

    return config
  },
})
