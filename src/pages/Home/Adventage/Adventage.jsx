import React, { useEffect, useState } from 'react'
import Block from './Block'
import classCss from '../Home.module.css';
import GetServ from '../../../components/API/GetServ';

const Adventage = () => {

  const [adventage, setAdventage] = useState([]);

  const getAdventage = async () => {
    const response = await GetServ.getAdventage();
    setAdventage(response.data)
  }

  useEffect(() => {
    getAdventage()
  }, [])

  return (
    <div>
      <div className={classCss.AdventageTitle}><h2>Наши преимущества</h2></div>
      <div className={classCss.HomeAdventage}>
          {!adventage.length
          ?
          <h1>Adventage not found</h1>
          :
          adventage.map(obj => 
          <Block icon={obj.icon} title={obj.title} txt={obj.body} key={obj.title}/>
          )}
      </div>
      
    </div>
  )
}

export default Adventage