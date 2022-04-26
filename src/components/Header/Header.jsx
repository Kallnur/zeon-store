import React from 'react';
import classCss from './Header.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import PagePath from '../PagePath/PagePath';

const Header = () => {

  return (
    <header className={classCss.Header}>
      <div className="container">
        <div className={classCss.HeaderBody}>
          <div className={classCss.HeaderDesk}>
            <HeaderNavbar/>
            <HeaderLogo/>
          </div>
          <div className={classCss.HeaderMobile}>
            <HeaderMenu/>
            <HeaderMobile/>
          </div>
        </div>
        <PagePath/>
      </div>
    </header>
  )
}

export default Header