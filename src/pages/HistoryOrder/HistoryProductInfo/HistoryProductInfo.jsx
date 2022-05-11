import React from 'react'
import classCss from '../HistoryOrder.module.css'

const HistoryProductInfo = ({info, title, objKeys}) => {
  return (
    <ul className={classCss.ProductInfoList}>
        <li className={classCss.ProductInfoItem}>
            <b>{title}</b>
        </li>
        {info.products.map((info, i) => {
            return(
                <li key={i * Math.random()} className={classCss.ProductInfoItem}>
                    {console.log(info[objKeys])}
                    <span>{info[objKeys]}</span>
                </li>
            )
        })}
    </ul>
  )
}

export default HistoryProductInfo