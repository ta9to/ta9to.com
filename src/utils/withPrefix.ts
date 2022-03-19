import { path_prefix } from '../../content/data/config.json'

export default function withPrefix(url: string): string {
  if (!url) {
    return url
  }

  if (
    url.startsWith('#') ||
    url.startsWith('http://') ||
    url.startsWith('https://')
  ) {
    return url
  }

  const basePath = path_prefix.replace(/^\/+|\/+$/g, '')
  const urlStartTrimmed = url.replace(/^\/+/g, '')

  const path: string = [basePath, urlStartTrimmed].filter(Boolean).join('/')

  return '/' + path
}
