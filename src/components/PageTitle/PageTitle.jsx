import React from 'react'
import classCss from './PageTitle.module.css'

const PageTitle = ({title, subtitle, titleDesc, subtitleDesc}) => {
  return (
    <div className={classCss.Block}>
        <h1 className={classCss.Title}>
            {title} {titleDesc}
        </h1>
        <div className={classCss.SubtitleBlock}>
            <span className={classCss.Subtitle}>
                {subtitle}
            </span>
            <span className={classCss.Subtitle}>
                {subtitleDesc}
            </span>
        </div>

    </div>
  )
}

export default PageTitle