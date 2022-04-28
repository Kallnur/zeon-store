import React from 'react'
import { Link } from 'react-router-dom'
import { Left } from '../Icons/Icons'

const Collection = ({info}) => {
  return (
    <div className='collection'>
        <Link className='collection-link' to={`/collection/${info.title}`}>
            <div className='collection-body'>
                <div className='collection-img'>
                    <img src={info.url} alt="Collection img" />
                    <strong>{info.title}</strong>
                </div>
                <div className='collection-desc'>
                    <span>Смотреть все</span>
                    <Left/>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Collection