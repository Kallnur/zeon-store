import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import BlockProduct from '../../components/BlockProduct/BlockProduct';
import MobBlockProduct from '../../components/BlockProduct/MobBlockProduct';
import PageTitle from '../../components/PageTitle/PageTitle'
import Product from '../../components/Product/Product';
import classCss from './ResSearch.module.css'

const ResSearch = () => {

   const { id } = useParams();
   const products = useSelector(state => state.product.products)
   const [searchProduct, setSearchProduct] = useState([])

   console.log(products)

   const searchSorting = () => {
      const res = products.filter(obj => obj.collection.toLowerCase().includes(id.toLowerCase())  )
      setSearchProduct(res)
      console.log(res, searchProduct, products)
   }

   useEffect(() => {searchSorting()}, [])
   useEffect(() => {searchSorting()}, [id, products])

  return (
   <div className={classCss.ResSearch}>
      <div className='container'>
         <div className={classCss.ResSearchBody}>
            {!searchProduct.length 
            ?
            <>
            <PageTitle title={"Результаты поиска по запросу: "} titleDesc={id} subtitle={'По Вашему запросу ничего не найдено.'}/>
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
            <PageTitle title={"Результаты поиска по запросу: "} titleDesc={id}/>
            <div className={['product-group', classCss.productGroup].join(' ')}>
               {searchProduct.map(obj => 
                     <Product key={obj.id} info={obj}/>
               )}
            </div>
            </>
            }
         </div>
         </div>  
   </div>
  )
}

export default ResSearch