import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Products from './products';
import { ChartContextProvider } from './chartcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChartContextProvider>
  <React.StrictMode>

     <App />

 
    </React.StrictMode>
  </ChartContextProvider>
  
);


reportWebVitals();
