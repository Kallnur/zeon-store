import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BlockProduct from '../../components/BlockProduct/BlockProduct'
import MobBlockProduct from '../../components/BlockProduct/MobBlockProduct'
import PageTitle from '../../components/PageTitle/PageTitle'
import Product from '../../components/Product/Product'
import classCss from './Favorites.module.css'

const Favorits = () => {

  const faforites = useSelector(state => state.favorite.favorite)

  return (
    <div className={classCss.Favorites}>
      <div className='container'>
        <div className={classCss.FavoritesBody}>
          {
            !faforites.length
            ?
            <>
              <PageTitle 
                title={"Избранное"} 
                subtitle={"У Вас пока нет избранных товаров"}
              />
              {
                window.innerWidth <= 425
                ?
                <div>
                  <MobBlockProduct col={5} title={"Возможно Вас заинтересует"}/>
                </div>
                :
                <div>
                  <BlockProduct col={5} title={"Возможно Вас заинтересует"}/>
                </div>
              }
            </>
            :
            <>
              <PageTitle 
                title={"Избранное"} 
                subtitle={"Товаров в избранном: "}
                subtitleDesc={faforites.length}
              />
              <div className={`product-group ${classCss.ProductGroup}`}>
                {faforites.map(obj => 
                  <Product key={obj.code} info={obj} />
                )}
              </div>
            </>
          }          
        </div>

      </div>
    </div>
  )
}

export default Favorits