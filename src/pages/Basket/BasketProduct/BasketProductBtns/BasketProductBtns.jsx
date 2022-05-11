import React, { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { Context } from '../../../..';
import { decBasketAmount, incBasketAmount } from '../../../../store/reducers/basket';
import classCss from '../BasketProduct.module.css'

const BasketProductBtns = ({info, amount, setAmount}) => {

    let incClass = '', decClass = '';
    const dispatch = useDispatch();
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    let tempDoc = {productId: info.id, productColor: info.color.color};
    const fireBasketProduct = firestore.collection('users')
        .doc(user.uid).collection('basket').doc(JSON.stringify(tempDoc))

    const incAmount = async () => {
        if(amount < 10) {
            dispatch(incBasketAmount(info))
            // await fireBasketProduct.update({basket: amount})
        }
    };
    const decAmount = async () => {
        if(amount > 1) {
            dispatch(decBasketAmount(info))
            // await fireBasketProduct.update({basket: amount})
        }
    };

    // const incAmount = dispatch(incBasketAmount(info));
    // const decAmount = dispatch(decBasketAmount(info));

    if(amount < 2) decClass = classCss.ProductColDeactive
    else decClass = '';
    if(amount > 9) incClass = classCss.ProductColDeactive
    else incClass = '';

    return (
        <div className={classCss.ProductCol}>
            <span className={decClass}  onClick={decAmount}>-</span>
            <span>{amount}</span>
            <span className={incClass} onClick={incAmount}>+</span>
        </div>
    )
}

export default BasketProductBtns