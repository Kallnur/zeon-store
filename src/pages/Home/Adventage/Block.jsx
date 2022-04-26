import React from 'react'
import classCss from '../Home.module.css'

const Block = ({icon, title, txt}) => {
    return(
        <div className={classCss.AdventageBlock}>
            <div><img src={icon} alt="Icon" /></div>
            <strong>{title}</strong>
            <p>{txt}</p>
        </div>
    )
}

export default Block