import React, { useEffect, useState } from 'react'
import classCss from '../ProductPage.module.css'
import { Busket, Heart, WhiteHeart } from '../../../components/Icons/Icons'
import useToggleFavorite from '../../../hooks/useToggleFavorite';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkColor } from '../../../utils/allFunc';
import { addToBusket } from '../../../store/basket';
import {productUpdateColor} from '../../../store/product'

const ProductBtns = ({info, visi, setVisi}) => {

    const dispatch = useDispatch()
    const basket = useSelector(state => state.basket.basket)
    const { toggleFavorite } = useToggleFavorite({info, setVisi})
    const [toggleButtons, setToggleButtons] = useState(false)
    const [activeColor, setActiveColor] = useState([]);
    console.log(activeColor)
    
    // console.log(product)
    const newActiveColor = () => setActiveColor(info.colors.filter(color => color.available === false))

    const toggleBasket = () => {
        console.log(activeColor, info.colors)
        if(activeColor.length){
            if(!checkColor(basket, activeColor, info)){
                dispatch(addToBusket(info))
                setToggleButtons(false)
            }else {
                setToggleButtons(false)
            }            
        }
    }

    const checkAvtiveColor = () => {
        if(!activeColor.length){
            const newColors = info.colors.map((color, i) => {
                if(i === 0) color = {...color, available: false}
                else color = {...color, available: true};
                return color;
            })
            dispatch(productUpdateColor(newColors))
        }
    }

    const watchColor = () => {
        if(activeColor.length){
            if(!checkColor(basket, activeColor, info)) setToggleButtons(true)
            else setToggleButtons(false)
            console.log(!checkColor(basket, activeColor));            
        }
    }

    useEffect(() => { 
        newActiveColor()
        // watchColor()
        checkAvtiveColor() 
    }, [])
    useEffect(() => { newActiveColor() }, [info.colors])

    useEffect(() => { 
        watchColor()
        checkAvtiveColor() 
    },[activeColor])

  return (
    <div className={classCss.ProductBtns}>
        {toggleButtons
            ?
            <button onClick={() => {
                toggleBasket()
            }}>
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
  )
}

export default ProductBtns