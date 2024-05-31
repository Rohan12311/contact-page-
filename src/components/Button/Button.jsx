import React from 'react'
import styles from './Button.module.css'

function Button({isOutline,icon ,text,...rest}) {  // 1

  // const {isOutline,icon ,text} = props;  deStructuring in props       2

  return (
    <button {...rest} 
    
    className={isOutline? styles.outline_btn : styles.primary_btn}>
        {icon}
      {text}
    </button>
  )
}

export default Button;
