import 'twin.macro'
import React from 'react'

const Logo: React.FC = () => (
  <div tw="text-lg font-semibold tracking-widest rounded-lg focus:outline-none">
    <div tw="inline-flex items-center">
      <div tw="w-2 h-2 p-2 mr-2 bg-blue-600 rounded-full"></div>
      <strong tw="text-lg font-bold tracking-tighter text-black transition duration-500 ease-in-out transform dark:text-white">
        wickedtemplates
      </strong>
    </div>
  </div>
)

export default Logo
