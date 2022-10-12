import React, {useEffect} from 'react'
import classnames from 'classnames'

import styles from './button.module.css';

const Button = (props) => {
  const { children, className } = props

  return (
    <button className={classnames(styles.button, className)}>{children}</button>
  )
}

export default Button