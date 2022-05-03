import React, { useEffect } from 'react'
import Adventage from './Adventage/Adventage'
import classCss from './Home.module.css'
import HomeSlider from './HomeSlider/HomeSlider'
import HomeProduct from './HomeProduct/HomeProduct'
import CollectionGroup from '../../components/CollectionGroup/CollectionGroup'
import MobHomeProduct from './HomeProduct/MobHomeProduct'
import MobCollectionGroup from '../../components/CollectionGroup/MobCollectionGroup'
import { toogleCrumb } from '../../store/breadcrumb'
import { useDispatch } from 'react-redux'

const Home = () => {

  const dispatch = useDispatch();
  const crumb = [{txt: 'Главная ', href: '/'}]

  useEffect(() => {
    dispatch(toogleCrumb(crumb))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className={classCss.Home}>
      <div className='container slider-container'>
        <HomeSlider/>
      </div>
      <div className='container'>
        {
          window.innerWidth <= 425 ?
          <>
          <MobHomeProduct Limit={{limit: 8, getLimit: 8}} Page={{page: "", getPage: 2}} title="Хит продаж" fuse={9}/>
          <MobHomeProduct Limit={{limit: 4, getLimit: 8}} Page={{page: 3, getPage: 1}} title="Новинки" fuse={5}/>
          <h1 className={classCss.CollectionTitle}>Коллекция</h1>
          <MobCollectionGroup
            getBtn={true} 
            Limit={{limit: 4, getLimit: 8}} 
            Page={{page: 1, getPage: 2}} 
            fuse={9}/>
          </>
          :
          <>
          <HomeProduct Limit={{limit: 8, getLimit: 8}} Page={{page: "", getPage: 2}} title="Хит продаж" fuse={9}/>
          <HomeProduct Limit={{limit: 4, getLimit: 8}} Page={{page: 3, getPage: 1}} title="Новинки" fuse={5}/>
          <h1 className={classCss.CollectionTitle}>Коллекция</h1>
          <CollectionGroup 
            getBtn={true} 
            Limit={4} 
            Page={1} 
            fuse={9}
            timeout={500}
            />
          </>
        }
        <Adventage/>
      </div>      
    </div>
  )
}

export default Home