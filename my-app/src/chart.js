import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ChartContextProvider,ChartContext } from './chartcontext';
import Item from './item';
import Items from './items';

import "./chart.css";
import {  Link, useNavigate } from "react-router-dom";

function Chart() {
     const {data}=useContext(ChartContext);
    const [quanty,setQuanty]=useState(data.products.length);
    const navigate=useNavigate();
    const[delivery,setDelivery]=useState(0);
   
 useEffect(()=>{
  
  if(data.products.length!=0){
    setDelivery(10);
  }else{
    setDelivery(0)
  }
 },[data])
    const gotohome=()=>{
      navigate('/', {replace: true})
    }
    let sum=0;
   for(let i=0;i<data.products.length;i++){
      sum=sum+data.products[i].price*data.products[i].ilosc;
    }
    useEffect(()=>{
      if(data.products.length!=0){
        setDelivery(10);
      }else{
        setDelivery(0);
      }
      setQuanty(data.products.length)
      
    },[data])
    useEffect(()=>{
    
      

    },[Item])
    return (
    
   <div id="page">
   
        <nav id="panel">
        <input id ="search" placeholder="Search"></input>
        <div id="logo" onClick={gotohome}>DywShop</div>
          <ul id="navbars">
            <li id="products">
              <Link to="/products" id="pr" href="">Products</Link>
            </li>
            <li id="about">
              <Link to="/about" id="ab" href="">About</Link>
            </li>
            <li id="chart">
              <Link to="/chart" id="ch" href="">Cart</Link>
            </li>
           
           
          </ul>
          <span id="qanty">{quanty}</span>
        </nav>
      <Items ></Items>
        <span id="suma">Price:   {sum}$<br/><br/>

        Delivery:   {delivery}$<br/><br/>
        Total:  {sum+delivery}$
        </span>
        <button id="kup"><span>Purchase</span></button>
        <div id="stopka">
            <span id="contact">Contact:</span>
            <span id="email">kamil888j@gmail.com</span>
            <span id="author">Klokkcc S.T.W</span>
            <span id="policy">Policy:</span>
            <span id="Termsofuse"><a href="" id="tou">Terms of use</a></span>

        </div>
        
    </div>
        
        
  );
}
export default Chart;