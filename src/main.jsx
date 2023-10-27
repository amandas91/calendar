import { Provider } from 'react-redux';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { AppRouter } from './route/index'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../src/store/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
     <BrowserRouter>

    
         <AppRouter />
      
        
     </BrowserRouter>
     </Provider>
    
  </React.StrictMode>
)
