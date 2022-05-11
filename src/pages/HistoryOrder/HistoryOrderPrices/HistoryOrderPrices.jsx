import React from 'react'
import classCss from '../HistoryOrder.module.css'

const HistoryOrderPrices = ({info}) => {

    console.log(info);

  return (
    <ul className={classCss.OrderList}>
        <li className={classCss.OrderItem}>
            <span>Количество линеек:</span>
            <span>{info.countLine}  шт</span>
        </li>
        <li className={classCss.OrderItem}>
            <span>Количество товаров:</span>
            <span>{info.countProduct}  шт</span>
        </li>
        <li className={classCss.OrderItem}>
            <span>Стоимость:</span>
            <span>{info.allPrice}  рублей</span>
        </li>
        {
        !info.perc
        ?
        null
        :
        <li className={classCss.OrderItem}>
            <span>Скидка:</span>
            <span>{info.perc}  рублей</span>
        </li>
        }
    </ul>

  )
}

export default HistoryOrderPrices