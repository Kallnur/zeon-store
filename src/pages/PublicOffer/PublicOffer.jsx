import React, { useEffect, useState } from 'react'
import GetServ from '../../components/API/GetServ';
import classCss from './PublicOffer.module.css';
import Paraph from './Paraph/Paraph';

const PublicOffer = () => {

  const [offerData, setOfferData] = useState();
  
  async function getOffer () {
    const response = await GetServ.getOffer(); 
    setOfferData(response.data)
  }

  useEffect(() => {
    getOffer();
  }, [])

  return (
    <div className={classCss.Offer}>
      <div className='container'>
        <div className={classCss.OfferBody}>
          {!offerData 
            ? 
            <h1>Obj not  fount</h1>
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