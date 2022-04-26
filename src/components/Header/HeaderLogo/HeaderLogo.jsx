import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {Busket, Heart, Search} from '../../Icons/Icons';
import { useSelector } from 'react-redux';
import Logo from '../../Logo/Logo';
import classCss from '../Header.module.css'

export const SearchInput = () => {
    const [search, setSearch] = useState('');
    return(
        <input
            onChange={e => setSearch(e.target.value)}
            value={search}
            type="text" 
            placeholder='Поиск'
        />
    )
}
export const SearchBtn = () => {
    return(
        <button><Search /></button>
    )
}

export const BasFav = () => {
    const favorite = useSelector(state => state.favorite.favorite)
    const activeClass = []
    favorite.length ? activeClass.push(classCss.BasFavActive) : activeClass.pop()

    return(
        <div className={classCss.HeaderBasFav}>
           <Link to="/favorites"><span className={activeClass}><Heart/></span> Избранное</Link>
           <Link to="/basket"><span><Busket/></span> Корзина</Link>
        </div>
    )
}

const HeaderLogo = () => {
    return (
        <div className={classCss.HeaderLogo}>
                <Logo theme='def'/>
            <div className={classCss.HeaderInputBlock}>
                <SearchInput/>
                <SearchBtn/>
            </div>
            <BasFav/>
        </div>
    )
}

export default HeaderLogo