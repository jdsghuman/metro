import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

const Button = ({ children, type, className, primary, accent, disabled, onClick }) => (
  <button
    type={type}
    className={cx('button', className, {
      'button--primary': primary,
      'button--accent': accent,
      'button--disabled': disabled,
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.any,
  primary: PropTypes.bool,
  accent: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultPropTypes = {
  type: 'button',
}

export default Button
