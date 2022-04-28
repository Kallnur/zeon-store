import React from 'react'
import classCss from './BasketOrder.module.css'
import BasketOrderList from './BasketOrderList/BasketOrderList'

const BasketOrder = () => {
  return (
    <div className={classCss.BasketOrder}>
        <h3 className={classCss.BasketOrderTitle}>Сумма заказа</h3>
        <BasketOrderList />
        <div className={classCss.BasketOrderHr}></div>
        <div className={classCss.BasketOrderSumm}>
          <span>Итого к оплате:</span>
          <span></span>
        </div>
        <button className={classCss.BasketOrderBtn}>Оформить заказ</button>
    </div>
  )
}

export default BasketOrder