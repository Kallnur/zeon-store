import React from 'react'
import Logo from '../../Logo/Logo'
import { SearchBtn } from '../HeaderLogo/HeaderLogo'
import classCss from '../Header.module.css'

const HeaderMobile = () => {
  return (
    <div className={classCss.HeaderMobile}>
        <h1>bb</h1>
        <Logo theme='M'/>
        <SearchBtn/>
    </div>
  )
}

export default HeaderMobile