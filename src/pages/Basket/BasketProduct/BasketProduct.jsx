import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Close } from '../../../components/Icons/Icons'
import { removeToBasket } from '../../../store/basket'
import classCss from './BasketProduct.module.css'
import BasketProductDesc from './BasketProductDesc/BasketProductDesc'

const BasketProduct = ({ info }) => {

  const dispatch = useDispatch()

  const removeProduct = () => {
    dispatch(removeToBasket(info))
  }

  return (
    <div className={classCss.ProductBody}>
        <div className={classCss.ProductInfo}>
            <Link to={`/product/${info.id}`} className={classCss.ProductImg}>
                <img src={info.url[0]} alt="Product" />
            </Link>
            <BasketProductDesc info={info} />
        </div>
        <div className={classCss.ProductClose} onClick={() => removeProduct()}>
            <Close />
        </div>
    </div>
  )
}

export default BasketProduct