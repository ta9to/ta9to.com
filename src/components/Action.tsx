import React from 'react'

import Link from './Link'
import { withPrefix } from '../utils'

interface Props {
  action: ActionType
  className?: string
  tw?: string
  children?: React.ReactNode
}

const Action: React.FC<Props> = ({ action, className, tw, children }) => {
  const { url, label, newWindow, noFollow } = action

  const attrs = {
    ...(newWindow ? { target: '_blank' } : {}),
    ...(newWindow || noFollow
      ? {
          rel: [newWindow ? 'noopener' : '', noFollow ? 'nofollow' : '']
            .filter(Boolean)
            .join(' ')
        }
      : {})
  }

  return (
    <Link className={className} tw={tw} href={withPrefix(url)} {...attrs}>
      {children ?? label}
    </Link>
  )
}

export default Action
