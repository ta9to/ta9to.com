import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}

		background: linear-gradient(115.58deg, #00FC19 0%, #1700A4 100.22%),
			radial-gradient(92.72% 100% at 50% 0%, #EBFFCB 0%, #651200 100%),
			radial-gradient(92.72% 100% at 50% 0%, #FAFF00 0%, #820000 100%),
			radial-gradient(109.21% 213.32% at 100% 0%, #FF4D00 0%, #00C2FF 100%),
			linear-gradient(127.43deg, #D50000 0%, #7856FF 100%);
			background-blend-mode: lighten, overlay, lighten, screen, normal;
  }
`

const GlobalStyles = (): JSX.Element => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
