import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ChartContextProvider,ChartContext } from './chartcontext';
import {  Link, useNavigate } from "react-router-dom";
import "./product2.css";
function Product2() {
  let s41;
  let s42;
  let s43;
  let s44;
  let s45;
  let czy=0;
  const navigate=useNavigate();
  const [size,setSize]=useState("");
  const [ilos, setIlos]=useState(1);
  const {dispatch}=useContext(ChartContext);
  const{data}=useContext(ChartContext);
  const [loaded,setLoaded]=useState(false);
  const [products,setProducts]=useState(data.products);
  useEffect(()=>{
     
     setLoaded(true);
    
  })
  if(loaded){
    s41=document.getElementById("size41");
    s42=document.getElementById("size42");
    s43=document.getElementById("size43");
    s44=document.getElementById("size44");
    s45=document.getElementById("size45");
  
  }

  const act41=()=>{
    setSize("41");
    
    s41.style.backgroundColor='black';
    s41.style.color='white';
    s42.style.backgroundColor='white';
    s42.style.color='black';
    s43.style.backgroundColor='white';
    s43.style.color='black';
    s44.style.backgroundColor='white';
    s44.style.color='black';
    s45.style.backgroundColor='white';
    s45.style.color='black';

  }
  const act42=()=>{
    setSize("42");
   
   s41.style.backgroundColor='white';
   s41.style.color='black';
   s42.style.backgroundColor='black';
   s42.style.color='white';
   s43.style.backgroundColor='white';
   s43.style.color='black';
   s44.style.backgroundColor='white';
   s44.style.color='black';
   s45.style.backgroundColor='white';
   s45.style.color='black';

  }
  const act43=()=>{
   
    setSize("43");
    
    s41.style.backgroundColor='white';
    s41.style.color='black';
    s42.style.backgroundColor='white';
    s42.style.color='black';
    s43.style.backgroundColor='black';
    s43.style.color='white';
    s44.style.backgroundColor='white';
    s44.style.color='black';
    s45.style.backgroundColor='white';
    s45.style.color='black';

   
  }
  const act44=()=>{
    setSize("44");
   
    s41.style.backgroundColor='white';
    s41.style.color='black';
    s42.style.backgroundColor='white';
    s42.style.color='black';
    s43.style.backgroundColor='white';
    s43.style.color='black';
    s44.style.backgroundColor='black';
    s44.style.color='white';
    s45.style.backgroundColor='white';
    s45.style.color='black';

  }
  const act45=()=>{
    
    setSize("45");
    s41.style.backgroundColor='white';
    s41.style.color='black';
    s42.style.backgroundColor='white';
    s42.style.color='black';
    s43.style.backgroundColor='white';
    s43.style.color='black';
    s44.style.backgroundColor='white';
    s44.style.color='black';
    s45.style.backgroundColor='black';
    s45.style.color='white';

    
  }
  const gotohome=()=>{
    navigate('/', {replace: true})
  }
  
 const addtochart=async()=>{

    await setProducts([
      ...products,
      {ilosc:ilos,rozmiar:size,price:100,src:require("./Air-Jordan-11-Retro-Concord-2018-1.webp")}
    ])
    

 }
 useEffect(() => {
  for(let i=0;i<data.products.length;i++){
    if(data.products[i].rozmiar==size&&data.products[i].price==100){
      data.products[i].ilosc=data.products[i].ilosc+ilos;
      czy=1;
      
    }
  }
  if(czy==0){
    dispatch({type:"ADD_PRODUCT",payload:products});
    
  }
  czy=0;
  
  
}, [products]);
 useEffect(()=>{
  localStorage.setItem('Cart',JSON.stringify(data));
},[data])
  return (
   <div id="page">
   
        <nav id="panel">
        <input id ="search" placeholder="Search"></input>
        <div onClick={gotohome} id="logo">DywShop</div>
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
        <img src={require("./Air-Jordan-11-Retro-Concord-2018-1.webp") } id="product"/>
        <ul id="sizes">
            <li ><div id="size41" className='size' onClick={act41}><span>41</span></div></li>
            <li ><div id="size42" className='size' onClick={act42}><span>42</span></div></li>
            <li ><div id="size43" className='size' onClick={act43}><span>43</span></div></li>
            <li ><div id="size44" className='size' onClick={act44}><span>44</span></div></li>
            <li ><div id="size45" className='size' onClick={act45}><span>45</span></div></li>

        </ul>
        <button id="btn" onClick={addtochart}>Add to Chart</button>
        <span id="title">Air Jordan 11 Retro Concord</span>
        <label for="ilosc"></label>

        <input id="number" className="ilosc" type="number"  min="1" max="10" value={ilos} onChange={(e)=>setIlos(Number(e.target.value))}/>
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
export default Product2;