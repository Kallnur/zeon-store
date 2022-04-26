import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import HomeSlide from './HomeSlide/HomeSlide';
import GetServ from '../../../components/API/GetServ';
import './slider.css';

const HomeSlider = () => {

  const [slideImg, setSlideImg] = useState();
  const [winWidth] = useState(window.innerWidth);
  
  const getSlideImg = async () => {
    if(winWidth > 425){
      const response = await GetServ.getSlide('') 
      setSlideImg(response.data)
    }else{
      const response = await GetServ.getSlide('-mob');
      setSlideImg(response.data)
    }
    console.log(slideImg)
  }

  useEffect(() => {
    getSlideImg()
  }, [])

  return (
    <>
    <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{delay: 3500, disableOnInteraction: false}}
        speed={700}
    >
      {
        !slideImg
        ?
        <h1>Slide not foubd</h1>
        :
        slideImg.map(s => 
          <SwiperSlide key={s.id}><HomeSlide obj={s}/></SwiperSlide>
        )
      }
    </Swiper>
    </>
    
  )
}

export default HomeSlider