import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './products';
import Product1 from './product1';
import Product2 from './product2';
import Product3 from './product3';
import Chart from "./chart"

import About from './about';
import "./app.css";
function App() {

  return (
    <BrowserRouter>

    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/product1" element={<Product1/>} />
      <Route path="/product2" element={<Product2/>} />
      <Route path="/product3" element={<Product3/>} />
      <Route path="/chart" element={<Chart/>} />
      <Route path="/about" element={<About/>}/>
    </Routes>


    </BrowserRouter>
   



        
      
    
       

       
    
   

  );
}

export default App;
