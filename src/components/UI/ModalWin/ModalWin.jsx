import React from 'react'
import { Close } from '../../Icons/Icons'
import classCss from './ModalWin.module.css'

const ModalWin = ({children, visi, setVisi}) => {

    let rootClass = [classCss.ModalWin]
    if(visi) rootClass.push(classCss.ModalWinAvtive)

  return (
    <div className={rootClass.join(' ')} onClick={() => setVisi(false)}>
        <div className={classCss.ModalContent} onClick={e => e.stopPropagation()}>
           {children}
           <span className={classCss.Close} onClick={() => setVisi(false)}>
               <Close/>
           </span>
        </div>
    </div>
  )
}

export default ModalWin