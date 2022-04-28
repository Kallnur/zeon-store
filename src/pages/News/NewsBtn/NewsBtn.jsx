import React from 'react'
import classCss from '../News.module.css'

const NewsBtn = ({ children, ...props}) => {
  return (
    <button {...props} className={classCss.NewsBtn}>
        {children}
    </button>
  )
}

export default NewsBtn