import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector  } from 'react-redux';
import classCss from './ProductPage.module.css'
import ProductPageDesc from './ProductPageDesc/ProductPageDesc';
import ProductPageImages from './ProductPageImages/ProductPageImages';
import BlockProduct from '../../components/BlockProduct/BlockProduct';
import { getProducts } from '../../store/product';
import MobBlockProduct from '../../components/BlockProduct/MobBlockProduct'

const ProductPage = () => {

    const {id} = useParams();
    // const [product, setProduct] = useState([])
    const product = useSelector(state => state.product.product)
    const dispatch = useDispatch()

    // const getProduct = () => {
    //     setProduct(products.filter(obj => obj.id === Number(id)))
    // }
    // console.log(product)

    useEffect( () => { dispatch(getProducts(id)) }, [] )
    useEffect( () => { 
        dispatch(getProducts(id)) 
        window.scrollTo({ top: 80 }); 
    }, [id] )

  return (
    <div className={classCss.ProductPage}>
        <div className='container'>
            {
            !product.length
            ?
            <>
            <h1>Product not found</h1>
            </>
            :
            <>
                <div className={classCss.ProductPageBody}>
                    {
                        !product.length
                        ?
                        <h1>Product image not found</h1>
                        :
                        <ProductPageImages url = {product[0].url} id={id}/>
                    }
                    <div className={classCss.sticky}>
                        <ProductPageDesc info={product[0]}/>
                    </div>
                </div>
                {
                    window.innerWidth <= 425
                    ?
                    <MobBlockProduct title={"Похожие товары"} col={5} />
                    :
                    <BlockProduct title={"Похожие товары"} col={5}/>
                }
            </>
            }
        </div>
    </div>
  )
}

export default ProductPage