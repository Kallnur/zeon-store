import React, { useEffect, useState } from 'react'
import GetServ from '../../components/API/GetServ';
import classCss from './PublicOffer.module.css';
import Paraph from './Paraph/Paraph';
import { useDispatch } from 'react-redux';
import { toogleCrumb } from '../../store/reducers/breadcrumb';
import Loader from '../../components/Loader/Loader';

const PublicOffer = () => {

  const [offerData, setOfferData] = useState();
  const dispatch = useDispatch();
  const crumb = [{txt: 'Главная ', href: '/'},{txt:'Публичная оферта  ', href: '/offer'}]
  
  async function getOffer () {
    const response = await GetServ.getOffer(); 
    setOfferData(response.data)
  }

  useEffect(() => {
    getOffer();
    dispatch(toogleCrumb(crumb))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className={classCss.Offer}>
      <div className='container'>
        <div className={classCss.OfferBody}>
          {!offerData 
            ? 
            <Loader/>
            :
            <>
              <h1 className={classCss.OfferTitle}>{offerData.title}</h1>
              <div className={classCss.OfferBlock}>
              <Paraph classCss={classCss.OfferParaph} paraph={offerData.body.paraph1} paraph2={offerData.body.paraph2}/>
              <Paraph classCss={classCss.OfferParaph} paraph={offerData.body.paraph1} paraph2={offerData.body.paraph2}/>
              <Paraph classCss={classCss.OfferParaph} paraph={offerData.body.paraph1} paraph2={offerData.body.paraph2}/>
              </div>
            </>
          }
        </div>
      </div>    
    </div>
  )
}

export default PublicOffer