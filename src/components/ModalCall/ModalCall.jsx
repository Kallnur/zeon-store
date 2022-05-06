import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Tel, User } from '../Icons/Icons'
import ButtonPost from '../UI/ButtonPost/ButtonPost'
import classCss from './ModalCall.module.css'

const ModalCall = ({done}) => {

    const [userInfo, setUserInfo] = useState({
        name: '',
        phone: ''
    })

    const [btnActive, setBtnActive] = useState(false) 

    const valid = () => {
        if(userInfo.name.length > 1 && userInfo.phone.length > 9) setBtnActive(true)
        else setBtnActive(false)
        console.log(userInfo)
    }

    const postUserInfo = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3003/back-call', userInfo)
        setUserInfo({
            name: '',
            phone: ''
        })
    }

    useEffect(() => {
        valid()
    }, [userInfo.name, userInfo.phone])

  return (
    <>
        <div className={classCss.ModalTxt}>
            <h2>Если у Вас остались вопросы</h2>
            <span>Оставьте заявку и мы обязательно Вам перезвоним</span>
        </div>
        <form>
            <div className={classCss.ModalForm}>
                <div>
                    <User/>
                    <input
                        value={userInfo.name} 
                        type="text" 
                        placeholder='Как к Вам обращаться?'
                        onChange={(e) => {setUserInfo({...userInfo, name: e.target.value})}}
                    />
                </div>
                <div>
                    <Tel/>
                    <input 
                        value={userInfo.phone} 
                        type="number" 
                        placeholder='Номер телефона'
                        onChange={(e) => {setUserInfo({...userInfo, phone: e.target.value})}}
                    />
                </div>
                {
                    <ButtonPost 
                        disabled={!btnActive}
                        data-active={btnActive}
                        onClick={(e) => {
                            postUserInfo(e)
                            done(true)
                        }} 

                    >
                        Заказать звонок
                    </ButtonPost>
                }
            </div>
        </form>
    </>
  )
}

export default ModalCall