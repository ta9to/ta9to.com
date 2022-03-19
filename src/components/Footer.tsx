import 'twin.macro'
import React from 'react'
import Action from './Action'
import Logo from './Logo'
import { useConfig } from '../hooks'

const SocialIcon: React.FC<{ brand: string }> = ({ brand }) => {
  switch (brand) {
    case 'twitter': {
      return (
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          tw="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      )
    }
    case 'facebook': {
      return (
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          tw="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      )
    }
    case 'linkedin': {
      return (
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          tw="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          ></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      )
    }
    case 'instagram': {
      return (
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          tw="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      )
    }
    default: {
      return null
    }
  }
}

const Footer: React.FC = () => {
  const { footer } = useConfig()

  const {
    has_nav: hasNav,
    has_social: hasSocial,
    nav_links: navLinks,
    social_links: socialLinks,
    copyright,
    copyright_link: copyrightLink
  } = footer

  return (
    <footer tw="text-blueGray-600">
      <div tw="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row lg:px-24">
        <a
          href="https://www.wickedtemplates.com/"
          tw="flex items-center justify-center md:justify-start "
        >
          <Logo />
        </a>
        <p tw="mt-4 text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-blueGray-200 sm:py-2 sm:mt-0">
          {copyright}
          {copyrightLink && (
            <Action
              tw="ml-1 text-black hover:text-blue-600"
              action={copyrightLink}
            />
          )}
        </p>
        {hasNav && (
          <nav tw="inline-flex items-center justify-start gap-2 mt-4 lg:mt-0">
            {navLinks.map((action, index) => (
              <p
                key={index}
                tw="mt-4 text-sm text-black sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 hover:text-blue-600"
              >
                <Action action={action} />
              </p>
            ))}
          </nav>
        )}
        {hasSocial && (
          <span tw="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start lg:ml-auto">
            {socialLinks
              .filter((action: ActionType) => action.url)
              .map((action, index) => (
                <Action key={index} action={action} tw="ml-3 text-black">
                  <SocialIcon brand={action.label} />
                </Action>
              ))}
          </span>
        )}
      </div>
    </footer>
  )
}

export default Footer
