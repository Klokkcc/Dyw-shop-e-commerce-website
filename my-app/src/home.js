import React, { useState,useContext } from 'react';
import {ChartContext} from "./chartcontext";
import {  Link } from "react-router-dom";

import "./home.css";
function Home() {
  const btn1="<";
  const btn2=">";
  const{data}=useContext(ChartContext);
  const [shoe,setShoe]=useState(4);
  const change=()=>{
      if(shoe==4){
        setShoe(1);
        
      }else{
        setShoe(shoe+1)
      }
  }
  const change2=()=>{
    if(shoe==1){
      setShoe(4);

    }else{
      setShoe(shoe-1)
    }
  }
  return (
   <div id="page">
   
        <nav id="panel">
        <input id ="search" placeholder="Search"></input>
        <div id="logo">DywShop</div>
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
        
        <div id="background">
        
        <button id="bt1" onClick={change}>{btn2}</button>
        <button id="bt2" onClick={change2}>{btn1}</button>
        
          {shoe===1 &&
            
            <img src={require("./pngfind.com-jordan-crying-face-png-5908804.png")} id="zdj1"/>
            
            
          }
          {shoe===2 &&
            
            <img src={require("./pngfind.com-air-jordan-png-6064333.png")} id="zdj1"/>
            
            
          }
          {shoe===3 &&
            
            <img src={require("./pngfind.com-eminem-logo-png-5729965.png")} id="zdj1"/>
            
            
          }
          {shoe===4 &&
            
            <img src={require("./pngfind.com-jordan-12-png-3874830.png")} id="zdj2"/>
            
            

          }
          <div id="tekst2">BUY WHATEVER YOU WANT</div>
          </div>
         <img src={require("./pexels-melvin-buezo-2529157.jpg")} id="pic1"/>
         <img src={require("./pexels-daniel-adesina-1445454.jpg")} id="pic2"/>
         <img src={require("./pexels-erik-mclean-9367504.jpg")} id="pic3"/>          
         <span id="desc1">Buy</span>
         <span id="desc2">Explore</span>
         <span id="desc3">Choose</span>

        <div id="stopka1">
            <span id="contact">Contact:</span>
            <span id="email">kamil888j@gmail.com</span>
            <span id="author">Klokkcc S.T.W</span>
            <span id="policy">Policy:</span>
            <span id="Termsofuse"><a href="" id="tou">Terms of use</a></span>

        </div>
        


   </div>
  );
}
export default Home;