import React, { useState, useEffect } from "react";
import GetServ from "../../../components/API/GetServ";
import ButtonGet from "../../../components/UI/ButtonGet/ButtonGet";
import Product from "../../../components/Product/Product";
import classCss from "../Home.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { addKeyInObj } from "../../../utils/allFunc";

const HomeProduct = ({ Limit, Page, title, fuse }) => {

  const [dress, setDress] = useState([]);

  const getProduct = async ( limit = Limit.limit, page = Page.page) => {
    if (dress.length < fuse) {
      const response = await GetServ.getProduct(limit, page);
      addKeyInObj(response.data, false)
      setDress([...dress, ...response.data]);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className={classCss.HomeProduct}>
      <div>
        <h1 className={classCss.HomeProductTitle}>{title}</h1>
        {!dress.length ? (
          <h1>Product not found</h1>
        ) : (
          <TransitionGroup className={classCss.HomeProductBody}>
            {dress.map((prod, i) => (
              <CSSTransition key={prod.code} timeout={500} classNames="TCItem">
                <Product info={prod} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
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

export default HomeProduct;
