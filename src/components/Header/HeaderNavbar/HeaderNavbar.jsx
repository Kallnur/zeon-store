import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GetServ from '../../API/GetServ'
import classCss from '../Header.module.css'

export const Headlist = () => {

    return(
    <ul className={classCss.HeaderList}>
        <li>
            <Link to='/about-us'>O нас</Link>
        </li>
        <li>
            <Link to='/collection'>Коллекция</Link>
        </li>
        <li>
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

const HeaderNavbar = () => {
  return (
    <nav className={classCss.HeaderNavbar}>
        <Headlist/>
        <HeaderTel/>
    </nav>
  )
}

export default HeaderNavbar