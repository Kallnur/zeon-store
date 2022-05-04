import React, { useEffect, useState } from 'react'
import Logo from '../../Logo/Logo'
import { SearchBtn, SearchInput } from '../HeaderLogo/HeaderLogo'
import classCss from '../Header.module.css'
import mobClassCss from './HeaderMobile.module.css'
import SortArrWindow from '../../SortArrWindow/SortArrWindow'
import { useSelector } from 'react-redux'
import { Search } from '../../Icons/Icons'

const HeaderMobile = ({toggleVisi}) => {

  const [search, setSearch] = useState('');
  const [btnVisi, setBtnVisi] = useState(false);

  const sortedProduct = useSelector(state => state.searchSort.searchSort);
  const [visiMob, setVisiMob] = useState(false);
  const toggleBtn = (e) => {
    e.stopPropagation();
    setBtnVisi(!btnVisi);
  };
  const tgle = () => {setVisiMob(false); setBtnVisi(false)};

  const rootClass = [mobClassCss.HeaderInputBlock];

  if(btnVisi) rootClass.push(mobClassCss.HeaderInputBlockActive)

  // useEffect(() => {
  //   document.addEventListener('click', tgle);
  //   return document.removeEventListener('click', tgle)
  // }, [])

  return (
    <div className={classCss.HeaderMobile}>
      <div className={mobClassCss.HeaderMobileBurger}  onClick={toggleVisi}>
        <span className={mobClassCss.HeaderMobileBtn}></span>
      </div>
      <Logo theme='M'/>
      <div onClick={toggleBtn}>
        <Search/>
      </div>
      <div className={rootClass.join(' ')}>
        <SearchInput 
          setVisi={setVisiMob} 
          search={search}
          setSearch={setSearch}
        />
        <SearchBtn search={search} setSearch={setSearch} value={search}/>
        <SortArrWindow visi={visiMob} sortedProduct={sortedProduct} setVisi={setVisiMob} setSearch={setSearch} tgle={tgle}/>
      </div>
      {
        !btnVisi
        ?
        <></>
        :
        <div className={mobClassCss.BtnDarkFon}></div>
      }
    </div>
  )
}

export default HeaderMobile