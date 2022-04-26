import React from 'react'
import classCss from '../../Home.module.css';
import { Link } from 'react-router-dom';

const HomeSlide = ({obj}) => {

  return(
      <div className={classCss.HomeSlideBlock}>
        <Link to={obj.link ? obj.link : "#"}>
          <img src={obj.url} alt={obj.desk} />
        </Link>
      </div>
  )
  }

export default HomeSlide