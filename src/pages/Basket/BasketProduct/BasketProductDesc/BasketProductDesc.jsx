import React, { useState } from 'react'
import NewPrice from '../../../../components/NewPrice/NewPrice'
import classCss from '../BasketProduct.module.css'
import BasketProductBtns from '../BasketProductBtns/BasketProductBtns';

const BasketProductDesc = ({ info }) => {

  const [amount, setAmount] = useState(info.basket)
  const color = info.color;

  
  return (
    <div className={classCss.ProductDesc}>
        <strong> {info.collection} </strong>
        <div>
          <span className={classCss.ProductSize}> Размер: {info.size} </span>
          <span className={classCss.ProductColor}>
            Цвет: 
            <span className={classCss.ProductColorBord}>
              {
                !color
                ?
                <span>Color not found</span>
                :
                <span style={{background: color.rgb}}></span>
              }
            </span>
          </span>
        </div>
        <NewPrice perc={info.perc} price={info.price} currency={info.currency} amount={amount}/>
        <BasketProductBtns info={info} amount={amount} setAmount={setAmount} />
    </div>
  )
}

export default BasketProductDesc