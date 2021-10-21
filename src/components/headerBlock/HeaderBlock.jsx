import classNames from 'classnames/bind'
import styles from './HeaderBlock.module.scss'

const cx = classNames.bind(styles)

const HeaderBlock = ({ title, subtitle, className, children }) => (
  <header className={cx('header', className)}>
    <div className={styles.text}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
    {children}
  </header>
)

export default HeaderBlock
