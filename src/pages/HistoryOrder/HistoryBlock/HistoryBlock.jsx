import React from 'react'
import classCss from '../HistoryOrder.module.css'
import HistoryProductInfo from '../HistoryProductInfo/HistoryProductInfo';
import HistoryOrderPrices from '../HistoryOrderPrices/HistoryOrderPrices';

const HistoryBlock = ({info, num}) => {

    console.log(info);

  return (
    <div className={classCss.HistoryBlock}>
        <h2>Заказ номер {num}</h2>
        <HistoryProductInfo info={info} title='Продукт' objKeys={'name'}/>
        <HistoryProductInfo info={info} title='Цвет продукта' objKeys={'color'}/>
        <HistoryProductInfo info={info} title='количество продукта' objKeys={'amount'}/>                                        {/* -_- */}
        <HistoryOrderPrices info={info}/>

        {/* {
            info.map((obj, i) => {
                return (
                    <>
                    <HistoryProductInfo key={i * Math.random()}info={obj.product} num={i} title='Продукт' objKeys={'name'}/>
                    <HistoryProductInfo key={i * Math.random()}info={obj.product} num={i} title='Цвет продукта' objKeys={'color'}/>
                    <HistoryProductInfo key={i * Math.random()}info={obj.product} num={i} title='количество продукта' objKeys={'amount'}/>
                    <HistoryOrderPrices info={obj.product}/>
                    </>
                )
            })
        } */}
        </div>
  )
}

export default HistoryBlock