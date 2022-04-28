import React, { useEffect, useState } from 'react'
import GetServ from '../../components/API/GetServ'
import classCss from './Help.module.css'
import PageTitle from '../../components/PageTitle/PageTitle'
import HelpBlock from './HelpBlock/HelpBlock';

const Help = () => {

  const [helpInfo, setHelpInfo] = useState([]);

  const getHelp = async () => {
    const response = await GetServ.getHelp()
    setHelpInfo(response.data)
  }

  useEffect(() => {
    getHelp();
  }, [])

  return (
    <div className={classCss.Help}>
      <div className='container'>
        <div className={classCss.HelpBody}>
          <div className={classCss.HelpImg}>
            <img src="https://imagizer.imageshack.com/img923/2632/yWB7S5.jpg" alt="Img" />
          </div>
          <div className={classCss.HelpGroupBlock}>
            <PageTitle title={"Помощь"}/>
            <div className={classCss.HelpGroup}>
              {
                !helpInfo.length
                ?
                <h1>Help info not found</h1>
                :
                helpInfo.map((obj, i) =>
                  <HelpBlock key={Math.random() * i} info={obj}/>  
                )
              }              
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Help