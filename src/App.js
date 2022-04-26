import React, { useEffect } from 'react';
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

function App() {

  const dispatch = useDispatch()

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
        <Route exact path='/product/:id' element={<ProductPage/>}/>
        <Route exact path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
