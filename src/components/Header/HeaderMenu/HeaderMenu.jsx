import React, { useState } from 'react'
import {HeaderTel, Headlist} from '../HeaderNavbar/HeaderNavbar'
import classCss from '../Header.module.css'
import { BasFav } from '../HeaderLogo/HeaderLogo'
import { Close } from '../../Icons/Icons'

const HeaderMenu = ({visi, setVisi, toggleVisi}) => {

    const rootClass = [classCss.HeaderMenu];

    if(visi) rootClass.push(classCss.HeaderMenuActive)

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
                </div>  
            </div>
        </div>
    )
}

export default HeaderMenu