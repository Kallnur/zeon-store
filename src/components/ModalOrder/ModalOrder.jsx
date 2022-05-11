import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Mark } from '../Icons/Icons';
import ButtonPost from '../UI/ButtonPost/ButtonPost';
import InputOrder from '../UI/InputOrder/InputOrder';
import classCss from './ModalOrder.module.css' ;
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { allPrice, amountLines, amountProduct, checkPerc } from '../../utils/calcBasket';
import { clearBasket } from '../../store/reducers/basket';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';

const ModalOrder = ({done, setDone, setModalVisi}) => {

  const [phoneValue, setPhoneValue] = useState('');
  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  const userName = user.displayName.split(' ');
  const { register, formState:{errors, isValid}, handleSubmit, reset} = useForm({mode: 'onChange'});

  const products = useSelector(state => state.basket.basket)
  const dispatch = useDispatch();

  const clearFireBasket = () => {
    if(user) firestore.collection('users').doc(user.uid)
                .collection('basket').get().then(obj => {
                  obj.forEach(doc => {
                    doc.ref.delete()
                  })
                })
  }

  const onSubmit = data => {
    const product = {
      products: products.map(obj => {return {color: obj.color.color, amount: obj.basket, name: obj.collection}}),
      countLine: amountLines(products),
      countProduct: amountProduct(products),
      perc: !checkPerc(products) ? false : checkPerc(products),
      allPrice: allPrice(products)
    }

    firestore.collection('users')
          .doc(user.uid)
            .collection('historyOrder')
              // .doc(JSON.stringify(info.id))
                .add({product: product})

    axios.post('http://localhost:3003/order', {infoUser: {...data, phone: phoneValue}, infoProduct: product})
    clearFireBasket()
    
    reset();
    setDone(true)
    dispatch(clearBasket());
  }

  return (
    <div className={classCss.ModalOrder}>
        <h2 className={classCss.ModalTitle}>Оформление заказа</h2>
        <div className={classCss.ModalFormBlock}>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <div className={classCss.ModalFormBody}>
                  <InputOrder 
                    classCss={classCss} label='Ваше имя' name='name' register={register} 
                    value={userName[0]} placeholder='Например Иван' errName={errors?.name}
                  />
                  <InputOrder 
                    classCss={classCss} label='Ваше фамилия' name='lastName' register={register} 
                    value={userName[1]} placeholder='Например Иванов' errName={errors?.lastName}
                  />
                  <InputOrder 
                    classCss={classCss} label='Электронная почта' name='email' register={register} 
                    value={user.email} placeholder='example@mail.com' type={'email'} errName={errors?.email}
                  />
                  <PhoneInput name={'phone'} required placeholder="Введите номер телефона" 
                    value={phoneValue} minLength={9} onChange={setPhoneValue}/>
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
                    <span>Согласен с условиями <Link target={'_blank'} to="/offer">публичной оферты</Link></span>
                  </label>
                    <ButtonPost 
                      type='submit' 
                      disabled={!isValid}
                      data-active={isValid}
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