import {createContext,useContext,useEffect,useReducer,useState} from "react";
export const ChartContext=createContext();
export const ChartContextProvider=({children})=>{
   
    
    const INITTIAL_STATE={
        
        products:JSON.parse(localStorage.getItem('Cart')).products,
        
    }
    const chartReducer=(state,action)=>{
        
        
        switch(action.type){
            case "ADD_PRODUCT":
                
                return {
                    
                    ...state,
                    products: [...action.payload],
                    
                     
                }
                
                default:
                    return state
        }

    }
    const [state,dispatch]=useReducer(chartReducer,INITTIAL_STATE);
    
    return(
<ChartContext.Provider value={{data:state,dispatch}}>
        {children}

    </ChartContext.Provider>
    );
    
};
