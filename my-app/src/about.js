import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ChartContextProvider,ChartContext } from './chartcontext';
import Item from './item';
import Items from './items';

import "./chart.css";
import {  Link, useNavigate } from "react-router-dom";

function About() {
    const {data}=useContext(ChartContext);
    const [quanty,setQuanty]=useState(data.products.length);
    const navigate = useNavigate();
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
          <span id="qanty">{quanty}</span>
        </nav>
      
        <span id="description">
            This page is written only as a demonstration. <br/>
            It's fully written by Kamil Jeliński(Klokkcc).<br/>
             If you have any questions contact me by email(kamil888j@gmail.com).



        </span>
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
export default About;