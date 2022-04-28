import React from 'react'
import classCss from './ButtonPost.module.css'

const ButtonPost = ({children, ...props}) => {
  return (
    <button {...props} className={classCss.ButtonPost}>
      <span>{children}</span>
    </button>
  )
}

export default ButtonPost