import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {Busket, Heart, Search} from '../../Icons/Icons';
import { useSelector } from 'react-redux';
import Logo from '../../Logo/Logo';
import classCss from '../Header.module.css'
import SortArrWindow from '../../SortArrWindow/SortArrWindow';
import useSearchSort from '../../../hooks/useSearchSort';

export const SearchInput = ({setVisi, search, setSearch}) => {
    const sortSearch = useSearchSort();
    return(
        <input
            onChange={e => {
                setSearch(e.target.value)
                sortSearch(e.target.value)
                setVisi(true)
            }
            }
            onClick={e => e.stopPropagation() }
            value={search}
            type="text" 
            placeholder='Поиск'
        />
    )
}
export const SearchBtn = ({search, setSearch}) => {
    return(
        <Link to={`/res-search/${search}`} onClick={() => setSearch('')}>
            <Search />
        </Link>
    )
}

export const BasFav = () => {
    const favorite = useSelector(state => state.favorite.favorite)
    const basket   = useSelector(state => state.basket.basket)
    const activeClass = []
    favorite.length ? activeClass.push(classCss.BasFavActive) : activeClass.pop()
    const activeC = []
    basket.length ? activeC.push(classCss.BasFavActive) : activeC.pop()

    return(
        <div className={classCss.HeaderBasFav}>
           <Link to="/favorites"><span className={activeClass}><Heart/></span> Избранное</Link>
           <Link to="/basket"><span className={activeC}><Busket/></span> Корзина</Link>
        </div>
    )
}

const HeaderLogo = () => {
    const [search, setSearch] = useState('');

    const sortedProduct = useSelector(state => state.searchSort.searchSort)
    const [visi, setVisi] = useState(false)
    document.body.onclick = () => setVisi(false)
    return (
        <div className={classCss.HeaderLogo}>
                <Logo theme='def'/>
            <div className={classCss.HeaderInputBlock}>
                <SearchInput 
                    setVisi={setVisi} 
                    search={search}
                    setSearch={setSearch}
                />
                <SearchBtn search={search} setSearch={setSearch}/>
                <SortArrWindow visi={visi} sortedProduct={sortedProduct} setSearch={setSearch}/>
            </div>
            <BasFav/>
        </div>
    )
}

export default HeaderLogo