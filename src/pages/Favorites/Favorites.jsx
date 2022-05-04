import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlockProduct from '../../components/BlockProduct/BlockProduct'
import MobBlockProduct from '../../components/BlockProduct/MobBlockProduct'
import PageTitle from '../../components/PageTitle/PageTitle'
import Pagination from '../../components/Pagination/Pagination'
import Product from '../../components/Product/Product'
import usePagination from '../../hooks/usePagination'
import { toogleCrumb } from '../../store/breadcrumb'
import favorite from '../../store/favorite'
import classCss from './Favorites.module.css'

const Favorits = () => {

  const faforites = useSelector(state => state.favorite.favorite)
  const dispatch = useDispatch();
  const crumb = [{txt: 'Главная ', href: '/'},{txt:'Избранное', href: '/favorites'}]
  // const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)
  const paginationIn = usePagination(),
        {totalPage, RPage, lastInd, firstInd} = paginationIn(faforites, page, 12)

  console.log(totalPage, RPage, lastInd, firstInd);

  const togglePage = (page) => {setPage(page)};

  useEffect(() => {
    dispatch(toogleCrumb(crumb))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  useEffect(() => { 
    paginationIn(faforites, page, 12);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])


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
                {faforites.slice(firstInd, lastInd).map(obj => 
                  <Product key={obj.code} info={obj} />
                )}
              </div>
              {
                totalPage > 1 
                ?
                <Pagination toggle={togglePage} totalBullet={totalPage} page={RPage}/>
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

export default Favorits