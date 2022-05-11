import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Context } from '../../..';
import { BasketLength } from '../../../pages/Basket/Basket';
import { FavoritesLength } from '../../../pages/Favorites/Favorites';
import UserAva from './UserAva/UserAva';
import classCss from './UserBlock.module.css'

const UserBlock = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);

    const [rootClass, setRootClass] = useState([classCss.UserBlock]);

    const toggleClass = () => {
        console.log(rootClass);
        if(rootClass.length === 1) setRootClass([...rootClass, classCss.UserBlockActive]);
            else setRootClass([classCss.UserBlock]);
    };

    // useEffect(() => {
    //     console.log(favProducts, basProducts);
    //     // favProducts();
    //     // basProducts();
    // }, [])

  return (
    <div className={rootClass.join(' ')}>
        <UserAva user={user} toggleClass={toggleClass}/>
        <div className={classCss.UserInfo}>
            <div>
                Имя: <span>{user.displayName}</span>
            </div>
            <div>
                Email: <span>{user.email}</span>
            </div>
            <div>
                Товары в избранном: <FavoritesLength/>
            </div>
            <div>
                Товары в корзине: <BasketLength/>
            </div>
            <div>
                <Link to={'/history'}>Мои заказы</Link>
            </div>
            <button onClick={() => auth.signOut()}>
                Выйти
            </button>
        </div>
    </div>
  )
}

export default UserBlock