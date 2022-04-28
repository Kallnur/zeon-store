import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Busket, Heart, WhiteHeart } from '../../../components/Icons/Icons'
import useToggleFavorite from '../../../hooks/useToggleFavorite';
import { addToBusket, removeToBasket } from '../../../store/basket';
import { asyncProductHeart, checkArr } from '../../../utils/allFunc';
import classCss from '../ProductPage.module.css'

const ProductPageInfo = ({info}) => {

    const [visi, setVisi] = useState(0);
    const { favorites, toggleFavorite } = useToggleFavorite({info, setVisi})
    const dispatch = useDispatch()

    useEffect(() => { asyncProductHeart(favorites, info, setVisi) },[])
    useEffect(() => { asyncProductHeart(favorites, info, setVisi) },[info, favorites])

    const basket = useSelector(state => state.basket.basket)

    const toggleBasket = () => {
        if(!checkArr(basket, info)) dispatch(addToBusket(info))
            else dispatch(removeToBasket(info)) 
        
        console.log(basket)
    }

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
            {!checkArr(basket, info)
                ?
                <button onClick={toggleBasket}>
                    <Busket css={classCss.ProductPageBusket}/> Добавить в корзину
                </button>
                :
                <Link to={'/basket'}>Перейти в корзину</Link>
            }
            <button
                onClick={toggleFavorite}
            >
                <Heart css={classCss.ProductPageHeart}/>
                <WhiteHeart css={classCss.ProductActiveHeart} visi={visi} />
            </button>
        </div>
    </>
  )
}

export default ProductPageInfo