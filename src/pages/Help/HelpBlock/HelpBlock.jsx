import React, { useRef, useState } from 'react'
import { Left } from '../../../components/Icons/Icons'
import classCss from '../Help.module.css'

const HelpBlock = ({info}) => {

  const [stateActive, setStateActive] = useState(false)
  const block = useRef();

  let rootClasses = [classCss.HelpBlock];

  if(stateActive) {
    rootClasses.push(classCss.HelpBlockActive)
  }

  const toggleActive = () => {
    console.log(block) 
    if(!stateActive) setStateActive(true)
      else setStateActive(false)
  }

  return (
    <div onClick={toggleActive} className={rootClasses.join(' ')} ref={block}>
        <strong className={classCss.HelpTitle}>
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