import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { firebase, auth, firestore} from './firebase';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Context.Provider value={{firebase, auth, firestore}}>
        <BrowserRouter>
          <App />
        </BrowserRouter>      
      </Context.Provider>  
    </Provider>
  // </React.StrictMode>

);