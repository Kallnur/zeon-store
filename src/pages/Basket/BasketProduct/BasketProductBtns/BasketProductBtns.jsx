import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { decBasketAmount, incBasketAmount } from '../../../../store/basket';
import classCss from '../BasketProduct.module.css'

const BasketProductBtns = ({info, amount, setAmount}) => {

    let incClass = '', decClass = '';
    const dispatch = useDispatch();

    const incAmount = () => {
        if(amount < 10) dispatch(incBasketAmount(info))
    };
    const decAmount = () => {
        if(amount > 1) dispatch(decBasketAmount(info))
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