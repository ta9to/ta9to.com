import glob from 'fast-glob'
import * as path from 'path'
import Parser from 'rss-parser'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  const feed = await new Parser().parseURL('https://qiita.com/ta9to/feed')
  return feed.items;
}
