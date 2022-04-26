import React from 'react'
import classCss from './ButtonGet.module.css'

const ButtonGet = ({children, ...props}) => {
  return (
    <button {...props} className={classCss.ButtonGet}>
        {children}
    </button>
  )
}

export default ButtonGet