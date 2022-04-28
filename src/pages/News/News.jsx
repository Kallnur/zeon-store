import React, { useEffect, useState } from 'react'
import GetServ from '../../components/API/GetServ'
import PageTitle from '../../components/PageTitle/PageTitle'
import classCss from './News.module.css'
import NewsBlock from './NewsBlock/NewsBlock'

const News = () => {

  const [news, setNews] = useState([])

  const getNews = async () => {
    const response = await GetServ.getNews(5,1);
    setNews(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getNews()
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