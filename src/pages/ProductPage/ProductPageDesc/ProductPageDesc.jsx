import React from "react";
import NewPrice from "../../../components/NewPrice/NewPrice";
import classCss from "../ProductPage.module.css";
import ProductPageInfo from "../ProductPageInfo/ProductPageInfo";

const ProductPageDesc = ({ info }) => {
  return (
    <div className={classCss.ProductDescBlock}>
      {
         !info
         ?
         <h1>Product not found</h1>
         :
         <>
            <h1 className={classCss.ProductTitle}>
               {info.collection}
            </h1>
            <div>
               <strong className={classCss.ProductCode}>
                  Артикул: 
                  <span>{info.code}</span>
               </strong>
               <div className={classCss.ProductColor}>
                  <span>Цвет:</span>
                  <ul className={classCss.ProductDescColor}>
                     {
                        !info.colors
                        ?
                        <h1>Colors not found</h1>
                        :
                        info.colors.map((obj) => (
                           <li key={obj.rgb} className="product-color-item">
                              <span style={{ background: `${obj.rgb}` }}></span>
                           </li>
                        ))
                     }
                  </ul>
               </div>
            </div>
            <h1 className={classCss.ProductPrice}>
            <NewPrice
               perc={info.perc}
               price={info.price}
               currency={info.currency}
            />
            </h1>
            <ProductPageInfo info={info} />
         </>
      }
    </div>
  );
};

export default ProductPageDesc;
