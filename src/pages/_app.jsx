import { useEffect, useRef } from 'react'

/**
 * root
 */
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

/**
 * podcast
 */
import { AudioProvider } from '@/components/podcast/AudioProvider'
import { Layout } from '@/components/podcast/Layout'

import usePageView from '@/hooks/usePageView'
import GoogleAnalytics from '@/components/GoogleAnalytics'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
    usePageView()
    let previousPathname = usePrevious(router.pathname)
    const isPodcast = router.pathname.startsWith('/podcast')
    if (process.browser && isPodcast) {
        document.documentElement.classList.remove('dark')
    }
    return (
        <>
            <GoogleAnalytics />
            {!isPodcast && (
                <>
                    <div className="fixed inset-0 flex justify-center sm:px-8">
                        <div className="flex w-full max-w-7xl lg:px-8">
                            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
                        </div>
                    </div>
                    <div className="relative">
                        <Header />
                        <main>
                            <Component previousPathname={previousPathname} {...pageProps} />
                        </main>
                        <Footer />
                    </div>
                </>
            )}
            {isPodcast && (
                <AudioProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AudioProvider>
            )}
        </>
    )
}
