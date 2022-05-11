import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getProducts } from '../../store/reducers/product'
import { retColArr } from '../../utils/allFunc'
import Product from '../Product/Product'
import 'swiper/css/autoplay'
import 'swiper/css';

const MobBlockProduct = ({title, col}) => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)
    const renderProduct = retColArr(col, products)
  
    console.log(products)
    console.log(renderProduct)
  
    useEffect(() => {
      dispatch(getProducts(null));
    }, [])
  
    return (
      <div>
        <h1 className='new-product-title'>{title}</h1>
        <Swiper 
            modules={[Autoplay]}
            slidesPerView={1.15}
            autoplay={{delay: 5555, disableOnInteraction: false}}
            speed={700}
            spaceBetween={15}
            // className='product-group new-product-group'
        >
          {
            renderProduct.map((obj, i) => 
            <SwiperSlide  key={i + 1 * Math.random()} className='productMobSlide'>
              <Product info={obj}/>    
            </SwiperSlide>
            )
          }
        </Swiper>    
      </div>
    )
  }

export default MobBlockProduct