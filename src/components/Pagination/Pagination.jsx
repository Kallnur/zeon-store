import React from 'react'
import { totalPagBullet } from '../../utils/allFunc'
import { Left } from '../Icons/Icons';
import classCss from './Pagination.module.css'

const Pagination = ({totalBullet, page, toggle}) => {

    const totalPages = totalPagBullet(totalBullet);
    const next = () => {if(page < totalBullet) toggle(page += 1)};

    const prev = () => {if(page > 1) toggle(page -= 1)};

  return (
    <div className={classCss.Pagination}>
        <span onClick={() => prev()} className={classCss.PaginationBtn}>
            <Left/>
        </span>
        {
            !totalPages
            ?
            null
            :
            totalPages.map(i =>
                <span 
                    onClick={() => toggle(i)}
                    className={page === i 
                        ? [classCss.PaginationBullet, classCss.PaginationActive].join(' ')
                        : classCss.PaginationBullet
                    } 
                    key={i}>
                    {i}
                </span>
            )
        }
        <span onClick={() => next()} className={[classCss.PaginationBtn, classCss.PaginationBtn2].join(' ')}>
            <Left/>
        </span>
    </div>
  )
}

export default Pagination