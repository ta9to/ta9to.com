import 'twin.macro'
import React from 'react'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import components from './'

interface Props {
  id?: string
  title?: string
  subsections?: SubsectionType[]
}

const Section: React.FC<Props> = ({ id, title, subsections }) => {
  return (
    <section id={id} tw="flex flex-wrap py-8 md:flex-nowrap">
      <div tw="md:flex-grow">
        {title && <h2 tw="my-8 text-3xl font-light leading-none tracking-tighter lowercase text-shadow-xl md:text-6xl">{title}</h2>}
        {(subsections ?? []).map((subsectionProps, index) => {
          const componentName = upperFirst(camelCase(subsectionProps.type))
          const Component = components[componentName]

          return <Component key={index} {...subsectionProps} />
        })}
      </div>
    </section>
  )
}

export default Section
