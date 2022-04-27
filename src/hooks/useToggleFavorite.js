import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeToFavorite } from "../store/favorite";
import { checkArr } from "../utils/allFunc";

export default function useToggleFavorite(info, setVisi){
    const favorites = useSelector(state => state.favorite.favorite)
    const dispatch = useDispatch()
    const [product, setProduct] = useState(info)

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

    return { favorites, toggleFavorite }
}