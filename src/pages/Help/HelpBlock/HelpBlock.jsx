import React, { useState } from 'react'
import { Left } from '../../../components/Icons/Icons'
import classCss from '../Help.module.css'

const HelpBlock = ({info}) => {

  const [stateActive, setStateActive] = useState(false)

  let rootClasses = {
    block: [classCss.HelpBlock],
    icon: [classCss.HelpTitle]
  }

  if(stateActive) {
    rootClasses.block.push(classCss.HelpBlockActive)
    rootClasses.icon.push(classCss.HelpTitleSvgTop)
  }

  const toggleActive = () => {
    if(!stateActive) setStateActive(true)
      else setStateActive(false)
  }

  return (
    <div onClick={toggleActive} className={rootClasses.block.join(' ')}>
        <strong className={rootClasses.icon.join(' ')}>
          {info.title}
          <Left/>
        </strong>
        <span className={classCss.HelpAnswer}>
          {info.body}
        </span>
    </div>
  )
}

export default HelpBlock