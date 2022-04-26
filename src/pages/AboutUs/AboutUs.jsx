import React, { useEffect, useState } from 'react'
import classCss from './AboutUs.module.css'
import GetServ from '../../components/API/GetServ'

const AboutUs = () => {

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
  }, [])

  return (
    <div className={classCss.About}>
      <div className='container'>
        <div className={classCss.AboutBody}>
          {!aboutData
          ?
          <h1>Data not found</h1>
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