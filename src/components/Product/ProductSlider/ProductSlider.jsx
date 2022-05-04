import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/lazy'

const ProductSlider = ({urls}) => {

    // const slide = useRef()

    return (
    <div className="product-img">
        {
            urls.length === 1
            ?
            <img src={urls} alt="Product" />
            :
            <Swiper
                modules={[ Scrollbar, Autoplay ]}
                slidesPerView={1}
                spaceBetween={10}
                scrollbar={{ draggable: true }}
                autoplay={{delay: 2500, disableOnInteraction: false}}
                speed={800}
                // ref={slide}
            >
            {
                urls.map((url, i) => 
                    <SwiperSlide 
                        key={Math.random() * i}
                    >
                        <img src={url} alt="Product" />
                    </SwiperSlide>
                )
            }
            </Swiper>
        }
    </div>
  )
}

export default ProductSlider