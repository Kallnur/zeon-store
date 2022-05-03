import React from 'react'
import { allPrice, amountLines, amountProduct, checkPerc } from '../../../../utils/calcBasket'
import classCss from '../BasketOrder.module.css'

const BasketOrderList = ({products}) => {

  return (
    <ul className={classCss.BasketOrderList}>
      {
        !products.length
        ?
        <h1>Products not found</h1>
        :
        <>
        <li className={classCss.BasketOrderItem}>
          <span>Количество линеек:</span>
          <span>{amountLines(products)}  шт</span>
        </li>
        <li className={classCss.BasketOrderItem}>
          <span>Количество товаров:</span>
          <span>{amountProduct(products)}  шт</span>
        </li>
        <li className={classCss.BasketOrderItem}>
          <span>Стоимость:</span>
          <span>{allPrice(products)}  рублей</span>
        </li>
        {
          !checkPerc(products)
          ?
          null
          :
          <li className={classCss.BasketOrderItem}>
            <span>Скидка:</span>
            <span>{checkPerc(products)}  рублей</span>
          </li>
        }
        </>
      }
    </ul>
  )
}

export default BasketOrderList