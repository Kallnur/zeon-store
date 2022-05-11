import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Context } from '../../..'
import { Close } from '../../../components/Icons/Icons'
import { removeToBasket } from '../../../store/reducers/basket'
import classCss from './BasketProduct.module.css'
import BasketProductDesc from './BasketProductDesc/BasketProductDesc'

const BasketProduct = ({ info }) => {

  const dispatch = useDispatch()

  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth);

  const removeProduct = async () => {
    if(user){
      let tempDoc = {productId: info.id, productColor: info.color.color}
      console.log(JSON.stringify(tempDoc));
      await firestore.collection('users').doc(user.uid)
        .collection('basket').doc(JSON.stringify(tempDoc)).delete()
    }
    dispatch(removeToBasket(info))
  }

  return (
    <div className={classCss.ProductBody}>
        <div className={classCss.ProductInfo}>
            <Link to={`/product/${info.id}`} className={classCss.ProductImg}>
                <img src={info.url[0]} alt="Product" />
            </Link>
            <BasketProductDesc info={info} />
        </div>
        <div className={classCss.ProductClose} onClick={() => removeProduct()}>
            <Close />
        </div>
    </div>
  )
}

export default BasketProduct