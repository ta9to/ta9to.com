import nextMDX from '@next/mdx'
// import remarkGfm from 'remark-gfm'
// import rehypePrism from '@mapbox/rehype-prism'
import { remarkPlugins } from './src/components/riotapidoc/mdx/remark.mjs'
import { rehypePlugins } from './src/components/riotapidoc/mdx/rehype.mjs'
import { recmaPlugins } from './src/components/riotapidoc/mdx/recma.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [remarkGfm],
    // rehypePlugins: [rehypePrism],
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
    providerImportSource: '@mdx-js/react',
  },
})

export default withMDX(nextConfig)
