import React from 'react'
import { Busket, Heart } from '../../../components/Icons/Icons'
import classCss from '../ProductPage.module.css'

const ProductPageInfo = ({info}) => {

  return (
    <>
        <div className={classCss.ProductInfo}>
            <h3>О товаре:</h3>
            <span>{info.desk}</span>        {/*-_- k*/}
        </div>
        <ul className={classCss.ProductDesc}>
            <li>
                <strong>Размерный ряд: </strong> <span>{info.size}</span>
            </li>
            <li>
                <strong>Состав ткани: </strong> <span>{info.material}</span>
            </li>
            <li>
                <strong>Количество в линейке: </strong> <span>{info.amaunt}</span>
            </li>
            <li>
                <strong>Материал:</strong> <span>{info.material}</span>
            </li>
        </ul>
        <div className={classCss.ProductBtns}>
            <button><Busket css={classCss.ProductPageBusket}/> Добавить в корзину</button>
            <button>
                <Heart css={classCss.ProductPageHeart}/>
            </button>
        </div>
    </>
  )
}

export default ProductPageInfo