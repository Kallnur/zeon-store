import React from 'react'
import NewPrice from '../../NewPrice/NewPrice';

const ProductDesc = ({info}) => {

    return (
        <div className="product-desc">
            <strong>{info.collection}</strong>
            <NewPrice perc={info.perc} price={info.price} currency={info.currency}/>
            
            <span className="product-size">Размер {info.size}</span> 
            <ul className="product-color-list">
            {
                info.colors.map(c => 
                <li key={c.rgb} className="product-color-item">
                    <span style={{background: `${c.rgb}`}}></span>
                </li>  
                )
            }
            </ul>
        </div>
    )
}

export default ProductDesc