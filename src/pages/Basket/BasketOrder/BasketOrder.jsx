import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { allPrice, checkPerc } from '../../../utils/calcBasket'
import classCss from './BasketOrder.module.css'
import BasketOrderList from './BasketOrderList/BasketOrderList'

const BasketOrder = ({products, mVisi, setMVisi}) => {

  // let orderInfo = {
  //   countLine: '',
  //   countProduct: '',
  //   allPrice: '',
  //   discount:  '',
  //   endPrice: ''
  // }

  const [visi, setVisi] = useState(false)
  let visiBtn  = 'Информация о заказе';
  let classBtn = [classCss.BasketOrder];

  if(visi){
    classBtn.push(classCss.BasketOrderMobAct)
    visiBtn  = 'Скрыть';
  }

  const toggleVisi = () => visi ? setVisi(!visi) : setVisi(!visi)

  return (
    <div className={classBtn.join(' ')}>
        <h3 className={classCss.BasketOrderTitle}>Сумма заказа</h3>
        <BasketOrderList products={products}/>
        <div className={classCss.BasketOrderHr}></div>
        <div className={classCss.BasketOrderSumm}>
          <span>Итого к оплате:</span>
          <span>{
            !checkPerc(products)
            ?
            allPrice(products)
            :
            allPrice(products) - checkPerc(products)
          }  рублей</span>
        </div>
        <button onClick={toggleVisi} className={classCss.BasketOrderVisiBtn} >{visiBtn}</button>
        <button onClick={() => {setMVisi(true)}} className={classCss.BasketOrderBtn}>
          Оформить заказ
        </button>
    </div>
  )
}

export default BasketOrder