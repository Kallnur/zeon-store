import React, { useState, useEffect } from "react";
import GetServ from "../../../components/API/GetServ";
import ButtonGet from "../../../components/UI/ButtonGet/ButtonGet";
import Product from "../../../components/Product/Product";
import classCss from "../Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/css/autoplay'
import 'swiper/css';

const MobHomeProduct = ({ Limit, Page, title, fuse }) => {

  const [dress, setDress] = useState([]);

  const getProduct = async (limit = Limit.limit, page = Page.page) => {
    if (dress.length < fuse) {
      const response = await GetServ.getProduct(limit, page);
      setDress([...dress, ...response.data]);
    }
    // console.log(dress)
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className={classCss.HomeProduct}>
      <div>
        <h1 className={classCss.HomeProductTitle}>{title}</h1>
        {
        !dress.length 
        ? 
        <h1>Product not found</h1>
        :
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.15}
          autoplay={{delay: 5555, disableOnInteraction: false}}
          speed={700}
          spaceBetween={15}
          className="homeMobSwiper"
        >
            {dress.map(prod => 
                <SwiperSlide key={prod.id * Math.random()} className="homeMobSlide"> 
                    <Product info={prod} />
                </SwiperSlide>
            )
            }
        </Swiper>
        }
        <ButtonGet
          onClick={(e) => {
            getProduct(Limit.getLimit, Page.getPage);
            e.target.disabled = true;
            e.target.style.display = "none";
          }}
        >
          Еще
        </ButtonGet>
      </div>
    </div>
  );
};

export default MobHomeProduct;
