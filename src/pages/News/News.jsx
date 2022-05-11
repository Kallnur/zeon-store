import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GetServ from '../../components/API/GetServ'
import Loader from '../../components/Loader/Loader'
import PageTitle from '../../components/PageTitle/PageTitle'
import { toogleCrumb } from '../../store/reducers/breadcrumb'
import classCss from './News.module.css'
import NewsBlock from './NewsBlock/NewsBlock'

const News = () => {

  const [news, setNews] = useState([])
  const dispatch = useDispatch();
  const crumb = [{txt: 'Главная ', href: '/'},{txt:'Новости  ', href: '/news'}]
  const [curPage, setCurPage] = useState(1);
  const [getNew, setGetNew]   = useState(true);
  const [totalCount] = useState(50);

  let newsPoint = 444;
  if(window.innerWidth <= 425) newsPoint = 777;

  const scrollGet = (e) => {

    let scroll = e.target.documentElement.scrollTop,
        height = window.innerHeight,
        scHei  = e.target.documentElement.scrollHeight;

    if(scHei - (scroll + height) < newsPoint && news.length < totalCount){
      console.log('scroll');
      setGetNew(true)
    }
  };

  useEffect(() => {
    if(getNew){
      console.log('getNew');
      GetServ.getNews(5, curPage).then(response => {
        setNews([...news, ...response.data])
        console.log('new news', totalCount);
        setCurPage(curPage + 1)
      }).finally(() => setGetNew(false))      
    }
  }, [getNew])

  useEffect(() => {
    dispatch(toogleCrumb(crumb))
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.addEventListener('scroll', scrollGet)

    return () => {
      document.removeEventListener('scroll', scrollGet);
    }
  }, [])

  return (
    <div>
      <div className='container'>
        <PageTitle title={"Новости"}/>
        <div className={classCss.NewsBody}>
          {
            !news.length
            ?
            <Loader/>
            :
            news.map((obj, i) => 
              <NewsBlock key={obj.id + i * Math.random()} info={obj}/>
            )
          }
        </div>
      </div>      
    </div>
  )
}

export default News