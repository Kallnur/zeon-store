import React from 'react'
import { useSelector } from 'react-redux'
import BusketProduct from './BasketProduct/BasketProduct'
import classCss from './Basket.module.css'
import BasketOrder from './BasketOrder/BasketOrder'
import MobBlockProduct from '../../components/BlockProduct/MobBlockProduct'
import BlockProduct from '../../components/BlockProduct/BlockProduct'
import PageTitle from '../../components/PageTitle/PageTitle'

const Basket = () => {

  const product = useSelector(state => state.basket.basket)

  console.log(product)

  return (
    <div className={classCss.Busket}>
      <div className='container'>
        {!product.length 
        ? <PageTitle title={'Корзина'} subtitle={'У Вас пока нет товаров в корзине'}/>
        : null 
        }
        <div className={classCss.BusketBody}>
            {
              !product.length
              ?
                window.innerWidth <= 425
                ?
                  <MobBlockProduct col={5} title={"Возможно Вас заинтересует"}/>
                :
                  <BlockProduct col={5} title={"Возможно Вас заинтересует"}/>
              :
              <>
              <div className={classCss.BusketProductGroup}>
                {product.map(obj => 
                  <BusketProduct key={obj.id} info={obj}/>
                )}
              </div>
              <BasketOrder/>
              </>
            }
        </div>
      </div>
    </div>
  )
}

export default Basket