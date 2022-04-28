import React from 'react'
import classCss from '../FloatBlock.module.css'

const FloatLinks = ({info, setVisi}) => {
  return (
    <div className={classCss.FloatLinks}>
        {
            !info.link 
            ?
            <span onClick={() => setVisi(true)}>
                <img src={info.url} alt="Icon" />
            </span>
            :
            <a href={info.link}>
                <img src={info.url} alt="Icon" />
            </a>
        }
    </div>
  )
}

export default FloatLinks