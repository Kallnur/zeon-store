import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../store/product'
import { retColArr } from '../../utils/allFunc'
import Product from '../Product/Product'

const BlockProduct = ({title, col}) => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.product.products)
  const renderProduct = retColArr(col, products)

  // console.log(products)
  // console.log(renderProduct)

  useEffect(() => {
    dispatch(getProducts(null));
  }, [])

  return (
    <div>
      <h1 className='new-product-title'>{title}</h1>
      <div className='product-group new-product-group'>
        {
          !renderProduct.length 
          ?
          <h1>New product not found</h1>
          :
          renderProduct.map((obj, i) => 
            <Product info={obj} key={i + 1 * Math.random()}/>
          )
        }
      </div>      
    </div>
  )
}

export default BlockProduct