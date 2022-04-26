import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/Product/Product';
import classCss from './CollectionProduct.module.css'
import Pagination from '../../components/Pagination/Pagination';
import BlockProduct from '../../components/BlockProduct/BlockProduct';
import GetServ from '../../components/API/GetServ';
import { getTotalPages } from '../../utils/allFunc';

const CollectionProduct = ({route}) => {

    const [productQuer, setProductQuer] = useState({
        totalPages: 0,
        limit: 12,
        page: 1
    })
    const [products, setProducts] = useState([]);


    let {id} = useParams();

    const getProduct = async () => {
        const response = await GetServ.getProduct(productQuer.limit, productQuer.page); 
        setProducts(response.data)
    }

    const togglePage = (page) => {
        setProductQuer({...productQuer, page: page})
    }

    useEffect(() => {
        getTotalPages(productQuer, setProductQuer, GetServ.getProduct(12,1))
        getProduct()
    }, [productQuer.page])

  return (
    <>
    <div className={classCss.Collection}>
        <div className='container'>
            <h1 className={classCss.Title}>{id}</h1>
            <div className='product-group'>
                {
                    !products.length
                    ?
                    <h1>Product not found</h1>
                    :
                    products.map(obj => 
                        <Product key={obj.id * Math.random()} info={obj}/>    
                    )
                }
            </div>
            <Pagination
                totalBullet={productQuer.totalPages} 
                page={productQuer.page}
                toggle={togglePage}
            />
            <BlockProduct col={5} title={"Новинки"}/>
        </div>        
    </div>
    </>
  )
}

export default CollectionProduct