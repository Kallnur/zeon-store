import React, { useState } from 'react'
import classCss from '../News.module.css'
import NewsBtn from '../NewsBtn/NewsBtn'

const NewsBlock = ({info}) => {

    const [descState, setDescState] = useState({
        btnValue: 'Читать полностью',
        root: false
    })

    let classesDesc = [classCss.NewsDesc]

    const openDesc = () => {
        if(!descState.root){
            setDescState({root: true, btnValue: 'Скрыть'})
        }else{
            classesDesc = [classCss.NewsDesc]
            setDescState({root: false, btnValue: 'Читать полностью'})
        }
        console.log(classesDesc)
    }

    if(descState.root) classesDesc.push(classCss.NewsDescMob)

  return (
    <div className={classCss.NewsBlock}>
        <div className={classCss.NewsImg}>
            <img src={info.url} alt="News Img" />
        </div>
        <div className={classesDesc.join(' ')}>
            <strong>{info.title}</strong>
            <span>{info.body}</span>
        </div>
        <NewsBtn onClick={openDesc}>
            {descState.btnValue}
        </NewsBtn>
    </div>
  )
}

export default NewsBlock