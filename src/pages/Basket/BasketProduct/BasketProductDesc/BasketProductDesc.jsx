import React from 'react'
import NewPrice from '../../../../components/NewPrice/NewPrice'
import classCss from '../BasketProduct.module.css'

const BasketProductDesc = ({info}) => {
  return (
    <div className={classCss.ProductDesc}>
        <strong> {info.collection} </strong>
        <div>
          <span className={classCss.ProductSize}> Размер: {info.size} </span>
          <span className={classCss.ProductColor}>Color</span>          
        </div>
        <NewPrice perc={info.perc} price={info.price} currency={info.currency}/>
        <div className={classCss.ProductCol}>
            <span>-</span>
            <span>1</span>
            <span>+</span>
        </div>
    </div>
  )
}

export default BasketProductDesc