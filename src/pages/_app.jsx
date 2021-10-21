import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import Layout from '../components/layout'
import '@styles/nprogress.css'
import '@styles/main.scss'

Router.events.on('routeChangeStart', NProgress.start)
Router.events.on('routeChangeError', NProgress.done)
Router.events.on('routeChangeComplete', NProgress.done)

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
