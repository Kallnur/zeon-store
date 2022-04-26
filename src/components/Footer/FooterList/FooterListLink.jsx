import React from 'react'
import { Link } from 'react-router-dom'
import classCss from '../Footer.module.css'

const FooterListLink = ({links, ind, title}) => {
  return (
    <ul className={classCss.FooterList}>
        <li>
            <span>{title}</span>
        </li>
        {
            !links.length
            ?
            <h1>Link not found</h1>
            :
            links.map((obj, i) => 
                ind === 0 
                ?
                <li key={i + Math.random() * 10}>
                    <Link to={obj.url}>{obj.txt}</Link>   
                </li>    
                :
                <li key={i + Math.random() * 10}>
                    <a href={obj.url}>{obj.txt}</a>   
                </li>       
            )
        }
    </ul>
  )
}

export default FooterListLink