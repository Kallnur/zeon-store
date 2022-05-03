import React, { useState } from 'react';
import classCss from './Header.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { useSelector } from 'react-redux';

const Header = () => {

  const crumb = useSelector(state => state.breadcrumb.breadcrumb)
  const [visi, setVisi] = useState(false)
  const rootClass = [];
  const toggleVisi = () => setVisi(!visi)

  if(window.innerWidth <= 425){
    if(visi) {
      rootClass.push(classCss.DarkFon);
      // document.body.style.overflow = 'hidden';
    }else document.body.style.overflow = 'scrool';
  }

  return (
    <header className={classCss.Header}>
      <div className="container">
        <div className={classCss.HeaderBody}>
          <div className={classCss.HeaderDesk}>
            <HeaderNavbar/>
            <HeaderLogo/>
          </div>
          {
            window.innerWidth <= 425
            ?
            <div className={classCss.HeaderMobile}>
              <div className={rootClass}  onClick={toggleVisi}></div>
              <HeaderMenu visi={visi} setVisi={setVisi} toggleVisi={toggleVisi}/>
              <HeaderMobile visi={visi} setVisi={setVisi} toggleVisi={toggleVisi}/>
            </div>
            :
            <></>
          }
        </div>
        <Breadcrumb crumb={crumb}/>
      </div>
    </header>
  )
}

export default Header