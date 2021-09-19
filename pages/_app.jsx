import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../theme'
import Head from 'next/head'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}
