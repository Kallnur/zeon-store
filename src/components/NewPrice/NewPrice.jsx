import React from 'react'
import { newPrice, part } from '../../utils/allFunc'

const NewPrice = ({perc, price, currency}) => {
  return (
    <>
    {
        !perc 
        ?
        <span className="product-price">{part(price)} {currency}</span>
        :
        <div className="product-new-price">
            <span className="product-price">{part(newPrice(price, perc))}</span>
            <span className="product-old-price">{part(price)} {currency}</span>
        </div>
    }
    </>
  )
}

export default NewPrice