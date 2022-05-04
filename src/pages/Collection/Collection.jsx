import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import GetServ from '../../components/API/GetServ';
import CollectionGrop from '../../components/CollectionGroup/CollectionGroup'
import Pagination from '../../components/Pagination/Pagination';
import {getTotalPages } from '../../utils/allFunc';
import classCss from './Collection.module.css';
import { toogleCrumb } from '../../store/breadcrumb';

const Collection = () => {

  const dispatch = useDispatch();
  const crumb = [{txt: 'Главная ', href: '/'},{txt:'Коллекции', href: '/collection'}]
  let limitCol = window.innerWidth <= 425 ? 4 : 8;

  const [pageCollection, setPageCollection] = useState({
    totalPages: 0,
    limit: limitCol,
    page: 1
  });
  const togglePage = (page) => {
    setPageCollection({...pageCollection, page: page})
  }

  useEffect(() => {
    dispatch(toogleCrumb(crumb))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {  
    getTotalPages(pageCollection, setPageCollection, GetServ.GetCollection(8,1))  // -_-
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pageCollection.page])

  return (
    <div className={classCss.Collection}>
      <div className='container'>
        <div className={classCss.CollectionBody}>
          <h1>Коллекции</h1>
          <CollectionGrop
            getBtn={false} 
            Limit={pageCollection.limit} 
            Page={pageCollection.page} 
            fuse={16}
            toggle={true}
            timeout={0}
          />
          <Pagination 
            totalBullet={pageCollection.totalPages} 
            page={pageCollection.page}
            toggle={togglePage}
            />
        </div>
      </div>      
    </div>
  )
}

export default Collection