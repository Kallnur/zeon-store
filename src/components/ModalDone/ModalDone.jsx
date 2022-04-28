import React from 'react'
import ButtonPost from '../UI/ButtonPost/ButtonPost'
import classCss from './ModalDone.module.css'

const ModalDone = ({setVisi}) => {
  return (
    <>
        <span className={classCss.SpanImg}>
            <img src="https://firebasestorage.googleapis.com/v0/b/zeon-store-8ad28.appspot.com/o/done.svg?alt=media&token=5b36df3a-5d5e-4aef-a4d6-03e8915332cf" alt="Done" />
        </span>
        <h1 className={classCss.Thanks}>Спасибо!</h1>
        <span className={classCss.DoneMess}>Ваша заявка была принята ожидайте, скоро Вам перезвонят</span>
        <ButtonPost 
            onClick={() => setVisi(false)}
            style={{background: "#1D1D1B"}}
        >
            Продолжить покупки
        </ButtonPost>
    </>
  )
}

export default ModalDone