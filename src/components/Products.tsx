import React, { useContext } from "react";
import { useState } from "react"
import { createContext } from "vm";
import { Nav } from "./Nav"
import { RouteSwitch } from "./RouteSwitch";
// import { Context } from "./Nav"
// import { Context } from "./RouteSwitch";

interface ProductsProps  {
    onClick: ()=>void;
}
  export const Context = React.createContext<string>('0');
export const Products = ({onClick}:ProductsProps)=>{
    const [itemCount, setItemCount] = useState<string>('1');
    const increment = ()=>{
        setItemCount((parseInt(itemCount)+1).toString())
    }
    // const count = useContext(Context);
    return(
        <>
                <Context.Provider value={itemCount}>
                {/* <RouteSwitch></RouteSwitch> */}
                    {/* <Nav itemCount={itemCount}/> */}
                    <button onClick={onClick}>Add (inside products)</button>
                </Context.Provider>
        
        
        {/* Item */}
       

        </>
    )
}