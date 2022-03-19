import React from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next'
import { sourcebitDataClient } from 'sourcebit-target-next'
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates'
import pageLayouts from '../layouts'
import { ConfigContext } from '../context'

interface Props {
  data: {
    config: ConfigType
  }
  page?: {
    __metadata?: {
      modelName?: string
    }
  }
}

const Page = (props: Props) => {
  const { data, page: pageProps } = props
  const modelName = pageProps?.__metadata?.modelName ?? ''
  const PageLayout = pageLayouts[modelName]

  if (!PageLayout) {
    throw new Error(`no page layout matching the page model: ${modelName}`)
  }

  return (
		<ConfigContext.Provider value={data?.config}>
      <PageLayout page={pageProps} />
    </ConfigContext.Provider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('Page [...slug].js getStaticPaths')
  const paths: string[] = await sourcebitDataClient.getStaticPaths()
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('Page [...slug].js getStaticProps, params: ', params)
  const pagePath =
    '/' + (params.slug ? (params.slug as string[]).join('/') : '')
  const props: GetStaticPropsResult<any> =
    await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath)
  return { props }
}

export default withRemoteDataUpdates(Page)
