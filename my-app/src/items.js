import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ChartContextProvider,ChartContext } from './chartcontext';
import Item from './item';
import "./chart.css";
function Items() {
 const {data}=useContext(ChartContext);
 const items=data.products;
  return (
    <div id="prchart">
      
        {items.map((m)=>{
          return(
            
            <Item message={m}></Item>
          )
          
        })

        }
</div>
);
}
export default Items;