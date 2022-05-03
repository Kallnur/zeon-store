import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <h1 style={{margin: '0 auto'}}>Страница не найдена!.. Перейдите на  
      <Link to='/' style={{color: '#006BED'}} > Главную</Link>
    </h1>
  )
}

export default PageNotFound