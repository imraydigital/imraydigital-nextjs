import React from 'react'
//CSS
import styles from './Button.module.css'

const Button = ({text, style}) => {
  return (
    <button className={`${styles.btn} ${style === 'primary' ? styles.btn__primary : style === 'alt' ? styles.btn__alt : null}`}>{text}</button>
  )
}

export default Button