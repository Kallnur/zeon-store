import React, { useEffect, useState } from 'react'
import {HeaderTel, Headlist} from '../HeaderNavbar/HeaderNavbar'
import classCss from '../Header.module.css'
import { BasFav } from '../HeaderLogo/HeaderLogo'
import { Close } from '../../Icons/Icons'
import FloatLinks from '../../UI/FloatBlock/FloatLinks/FloatLinks'
import GetServ from '../../API/GetServ'

const HeaderMenu = ({visi, modalVisi, toggleVisi, setModalVisi}) => {
    const [floatIn, setFloatIn] = useState([])

    const rootClass = [classCss.HeaderMenu];

    if(visi) rootClass.push(classCss.HeaderMenuActive)

    useEffect(() => {
        const getLinks = async () => {
            const response = await GetServ.getFloatLinks();
            setFloatIn(response.data)
        };
        getLinks()
    }, [])

    return (
        <div className={rootClass.join(' ')}>
            <div className={classCss.HeaderMenuClose} onClick={toggleVisi}>
                <Close/>
            </div>
            <h1>Меню</h1>
            <div className={classCss.HeaderMenuBody}>
                <div>
                    <Headlist toggleVisi={toggleVisi}/>
                    <BasFav toggleVisi={toggleVisi}/>
                </div>
                <div>
                    <p>Свяжитсь с нами:</p>
                    <HeaderTel/>
                    <div className={classCss.FloatLink}>
                        <p>Обратная связь:</p>
                    {
                        !floatIn.length 
                        ?
                        <h1>Icons not found</h1>
                        :
                        floatIn.map(obj => 
                            <FloatLinks key={obj.url} info={obj} setVisi={setModalVisi}/>
                        )
                    }                        
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default HeaderMenu