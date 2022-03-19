import 'twin.macro'
import React from 'react'
import { Action } from '.'
import { useConfig } from '../hooks'

const Menu: React.FC = () => {
	const { menu } = useConfig()
  const { links } = menu

  return (
    <div tw="col-start-1 row-span-2 lg:col-span-1 col-span-full lg:h-full lg:rounded-none border-blueGray-900 lg:border-0">
      <div tw="flex-col hidden w-full lg:flex lg:flex-row md:min-h-screen md:hidden ">
        <div tw="flex flex-col flex-shrink-0 w-full text-gray-700 md:w-full ">
          <nav tw="flex-grow px-4 pb-4 text-left md:block md:pb-0 md:overflow-y-auto">
            {links.map((action, index) => (
              <Action
                key={index}
                tw="block py-2 mb-6 text-base font-medium text-left text-black transition duration-500 ease-in-out transform bg-transparent rounded-lg lg:text-xl hover:text-white focus:outline-none focus:shadow-none"
                action={action}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Menu
