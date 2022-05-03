import React, {useEffect, useState} from 'react'
import useToggleFavorite from '../../../hooks/useToggleFavorite';
import { asyncProductHeart } from '../../../utils/allFunc';
import classCss from '../ProductPage.module.css'
import ProductBtns from '../ProductBtns/ProductBtns'

const ProductPageInfo = ({info}) => {

    const [visi, setVisi] = useState(0);
    const { favorites } = useToggleFavorite({info, setVisi})

    useEffect(() => { asyncProductHeart(favorites, info, setVisi) },[])
    useEffect(() => { asyncProductHeart(favorites, info, setVisi) },[info, favorites])

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
        <ProductBtns info={info} visi={visi} setVisi={setVisi}/>
    </>
  )
}

export default ProductPageInfo