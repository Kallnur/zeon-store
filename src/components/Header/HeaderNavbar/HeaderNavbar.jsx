import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../../..'
import UserBlock from '../../UI/UserBlock/UserBlock'
import classCss from '../Header.module.css'
import { HeaderTel, Headlist } from '../HeaderComponents/HeaderComponents'


const HeaderNavbar = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);

  return (
    <nav className={classCss.HeaderNavbar}>
        <Headlist/>
        <div className={classCss.HeaderTelAndUser}>
            <HeaderTel/>
            {user
            ?
            <UserBlock/>
            :
            <></>
            }
        </div>
    </nav>
  )
}

export default HeaderNavbar