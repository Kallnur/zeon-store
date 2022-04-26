import React, { useEffect, useState } from 'react'
import GetServ from '../../components/API/GetServ';
import CollectionGrop from '../../components/CollectionGroup/CollectionGroup'
import Pagination from '../../components/Pagination/Pagination';
import {getTotalPages } from '../../utils/allFunc';
import classCss from './Collection.module.css'

const Collection = () => {

  const [pageCollection, setPageCollection] = useState({
    totalPages: 0,
    limit: 8,
    page: 1
  });

  useEffect(() => {  
    getTotalPages(pageCollection, setPageCollection, GetServ.GetCollection(8,1))  // -_-
    window.scrollTo({ top: 80 });
  }, [pageCollection.page])

  const togglePage = (page) => {
    setPageCollection({...pageCollection, page: page})
  }

  console.log(pageCollection.page)

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