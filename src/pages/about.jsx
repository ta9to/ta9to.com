import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Takuto Kudo</title>
        <meta
          name="description"
          content="I’m Takuto Kudo. I live in Asia/Tokyo, where I develop the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Takuto Kudo. I live in Asia/Tokyo, where I develop the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                My journey into the world of technology began at university, where I immersed myself in computer science. Intrigued by the endless possibilities, I knew this was a realm where I could not only solve complex problems but also create value.
              </p>
              <p>
                My first taste of the industry came through an internship at a venture company called Volaré. That experience was transformative. I learned not just the nuances of web development, but also the essence of teamwork and the exhilarating process of building a company from the ground up.
              </p>
              <p>
                Fueled by the desire to make an impact, I shifted gears and joined a few different companies, gaining diverse experiences. In 2014, a friend and I decided to take a leap of faith. Using our own funds, we started a small company focused solely on contracted development projects. That journey led me to work on a wide array of challenges — from handling various software development projects to launching a restaurant and even working on long-term overseas assignments.
              </p>
              <p>
                In 2018, I found myself rejoining Volare, now renamed Nyle, as an Engineering Manager. I was tasked with launching new businesses and spearheading reforms within the engineering team. By 2020, I assumed the role of VPoE, taking responsibility for organizational and technical strategies within the engineering team.
              </p>
              <p>
                Presently, I am deeply involved in application and product development, with a focus on GAI. My quest for innovation and excellence continues, as I am more committed than ever to shape technologies that bring value, efficiency, and meaning to our lives.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/ta99to" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/ta99to/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/ta9to" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/ta9to/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                  href="mailto:takuto_kd@nyle.co.jp"
                  icon={MailIcon}
                  className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                takuto_kd@nyle.co.jp
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
