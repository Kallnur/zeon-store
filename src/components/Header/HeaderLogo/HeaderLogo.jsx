import React, { useEffect, useState } from 'react'
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
export const SearchBtn = ({search, setSearch, value, setVisi}) => {
    const checkValue = (e) => {
        // setVisi(false);
        if(value.length < 3) e.preventDefault()
            else setSearch('');
    }
    return(
        <Link to={`/res-search/${search}`} onClick={checkValue}>
            <Search />
        </Link>
    )
}

export const BasFav = ({toggleVisi}) => {
    const favorite = useSelector(state => state.favorite.favorite)
    const basket   = useSelector(state => state.basket.basket)
    const activeClass = []
    favorite.length ? activeClass.push(classCss.BasFavActive) : activeClass.pop()
    const activeC = []
    basket.length ? activeC.push(classCss.BasFavActive) : activeC.pop()

    return(
        toggleVisi
        ?
        <div className={classCss.HeaderBasFav}>
           <Link onClick={toggleVisi} to="/favorites"><span className={activeClass}><Heart/></span> Избранное</Link>
           <Link onClick={toggleVisi} to="/basket"><span className={activeC}><Busket/></span> Корзина</Link>
        </div>
        :
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
    const tgle = () => setVisi(false);

    return (
        <div className={classCss.HeaderLogo}>
                <Logo theme='def'/>
            <div className={classCss.HeaderInputBlock}>
                <SearchInput 
                    setVisi={setVisi} 
                    search={search}
                    setSearch={setSearch}
                />
                <SearchBtn setVisi={setVisi} search={search} setSearch={setSearch} value={search}/>
                <SortArrWindow visi={visi} setVisi={setVisi} tgle={tgle} sortedProduct={sortedProduct} setSearch={setSearch}/>
            </div>
            <BasFav/>
        </div>
    )
}

export default HeaderLogo