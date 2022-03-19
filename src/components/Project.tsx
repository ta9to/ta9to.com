import 'twin.macro'
import React from 'react'
import Action from './Action'

interface Props {
  title: string
  description: string
  link: ActionType
}

const Project: React.FC<Props> = ({ title, description, link }) => {
  return (
    <article>
      <h3 tw="mt-20 text-3xl font-black leading-none tracking-tighter text-black text-shadow-xl md:text-6xl">
        {title}
      </h3>
      <p tw="py-4 text-2xl font-light leading-none tracking-tighter text-black lowercase text-shadow-xl md:text-3xl 2xl:text-4xl">
        {description}
      </p>
      {link && (
        <Action
          action={link}
          tw="tracking-wide duration-500 ease-in-out rounded-full shadow-lg cursor-pointer"
        >
          <div tw="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mt-4 mb-5 text-black bg-white rounded-full shadow-xl hover:bg-white hover:text-black focus:shadow-none focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
              <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
              <line x1="16" y1="21" x2="16" y2="19" />
              <line x1="19" y1="16" x2="21" y2="16" />
              <line x1="3" y1="8" x2="5" y2="8" />
              <line x1="8" y1="3" x2="8" y2="5" />
            </svg>
          </div>
        </Action>
      )}
    </article>
  )
}

export default Project
