import React, { useEffect, useState } from 'react'
import GetServ from '../../API/GetServ'
import { Chat, Close, Top } from '../../Icons/Icons'
import classCss from './FloatBlock.module.css'
import FloatLinks from './FloatLinks/FloatLinks'

const FloatBlock = ({setVisi}) => {

  const [showClose, setShowClose] = useState(false)
  const [floatIn, setFloatIn] = useState([])

  const getLinks = async () => {
    const response = await GetServ.getFloatLinks();
    setFloatIn(response.data)
  }
  let rootClasses = [classCss.FloatLinkBlock]
  if(showClose) rootClasses.push(classCss.FloatLinkBlockActive)

  const toggleBlock = () => {
    if(showClose) setShowClose(false)
      else setShowClose(true)
  }
  

  useEffect(() => {
    getLinks()
  }, [])

  return (
    <div className={classCss.FloatBlock}>
      <div className={rootClasses.join(' ')}>
        {
          !floatIn.length 
          ?
          <h1>Icons not found</h1>
          :
          floatIn.map(obj => 
            <FloatLinks key={obj.url} info={obj} setVisi={setVisi}/>
          )
        }
      </div>
      <div className={classCss.FloatButton}>
        <span 
          className={classCss.FloatButtonIconTop} 
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}
        >
            <Top/>
        </span>
        <span className={classCss.FloatButtonBtn} onClick={toggleBlock}>
          {
            !showClose
            ?
            <Chat/>
            :
            <Close/>
          }
            
        </span>
      </div>
    </div>
  )
}

export default FloatBlock