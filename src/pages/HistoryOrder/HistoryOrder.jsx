import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { Context } from '../..';
import Loader from '../../components/Loader/Loader';
import useFirestore from '../../hooks/useFirestore';
import { fillOrders } from '../../store/reducers/orders';
import HistoryBlock from './HistoryBlock/HistoryBlock'
import classCss from './HistoryOrder.module.css'

const HistoryOrder = () => {

  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  const {load} = useFirestore('historyOrder', fillOrders);
  const historyOrder = useSelector(state => state.orders.orders)

  return (
    <div className={classCss.HistoryOrder}>
        <div className='container'>
          <div className={classCss.HistoryOrderBody}>
            {
              !historyOrder.length
              ?
              !load ? <h1>Вы ничиго не заказывали</h1> : <Loader/>
              :
              historyOrder.map((obj, i) => {
                return <HistoryBlock info={obj.product} key={i * Math.random()} num={i + 1}/>
              })
            }
          </div>
        </div>
    </div>
  )
}

export default HistoryOrder