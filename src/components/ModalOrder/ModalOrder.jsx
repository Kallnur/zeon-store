import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Mark } from '../Icons/Icons';
import ButtonPost from '../UI/ButtonPost/ButtonPost';
import InputOrder from '../UI/InputOrder/InputOrder';
import classCss from './ModalOrder.module.css' ;
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { allPrice, amountLines, amountProduct } from '../../utils/calcBasket';

const ModalOrder = ({done, setDone}) => {

  const [phoneValue, setPhoneValue] = useState('')

  const { register, formState:{errors, isValid}, handleSubmit, reset} = useForm({mode: 'onBlur'});

  const products = useSelector(state => state.basket.basket)

  const onSubmit = data => {
    const product = {
      products: products.map(obj => {return {id: obj.id, code: obj.code,color: obj.color}}),
      countLine: amountLines(products),
      countProduct: amountProduct(products),
      allPrice: allPrice(products)
    }
    axios.post('http://localhost:3003/order', {infoUser: {...data, phone: phoneValue}, infoProduct: product})
    done ? setDone(!done) : setDone(!done)
    reset();
  }

  return (
    <div className={classCss.ModalOrder}>
        <h2 className={classCss.ModalTitle}>Оформление заказа</h2>
        <div className={classCss.ModalFormBlock}>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <div className={classCss.ModalFormBody}>
                  <InputOrder 
                    classCss={classCss} label='Ваше имя' name='name' register={register} 
                    errors={errors} placeholder='Например Иван' errName={errors?.name}
                  />
                  <InputOrder 
                    classCss={classCss} label='Ваше фамилия' name='lastName' register={register} 
                    errors={errors} placeholder='Например Иванов' errName={errors?.lastName}
                  />
                  <InputOrder 
                    classCss={classCss} label='Электронная почта' name='email' register={register} 
                    errors={errors} placeholder='example@mail.com' type={'email'} errName={errors?.email}
                  />
                  <PhoneInput name={'phone'} required placeholder="Введите номер телефона" 
                    value={phoneValue} onChange={setPhoneValue}/>
                  <InputOrder 
                    classCss={classCss} label='Страна' name='country' register={register} 
                    errors={errors} placeholder='Введите страну' errName={errors?.country}
                  />
                  <InputOrder 
                    classCss={classCss} label='Город' name='city' register={register} 
                    errors={errors} placeholder='Введите город' errName={errors?.city}
                  />
                  <label className={classCss.CheckBox}>
                    <input type="checkbox" {...register('check', {required: true})}/>
                    <div className={classCss.CheckBoxMark}><Mark className={classCss.Mark}/></div>
                    <span>Согласен с условиями <Link to="/offer">публичной оферты</Link></span>
                  </label>
                    <ButtonPost 
                      type='submit' 
                      disabled={!isValid}
                      style={isValid ? {background: '#1D1D1B'} : {background: '#777776'}}
                      >
                      Заказать
                    </ButtonPost>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ModalOrder