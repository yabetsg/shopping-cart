import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Nav } from "./Nav"
import { Context, Products } from "./Products"
// import { Products } from "./Products";
//  export const Context = React.createContext('');
export const RouteSwitch =()=>{
    const [itemCount, setItemCount] = useState('0');
    const count = useContext(Context);
        

   
    
    return(
       <>
            <Context.Provider value = {itemCount}>
              <Nav itemCount={itemCount} />
          {/* <button onClick={()=>setItemCount((parseInt(itemCount)+1).toString())}>Inside router</button> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products onClick={()=>setItemCount((parseInt(itemCount)+1).toString())} />} />
          </Routes>
            </Context.Provider>
         </>
    
    )
    
}