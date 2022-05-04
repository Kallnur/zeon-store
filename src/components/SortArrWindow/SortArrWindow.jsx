import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import classCss from './SortArrWindow.module.css'

const SortArrWindow = ({sortedProduct, visi, setSearch, setVisi, tgle}) => {

    let rootClass = [classCss.List]
    if(visi) rootClass.push(classCss.ListActive)
        else rootClass = [classCss.List];

    useEffect(() => {
        document.addEventListener('click', tgle);
    })

  return (
    <ul className={rootClass.join(' ')}>
        {!sortedProduct.length
        ?
        <li></li>
        :
        sortedProduct.map(obj => 
            <li key={obj} className={classCss.Item} onClick={() => {
                if(setVisi) setVisi(false)
            }}>
                <Link to={`/res-search/${obj}`} onClick={() => setSearch('')}>
                    {obj}
                </Link>
            </li>    
        )
        }
    </ul>
  )
}

export default SortArrWindow