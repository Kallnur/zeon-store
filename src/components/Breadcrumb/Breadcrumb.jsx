import React from 'react'
import { Link } from 'react-router-dom';
import classCss from './Breadcrumb.module.css'


const PagePath = ({crumb}) => {

  return (
    crumb.length <= 1
    ?
    <></>
    :
    <div className={classCss.PagePath}>
      <div className={classCss.CrumbBody}>
        {
          crumb.length > 1
          ?
          crumb.map((obj, i) => {
            if(i === crumb.length - 1) return <span key={obj.href} className={classCss.Crumbs}>{obj.txt}</span>
            else return <Link key={obj.href} className={classCss.Crumbs} to={obj.href}>{obj.txt} <span>/</span></Link>
          })
          :
          <></>
        }
      </div>
    </div>
  )
}

export default PagePath