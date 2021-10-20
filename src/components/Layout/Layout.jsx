import styles from './Layout.module.scss'
import Nav from '../Nav'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles['container__main']}>
        <Nav />
        {children}
      </div>
    </div>
  )
}

export default Layout
