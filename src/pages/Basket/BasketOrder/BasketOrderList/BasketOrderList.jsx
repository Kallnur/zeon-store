import React from 'react'
import classCss from '../BasketOrder.module.css'

const BasketOrderList = () => {
  return (
    <ul className={classCss.BasketOrderList}>
        <li className={classCss.BasketOrderItem}>
          <span>Количество линеек:</span>
          <span></span>
        </li>
        <li className={classCss.BasketOrderItem}>
          <span>Количество товаров:</span>
          <span></span>
        </li>
        <li className={classCss.BasketOrderItem}>
          <span>Стоимость:</span>
          <span></span>
        </li>
        <li className={classCss.BasketOrderItem}>
          <span>Скидка:</span>
          <span></span>
        </li>
    </ul>
  )
}

export default BasketOrderList