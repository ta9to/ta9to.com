import 'twin.macro'
import React from 'react'
import Head from 'next/head'
import { Footer, Menu, Intro, Section, Contact } from '../components'
import { withPrefix } from '../utils'
import { useConfig } from '../hooks'

interface Props {
  page: PageType
	sections: SectionType[]
}

export default function PageLayout({ page }: Props): JSX.Element {
  const { seo, intro, sections } = page
  const { domain } = useConfig()

  return (
    <div tw="lg:p-32">
      <Head>
        <title>{page.title}</title>
        <link rel="icon" href="/favicon.ico" />
        {seo?.robots.length && (
          <meta name="robots" content={seo.robots.join(',')} />
        )}
        {seo?.extra
          .filter((meta) => meta.name && meta.value)
          .map((meta) =>
            meta.relativeUrl
              ? { ...meta, value: domain + withPrefix(meta.value) }
              : meta
          )
          .map((meta, index) => (
            <meta
              key={index}
              {...{ [meta.keyName]: meta.name }}
              content={meta.value}
            />
          ))}
      </Head>

      <div tw="bg-white bg-opacity-30">
        <main tw="mx-auto shadow-2xl backdrop-filter backdrop-blur-3xl">
          <div tw="container justify-center px-5 py-10 pt-20 mx-auto md:px-24 2xl:px-44">
            <div tw="flex-1 mx-auto ">
              <div tw="grid gap-4 mt-8 grid-cols-1 lg:grid-cols-6 lg:gap-8">
                <Menu />

                <div tw="col-start-1 lg:col-start-2 col-span-full lg:col-span-5 lg:border-l lg:pl-10">
                  <div tw="mx-auto -my-10 divide-y divide-black lg:pr-12">
                    <Intro {...intro}/>

										{sections.map((section, index) =>
											<Section key={index} {...section} />
										)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
