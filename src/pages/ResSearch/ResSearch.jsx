import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlockProduct from '../../components/BlockProduct/BlockProduct';
import MobBlockProduct from '../../components/BlockProduct/MobBlockProduct';
import PageTitle from '../../components/PageTitle/PageTitle'
import Pagination from '../../components/Pagination/Pagination';
import Product from '../../components/Product/Product';
import usePagination from '../../hooks/usePagination';
import { toogleCrumb } from '../../store/reducers/breadcrumb';
import classCss from './ResSearch.module.css'

const ResSearch = () => {

   const { id } = useParams();
   const products = useSelector(state => state.product.products)
   const [searchProduct, setSearchProduct] = useState([])
   const [page, setPage] = useState(1);
   const dispatch = useDispatch();
   const crumb = [{txt: 'Главная ', href: '/'},{txt:'Результаты поиска ', href: `/res-search/${id}`}]
   const paginationIn = usePagination(),
         {totalPage, RPage, lastInd, firstInd} = paginationIn(searchProduct, page, 8)

   const searchSorting = () => {
      const res = products.filter(obj => obj.collection.toLowerCase().includes(id.toLowerCase())  )
      setSearchProduct(res)
   }

   const togglePage = (page) => {setPage(page)};

   useEffect(() => {
      searchSorting(); dispatch(toogleCrumb(crumb)); 
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [])
   useEffect(() => { searchSorting() }, [id, products])
   useEffect(() => { paginationIn(searchProduct, page, 12); window.scrollTo( { top: 0, behavior: 'smooth' } ) }, [page])

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
               {searchProduct.slice(firstInd, lastInd).map(obj => 
                     <Product key={obj.id} info={obj}/>
               )}
            </div>
            {
               totalPage > 1
               ?
               <Pagination totalBullet={totalPage} page={RPage} toggle={togglePage}/>
               :
               <></>
            }
            </>
            }
         </div>
         </div>  
   </div>
  )
}

export default ResSearch