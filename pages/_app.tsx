import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { AuthCheck } from '@/components/AuthCheck'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script async src='/lnpay.min.js'></script>
        <script
          async
          src='https://kit.fontawesome.com/090ca49637.js'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <AuthCheck />
      <Navbar />
      <Header />
      <Component {...pageProps} />
      {/* <LCanvas /> */}
    </>
  )
}
export default MyApp

let LCanvas: any = null
if (process.env.NODE_ENV === 'production') {
  LCanvas = dynamic(() => import('../components/LCanvas'), {
    ssr: false,
  })
} else {
  LCanvas = require('../components/LCanvas').default
}
