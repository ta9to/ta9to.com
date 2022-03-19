import 'twin.macro'
import React from 'react'

interface Props {
  name: string
  role: string
  description?: string
}

const Intro: React.FC<Props> = ({name, role, description}) => {
  const paragraphs = description.split('\n') ?? []

  return (
    <div tw="flex flex-wrap py-8 md:flex-nowrap">
      <div tw="flex flex-wrap md:flex-grow">
        <div>
          <h1 tw="mx-auto mb-4 text-4xl font-black leading-none tracking-tighter text-black text-shadow-xl md:text-8xl">
            {name}
          </h1>
          <h2 tw="mx-auto text-4xl font-light leading-none tracking-tighter text-black text-shadow-xl md:text-4xl ">
            {role}
          </h2>
          <hr tw="mt-6 border-t border-black" />
        </div>
        {paragraphs.map((p, index) =>
          <p key={index} tw="py-4 text-2xl font-light tracking-tighter text-black text-shadow-xl md:text-2xl 2xl:text-2xl">
            {p}
          </p>
        )}
      </div>
    </div>
  )
}

export default Intro
