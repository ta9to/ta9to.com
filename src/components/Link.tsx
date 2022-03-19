import 'twin.macro'
import React from 'react'
import NextLink, { LinkProps } from 'next/link'

interface Props {
  tw?: string
  className?: string
}

const Link: React.FC<LinkProps & Props> = ({
  children,
  href,
  passHref,
  ...other
}) => {
  const urlString = href as string
  const internal = /^\/(?!\/)/.test(urlString)

  return internal ? (
    <NextLink href={href} passHref={passHref}>
      <a {...other}>{children}</a>
    </NextLink>
  ) : (
    <a href={urlString} {...other}>
      {children}
    </a>
  )
}

export default Link
