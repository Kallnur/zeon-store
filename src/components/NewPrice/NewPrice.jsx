import React, { useState } from 'react'
import { newPrice, part } from '../../utils/allFunc'

const NewPrice = ({perc, price, currency, amount}) => {

  let amountPrice = price;
  if(amount) amountPrice = amountPrice * amount;

  return (
    <>
    {
        !perc 
        ?
        <span className="product-price">
          {
            !amount 
            ?
            <>{part(price)} {currency}</>
            :
            <>{part(amountPrice)} {currency}</>
          }
        </span>
        :
          !amount
          ?
          <div className="product-new-price">
              <span className="product-price">{part(newPrice(price, perc))}</span>
              <span className="product-old-price">{part(price)} {currency}</span>
          </div>
          :
          <div className="product-new-price">
              <span className="product-price">{part(newPrice(amountPrice, perc))}</span>
              <span className="product-old-price">{part(amountPrice)} {currency}</span>
          </div>
    }
    </>
  )
}

export default NewPrice