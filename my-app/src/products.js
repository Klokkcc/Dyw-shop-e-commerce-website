import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import { useContext } from 'react';
import { ChartContextProvider,ChartContext } from './chartcontext';
import {useNavigate} from 'react-router-dom';
import "./products.css";
function Products() {
    const [prize1,setPrize1]=useState("");
    const [prize2,setPrize2]=useState("");
    const [prize3,setPrize3]=useState("");
    const{data}=useContext(ChartContext);
    const navigate = useNavigate();
    const price1=()=>{
        setPrize1("200$");
    }
    const price2=()=>{
        setPrize2("300$");
    }
    const price3=()=>{
        setPrize3("400$");  
    }
    const unprice=()=>{
        setPrize1("");
        setPrize2("");
        setPrize3("");
    }
    const go1=()=>{
      navigate('/product1', {replace: true})
    }
    const go2=()=>{
      navigate('/product2', {replace: true})
    }
    const go3=()=>{
      navigate('/product3', {replace: true})
    }
    const gotohome=()=>{
      navigate('/', {replace: true})
    }
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
          <span id="qanty">{data.products.length}</span>
        </nav>
        <div id="product1" onClick={go1}><img id="pr1" onMouseOut={unprice} onMouseMove={price1} src={require("./air-jordan-1-retro-high-og-yellow-toe-taxi-sneakers-1.webp")}/><span id="prize1">{prize1}</span></div>
        <div id="product2" onClick={go2}><img id="pr2" onMouseOut={unprice} onMouseMove={price2} src={require("./Air-Jordan-11-Retro-Concord-2018-1.webp")}/><span id="prize2">{prize2}</span></div>
        <div id="product3" onClick={go3}><img id="pr3" onMouseOut={unprice} onMouseMove={price3} src={require("./NIKE-AIR-JORDAN4-MILITARY-BLACK.webp")}/><span id="prize3">{prize3}</span></div>
        <div id="stopka2">
            <span id="contact">Contact:</span>
            <span id="email">kamil888j@gmail.com</span>
            <span id="author">Klokkcc S.T.W</span>
            <span id="policy">Policy:</span>
            <span id="Termsofuse"><a href="" id="tou">Terms of use</a></span>

        </div>
    </div>
        
        
  );
}
export default Products;