import React, { useEffect, useState } from 'react';
import './styles/fonts.css';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer' ;
import AboutUs from './pages/AboutUs/AboutUs';
import Collection from './pages/Collection/Collection';
import News from './pages/News/News';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Favorites from './pages/Favorites/Favorites';
import Basket from './pages/Basket/Basket';
import Help from './pages/Help/Help';
import PublicOffer from './pages/PublicOffer/PublicOffer';
import CollectionProduct from './pages/CollectionProduct/CollectionProduct';
import ProductPage from './pages/ProductPage/ProductPage';
import { useDispatch } from 'react-redux';
import { getProducts } from './store/product';
import FloatBlock from './components/UI/FloatBlock/FloatBlock';
import ModalWin from './components/UI/ModalWin/ModalWin';
import ModalCall from './components/ModalCall/ModalCall';
import ModalDone from './components/ModalDone/ModalDone';
import ResSearch from './pages/ResSearch/ResSearch';

function App() {

  const dispatch = useDispatch()
  const [modalVisi, setModalVisi] = useState(false)
  const [postInfoDone, setPostInfoDone] = useState(false)

  if(modalVisi) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about-us' element={<AboutUs/>} />
        <Route exact path='/collection' element={<Collection/>} />
        <Route exact path='/collection/:id' element={<CollectionProduct/>} />
        <Route exact path='/news' element={<News/>} />
        <Route exact path='/favorites' element={<Favorites/>} />
        <Route exact path='/basket' element={<Basket/>} />
        <Route exact path='/help' element={<Help/>}/>
        <Route exact path='/offer' element={<PublicOffer/>}/>
        <Route exact path='/res-search/:id' element={<ResSearch/>}/>
        <Route exact path='/product/:id' element={<ProductPage/>}/>
        <Route exact path='*' element={<PageNotFound/>} />
      </Routes>
      <ModalWin visi={modalVisi} setVisi={setModalVisi}>
        {
          !postInfoDone
          ?
          <ModalCall done={setPostInfoDone}/>
          :
          <ModalDone setVisi={setModalVisi}/>
        }
      </ModalWin>
      <FloatBlock setVisi={setModalVisi}/>
      <Footer/>
    </div>
  );
}

export default App;
