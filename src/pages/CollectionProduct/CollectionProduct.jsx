import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/Product/Product';
import classCss from './CollectionProduct.module.css'
import Pagination from '../../components/Pagination/Pagination';
import BlockProduct from '../../components/BlockProduct/BlockProduct';
import GetServ from '../../components/API/GetServ';
import { getTotalPages } from '../../utils/allFunc';
import { useDispatch } from 'react-redux';
import { addCrumb } from '../../store/reducers/breadcrumb';
import MobBlockProduct from '../../components/BlockProduct/MobBlockProduct';
import Loader from '../../components/Loader/Loader';

const CollectionProduct = ({route}) => {

    let limitCol = window.innerWidth <= 425 ? 4 : 12;
    const [productQuer, setProductQuer] = useState({
        totalPages: 0,
        limit: limitCol,
        page: 1
    })
    let {id} = useParams();
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const crumb = {txt: id, href: '/collection/'};

    const getProduct = async () => {
        const response = await GetServ.getProduct(productQuer.limit, productQuer.page); 
        setProducts(response.data)
    }

    const togglePage = (page) => {
        setProductQuer({...productQuer, page: page})
    }

    useEffect(() => {dispatch(addCrumb(crumb)); window.scrollTo({ top: 0, behavior: 'smooth' })})
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
                    <Loader/>
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
            {
                window.innerWidth <= 425
                ?
                <div>
                  <MobBlockProduct col={5} title={"??????????????"}/>
                </div>
                :
                <div>
                  <BlockProduct col={5} title={"??????????????"}/>
                </div>
              }
        </div>        
    </div>
    </>
  )
}

export default CollectionProduct