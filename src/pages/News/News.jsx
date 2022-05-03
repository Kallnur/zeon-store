import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GetServ from '../../components/API/GetServ'
import PageTitle from '../../components/PageTitle/PageTitle'
import { toogleCrumb } from '../../store/breadcrumb'
import classCss from './News.module.css'
import NewsBlock from './NewsBlock/NewsBlock'

const News = () => {

  const [news, setNews] = useState([])
  const dispatch = useDispatch();
  const crumb = [{txt: 'Главная ', href: '/'},{txt:'Новости  ', href: '/news'}]

  const getNews = async () => {
    const response = await GetServ.getNews(5,1);
    setNews(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getNews()
    dispatch(toogleCrumb(crumb))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div>
      <div className='container'>
        <PageTitle title={"Новости"}/>
        <div className={classCss.NewsBody}>
          {
            !news.length
            ?
            <h1>News not found</h1>
            :
            news.map(obj => 
              <NewsBlock key={obj.id} info={obj}/>
            )
          }
        </div>
      </div>      
    </div>
  )
}

export default News