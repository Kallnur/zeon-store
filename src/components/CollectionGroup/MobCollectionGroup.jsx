import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import GetServ from '../API/GetServ'
import Collection from '../Collection/Collection';
import ButtonGet from '../UI/ButtonGet/ButtonGet';

const MobCollectionGroup = ({getBtn, Limit, Page, fuse}) => {

    const [collections, setCollections] = useState([]);

    const GetCollection = async (limit = Limit.limit, page = Page.page) => {
        if(collections.length < fuse){
            const respone = await GetServ.GetCollection(limit, page);
            setCollections([...collections, ...respone.data])
        }
    }

    useEffect(() => {
        GetCollection();
    }, [])

  return (
    <div>
        {
            !collections.length
            ?
            <h1>Collections not found</h1>
            :
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1.15}
              autoplay={{delay: 5555, disableOnInteraction: false}}
                speed={700}
                spaceBetween={15}
                className="homeMobSwiper"
            >
                {collections.map(col => 
                    <SwiperSlide key={col.id * Math.random()}  className="homeMobSlide">
                        <Collection info={col} />  
                    </SwiperSlide>
                )}              
            </Swiper>
        }
        {
            getBtn
            ?
            <ButtonGet onClick={(e) => {
                GetCollection(Limit.getLimit, Page.getPage)
                e.target.disabled = true
                e.target.style.display = "none"
            }}>
                Еще
            </ButtonGet>
            :
            null
        }  
    </div>
  )
}

export default MobCollectionGroup