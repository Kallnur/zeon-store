import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeToFavorite } from "../store/reducers/favorite";
import { checkArr } from "../utils/allFunc";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";

export default function useToggleFavorite({info, setVisi}){

    const {auth, firestore} = useContext(Context);
    const favorites = useSelector(state => state.favorite.favorite);
    const dispatch = useDispatch();
    const [product, setProduct] = useState(info);
    const [user] = useAuthState(auth);

    const addFirestore = async (info) => {
      if(user){
        await firestore.collection('users')
          .doc(user.uid)
            .collection('favorites')
              .doc(JSON.stringify(info.id))
                .set({product: info})
      }
    }

    const deleteFirestore = async (doc) => {
      if(user){
        await firestore.collection('users').doc(user.uid)
          .collection('favorites').doc(JSON.stringify(doc)).delete()
      }
    }

    const toggleFavorite = () => {  
        if( !product.favorite ){
          if(!checkArr(favorites, info)){
            dispatch(addToFavorite( info ));
            setProduct({...product, favorite: true})
            addFirestore(product)
            setVisi(1)
          }else {
            dispatch(removeToFavorite( info ));
            setVisi(0)
            deleteFirestore(product.id);
            setProduct({...product, favorite: false})
          }
        } else {
          dispatch(removeToFavorite( info ));
          setVisi(0)
          setProduct({...product, favorite: false})
        }
        // console.log(product);
    };



    return { favorites, toggleFavorite }
}