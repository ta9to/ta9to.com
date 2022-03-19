import 'twin.macro'
import React from 'react'
import {Action} from '.'

interface Props {
  heading: string
  description: string
  twitter?: ActionType
  email?: ActionType
}

const Contact: React.FC<Props> = ({heading, description, twitter, email}) => {
  return (
    <div tw="flex flex-wrap py-8 md:flex-nowrap">
      <div tw="md:flex-grow">
        <h3 tw="mt-4 text-3xl font-black leading-none tracking-tighter text-black lowercase text-shadow-xl md:text-6xl">
          Contact
        </h3>
        <h4 tw="mt-4 text-3xl font-black leading-none tracking-tighter text-black lowercase text-shadow-xl md:text-4xl">
          {heading}
        </h4>
        <p tw="py-4 text-4xl font-light leading-none tracking-tighter text-black lowercase text-shadow-xl md:text-3xl 2xl:text-4xl">
          {description}
        </p>
        {twitter && <p tw="mt-4 text-3xl font-light leading-none tracking-tighter lowercase text-shadow-xl md:text-6xl">
          <Action
            tw="text-black hover:text-white"
            action={twitter}
          >
            Twitter
          </Action>
        </p>}
        {email && <p tw="mt-4 text-3xl font-light leading-none tracking-tighter lowercase text-shadow-xl md:text-6xl">
          <Action
            tw="text-black hover:text-white "
            action={email}
          >
            Email
          </Action>
        </p>}
      </div>
    </div>
  )
}

export default Contact
