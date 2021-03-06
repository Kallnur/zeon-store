import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector  } from 'react-redux';
import classCss from './ProductPage.module.css'
import ProductPageDesc from './ProductPageDesc/ProductPageDesc';
import ProductPageImages from './ProductPageImages/ProductPageImages';
import BlockProduct from '../../components/BlockProduct/BlockProduct';
import { getProducts } from '../../store/reducers/product';
import MobBlockProduct from '../../components/BlockProduct/MobBlockProduct'
import { addCrumb } from '../../store/reducers/breadcrumb';
import Loader from '../../components/Loader/Loader';

const ProductPage = () => {

    const {id} = useParams();
    const product = useSelector(state => state.product.product)
    const dispatch = useDispatch(); 
    let crumb;
    if(product.length) crumb = () => {return {txt: product[0].collection, href: '/product/:id'}};
    // console.log(crumb());
    
    useEffect( () => { 
        dispatch(getProducts(id)); 
        if(crumb) dispatch(addCrumb(crumb()));
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [] )
    useEffect( () => { 
        dispatch(getProducts(id)) 
        window.scrollTo({ top: 80 });
    }, [id] )
    useEffect(() => {if(crumb) dispatch(addCrumb(crumb()));if(crumb) console.log(crumb());}, [product])
    
  return (
    <div className={classCss.ProductPage}>
        <div className='container'>
            {
            !product.length
            ?
            <>
            <Loader/>
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
                    <MobBlockProduct title={"?????????????? ????????????"} col={5} />
                    :
                    <BlockProduct title={"?????????????? ????????????"} col={5}/>
                }
            </>
            }
        </div>
    </div>
  )
}

export default ProductPage