import Link from 'next/link'
import { motion } from 'framer-motion'

import { Footer } from '@/components/riotapidoc/Footer'
import { Header } from '@/components/riotapidoc/Header'
import { Logo } from '@/components/riotapidoc/Logo'
import { Navigation } from '@/components/riotapidoc/Navigation'
import { Prose } from '@/components/riotapidoc/Prose'
import { SectionProvider } from '@/components/riotapidoc/SectionProvider'

export function RiotApiDocLayout({ children, sections = [] }) {
  return (
    <SectionProvider sections={sections}>
      <div className="lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pt-4 lg:pb-8 lg:dark:border-white/10 xl:w-80">
            <div className="hidden lg:flex">
              <Link href="/riotapidoc/" aria-label="Home">
                Riot Developer Portal 日本語
              </Link>
            </div>
            <Header />
            <Navigation className="hidden lg:mt-10 lg:block" />
          </div>
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
          <main className="py-16">
            <Prose as="article">{children}</Prose>
          </main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
