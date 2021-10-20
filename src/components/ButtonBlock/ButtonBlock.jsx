import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './ButtonBlock.module.scss'

const cx = classNames.bind(styles)

const ButtonBlock = ({ children, className, justify }) => (
  <div
    className={cx(
      'container',
      {
        'container--justify-center': justify === 'center',
        'container--justify-left': justify === 'left',
        'container--justify-right': justify === 'right',
        'container--justify-space-between': justify === 'spread',
      },
      className
    )}
  >
    {children}
  </div>
)

ButtonBlock.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  justify: PropTypes.string,
}

ButtonBlock.defaultProps = {
  className: '',
  justify: 'left',
}

export default ButtonBlock
