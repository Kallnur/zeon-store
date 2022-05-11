import React, { useEffect, useState } from 'react'
import classCss from './AboutUs.module.css'
import GetServ from '../../components/API/GetServ'
import { useDispatch } from 'react-redux'
import { addCrumb, toogleCrumb } from '../../store/reducers/breadcrumb'
import Loader from '../../components/Loader/Loader'

const AboutUs = () => {

  const dispatch = useDispatch();
  const crumb = [{txt: 'Главная ', href: '/'},{txt:'О нас ', href:'/about-us'}]
  const [aboutData, setAboutData] = useState({
    img: [],
    txt: {}
  });

  const getAboutUs = async () => {
    const response = await GetServ.getAbout();
    setAboutData({img: response.data[0], txt: response.data[1]})
    console.log(aboutData)
  }

  useEffect(()=>{
    getAboutUs();
    dispatch(toogleCrumb(crumb))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className={classCss.About}>
      <div className='container'>
        <div className={classCss.AboutBody}>
          {!aboutData
          ?
          <Loader/>
          :
          <>
          <ul className={classCss.AboutImageBlock}>
            {aboutData.img.map(i => 
              <li className={classCss.AboutImage} key={i.id}>
                <img src={i.url} alt={i.desk} />
              </li>
            )}
          </ul>
          <div  className={classCss.AboutText}>
            <h1>{aboutData.txt.title}</h1>
            <span>{aboutData.txt.body}</span>
          </div>
          </>
          }
        </div>
      </div>      
    </div>
  )
}

export default AboutUs