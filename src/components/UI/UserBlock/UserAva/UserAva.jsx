import React, { useState } from 'react'
import useFirestore from '../../../../hooks/useFirestore';
import { fillBasket } from '../../../../store/reducers/basket';
import { fillFavorite } from '../../../../store/reducers/favorite';
import classCss from '../UserBlock.module.css'

const UserAva = ({user, toggleClass}) => {

    const {favProducts} = useFirestore('favorites', fillFavorite);
    const {basProducts} = useFirestore('basket', fillBasket);
  return (
    <div className={classCss.UserEmail} onClick={toggleClass}>
        <div className={classCss.UserIcon}>
            <img src={user.photoURL} alt="Icon" />
        </div>
    </div>
  )
}

export default UserAva