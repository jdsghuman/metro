import Link from 'next/link'
import { FaTrain } from 'react-icons/fa'
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__links}>
        <li>
          <Link href="/">
            <a>
              <span className={styles.icon}>
                <FaTrain />
              </span>{' '}
              Metro Tracker
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
