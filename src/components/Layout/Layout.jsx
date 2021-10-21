import Head from 'next/head'
import Nav from '../Nav'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Transit Tracker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Transit Tracker" key="title" />
      </Head>
      <div className={styles.container}>
        <div className={styles['container__main']}>
          <Nav />
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
