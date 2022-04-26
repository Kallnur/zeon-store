import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Favorite, RedHeart } from "../Icons/Icons"
import { useSelector, useDispatch } from "react-redux"
import ProductDesc from "./ProductDesc/ProductDesc"
import ProductSlider from './ProductSlider/ProductSlider'
import { addToFavorite, removeToFavorite } from "../../store/favorite"
import { checkArr } from "../../utils/allFunc"

const Product = ({ info }) => {

  const [visi, setVisi] = useState(0);
  const favorites = useSelector(state => state.favorite.favorite)
  const [product, setProduct] = useState(info)
  const dispatch = useDispatch()

  const toggleFavorite = () => {
    if( !product.favorite ){
      if(!checkArr(favorites, info)){
        dispatch(addToFavorite( info ));
        setProduct({...product, favorite: true})
        setVisi(1)
      }else {
        dispatch(removeToFavorite( info ));
        setVisi(0)
        setProduct({...product, favorite: false})
      }
    } else {
      dispatch(removeToFavorite( info ));
      setVisi(0)
      setProduct({...product, favorite: false})
    }
    console.log(product);
  }
  
  const asyncProductHeart = () => {
    if(checkArr(favorites, info)) setVisi(1)
      else setVisi(0)
  }

  useEffect(() => { asyncProductHeart() }, [] )
  useEffect(() => { asyncProductHeart() }, [favorites] )
  
  return (
    <div className="product-body">
      <div className="product-like" onClick={toggleFavorite}>
        <Favorite/> 
        <RedHeart visi={visi}/>
      </div>
      {
        !info
        ?
        <h1>Product not found</h1>
        :
        <Link to={`/product/${info.id}`} className="product-link">
          {
            !info.perc 
            ?
            null
            :
            <div className="product-perc"><span>{info.perc}%</span></div>
          }
          <ProductSlider urls={info.url}/>
          <ProductDesc info={info}/>
        </Link>
      }
    </div>
  )
}

export default Product