import React from 'react'
import {HeaderTel, Headlist} from '../HeaderNavbar/HeaderNavbar'
import classCss from '../Header.module.css'
import { BasFav } from '../HeaderLogo/HeaderLogo'

const HeaderMenu = () => {
    return (
        <div className={classCss.HeaderMenu}>
            <h1>Меню</h1>
            <div className={classCss.HeaderMenuBody}>
                <div>
                    <Headlist/>
                    <BasFav/>
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