import React from 'react'
import {AppProps} from 'next/app'
import GlobalStyles from '../components/GlobalStyles'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default App
