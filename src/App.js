import React, { useEffect, useState } from 'react';
import './styles/fonts.css';
import './styles/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer' ;
import FloatBlock from './components/UI/FloatBlock/FloatBlock';
import ModalWin from './components/UI/ModalWin/ModalWin';
import ModalCall from './components/ModalCall/ModalCall';
import ModalDone from './components/ModalDone/ModalDone';
import RouteApp from './components/RouteApp/RouteApp';

function App() {

  const [modalVisi, setModalVisi] = useState(false)
  const [postInfoDone, setPostInfoDone] = useState(false)

  return (
    <div className="App">
      <Header/>
      <RouteApp/>
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
