import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useSearchSort from "../../../hooks/useSearchSort";
import GetServ from "../../API/GetServ";
import { Busket, Heart, Search } from "../../Icons/Icons";
import SignIn from "../../SignIn/SignIn";
import classCss from '../Header.module.css';


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
export const Headlist = ({toggleVisi}) => {

    return(
    <ul className={classCss.HeaderList}>
        <li onClick={toggleVisi}>
            <Link to='/about-us'>O нас</Link>
        </li>
        <li onClick={toggleVisi}>
            <Link to='/collection'>Коллекция</Link>
        </li>
        <li onClick={toggleVisi}>
            <Link to='news'>Новости</Link>
        </li>
    </ul>)
}

export const HeaderTel = () => {

    const [phoneNumber, setPhoneNumber] = useState();

    const getPhoneNumber = async () => {
        const response = await GetServ.getPhoneNumber();
        setPhoneNumber(response.data)
    }

    useEffect(() => {
        getPhoneNumber();
    }, [])

    return(
        <div className={classCss.HeaderTel}>
            <span>
                Тел : 
                {
                    !phoneNumber
                    ?
                    <h1>Phone number not found</h1>
                    :
                    phoneNumber.map(obj => 
                        <a href={obj.url} key={obj.txt}>{obj.txt}</a>
                    )
                }
            </span>
        </div>        
    )
}
