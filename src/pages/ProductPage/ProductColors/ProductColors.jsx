import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classCss from '../ProductPage.module.css'
import {productUpdateColor} from '../../../store/reducers/product'

const ProductColors = ({info}) => {

    const dispatch = useDispatch()
    const [colors, setColors] = useState(info.colors);
    console.log(info.colors);

    const selectColors = function(color) {
        if(color.available)  color = {...color, available: false}

        const newColors = colors.map(obj => {
            obj = {...obj, available: true}
            if(obj.rgb === color.rgb) {
                return obj = {...color}
            }
            return obj
        })
        setColors(newColors)
        dispatch(productUpdateColor(newColors))
    }

    const defaultColor = () => {
        // const temp = info.colors.filter(color => color.available === false)
        // if(!temp.length) {
            const newColors = info.colors.map((color, i) => {
                if(i === 0) color = {...color, available: false}
                    else color = {...color, available: true}
                return color
            })
            setColors(newColors)
            dispatch(productUpdateColor(newColors))
        // }
        // console.log(temp)
    }

    useEffect(() => { defaultColor() }, [])
    // useEffect(() => { defaultColor()}, [colors])

  return (
    <ul className={classCss.ProductDescColor}>
       {
          !colors.length
          ?
          <h1>Colors not found</h1>
          :
          colors.map((obj) => (
             <li 
                key={obj.rgb}
                className={!obj.available ? ["product-color-item","product-color-active"].join(' '): "product-color-item"}
                onClick={() => {selectColors(obj)}}    
            >
                <span key={obj.rgb} style={{ background: `${obj.rgb}` }}></span>
             </li>
          ))
       }
    </ul>
  )
}

export default ProductColors