import React, { useEffect, useState } from 'react'
import classCss from '../ProductPage.module.css'
import { workaround } from '../../../utils/allFunc';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/zoom'

const ProductPageImages = ({url}) => {

  const [urls, setUrls] = useState(url);

  useEffect(() => { workaround(url, setUrls) }, [] )
  useEffect(() => { workaround(url, setUrls) }, [url] )

  return (
    <>
    {
      window.innerWidth <= 425
      ?
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        speed={700}
        spaceBetween={15}
        className={classCss.SwiperImg}
        autoplay={{delay: 5555, disableOnInteraction: false}}
      >
        {
          !urls
          ?
          <h1>Images not found</h1>
          :
          urls.map((url, i) => 
            <SwiperSlide key={i} className={classCss.SwiperSlideImg} >
              <img src={url} alt='Prodict images'/>
            </SwiperSlide>
          )
        }
      </Swiper>
      :
      <div className={classCss.ProductPageImg}>
        {
          !urls
          ?
          <h1>Images not found</h1>
          :
          urls.map((url, i) => 
            <img key={i} src={url} alt='Prodict images'/>
          )
        }
      </div>  
    }
    
    </>
  )
}

export default ProductPageImages