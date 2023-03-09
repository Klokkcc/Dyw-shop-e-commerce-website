import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ChartContextProvider,ChartContext } from './chartcontext';
import "./chart.css";
import Items from "./items"
import { Await } from 'react-router-dom';
import Chart from './chart';
const Item=({message}) =>{
const {data}=useContext(ChartContext);
const[newone,setNewone]=useState(data.products)
const [vis,setVis]=useState(true);
const [ilos, setIlos]=useState(message.ilosc);
const [other,setOther]=useState(0);
const usun=()=>{
    setVis(false);
    
    setNewone( data.products.filter((element)=>element!=message));
    
    window.location.reload(false);
   
}

useEffect(()=>{
   data.products=newone;
   
   localStorage.setItem('Cart',JSON.stringify(data));
   
},[newone])

const changeq=async(e)=>{
    if(e.code==='Enter'){
        for(let i=0;i<data.products.length;i++){
            if(data.products[i].src===message.src&&data.products[i].rozmiar===message.rozmiar&&data.products[i].ilosc===message.ilosc){
               
                data.products[i].ilosc=await ilos;
               await localStorage.setItem('Cart',JSON.stringify(data));
               window.location.reload(false);
            }
        }
    }
}
return (
    <div>
     {vis &&
        <div id="item" >
              <img src={message.src} id="zdjencie"/>
              <span id="itemprice">{message.price}$</span>
              <span id="rozmiar">{message.rozmiar}</span>
              <input id="ilosc" type="number" value={ilos} min="1" max="10" onChange={(e)=>setIlos(Number(e.target.value))} onKeyDown={changeq}/>
              
              <div id="delete" onClick={usun}><span>X</span></div>
          </div>
      
    }
    </div>
);
}
export default Item;