import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BusketProduct from './BasketProduct/BasketProduct'
import classCss from './Basket.module.css'
import BasketOrder from './BasketOrder/BasketOrder'
import MobBlockProduct from '../../components/BlockProduct/MobBlockProduct'
import BlockProduct from '../../components/BlockProduct/BlockProduct'
import PageTitle from '../../components/PageTitle/PageTitle'
import ModalWin from '../../components/UI/ModalWin/ModalWin'
import ModalOrder from '../../components/ModalOrder/ModalOrder'
import ModalDone from '../../components/ModalDone/ModalDone'
import { toogleCrumb } from '../../store/breadcrumb'

const Basket = () => {

  const products = useSelector(state => state.basket.basket)
  let classBasketBody = [classCss.BusketBody]
  const dispatch = useDispatch();
  const crumb = [{txt: 'Главная ', href: '/'},{txt:'Корзина', href: '/basket'}]

  const [modalVisi, setModalVisi] = useState(false)
  const [done, setDone] = useState(false)

  if(products.length) classBasketBody.push(classCss.BusketBodyMob)
  console.log(products)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  useEffect(() => {
    setDone(false); dispatch(toogleCrumb(crumb)); 
  }, [products])

  return (
    <>
    <div className={classCss.Busket}>
      <div className='container'>
        {!products.length 
        ? <PageTitle title={'Корзина'} subtitle={'У Вас пока нет товаров в корзине'}/>
        : null 
        }
        <div className={classBasketBody.join(' ')}>
            {
              !products.length
              ?
                window.innerWidth <= 425
                ?
                  <MobBlockProduct col={5} title={"Возможно Вас заинтересует"}/>
                :
                  <BlockProduct col={5} title={"Возможно Вас заинтересует"}/>
              :
              <>
              <div className={classCss.BusketProductGroup}>
                {products.map(obj => 
                  <BusketProduct key={obj.id * Math.random()} info={obj} />
                )}
              </div>
              <BasketOrder products={products} mVisi={modalVisi} setMVisi={setModalVisi}
              />
              </>
            }
        </div>
      </div>
    </div>
    <ModalWin visi={modalVisi} setVisi={setModalVisi}>
      {!done
      ?
      <ModalOrder done={done} setDone={setDone} />
      :
      <ModalDone setVisi={setModalVisi}/>
      }
    </ModalWin>
    </>
  )
}

export default Basket