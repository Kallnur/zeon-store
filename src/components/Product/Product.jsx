import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Favorite, RedHeart } from "../Icons/Icons"
import ProductDesc from "./ProductDesc/ProductDesc"
import ProductSlider from './ProductSlider/ProductSlider'
import { asyncProductHeart } from "../../utils/allFunc"
import useToggleFavorite from "../../hooks/useToggleFavorite"

const Product = ({ info }) => {

  const [visi, setVisi] = useState(0);
  const { favorites, toggleFavorite } = useToggleFavorite({info, setVisi})

  useEffect(() => { asyncProductHeart(favorites, info, setVisi) }, [] )
  useEffect(() => { asyncProductHeart(favorites, info, setVisi) }, [favorites] )
  
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