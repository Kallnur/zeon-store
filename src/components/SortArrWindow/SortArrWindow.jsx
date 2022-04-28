import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classCss from './SortArrWindow.module.css'

const SortArrWindow = ({sortedProduct, visi, setSearch}) => {

    let rootClass = [classCss.List]
    if(visi) rootClass.push(classCss.ListActive)

  return (
    <ul className={rootClass.join(' ')}>
        {!sortedProduct.length
        ?
        <li></li>
        :
        sortedProduct.map(obj => 
            <li className={classCss.Item}>
                <Link key={obj} to={`/res-search/${obj}`} onClick={() => setSearch('')}>
                    {obj}
                </Link>
            </li>    
        )
        }
    </ul>
  )
}

export default SortArrWindow