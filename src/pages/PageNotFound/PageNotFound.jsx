import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <h1 style={{margin: '0 auto'}}>Sorry! Page not found!!! Please back to <Link to='/'>Home</Link></h1>
  )
}

export default PageNotFound