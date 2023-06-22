import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Nav } from "./Nav"
import { Context, Products } from "./Products"
import { Cart } from "./Cart";
// import { Products } from "./Products";
//  export const Context = React.createContext('');
export const RouteSwitch =()=>{
    const [itemCount, setItemCount] = useState('0');
    const count = useContext(Context);
        
    const handleClick = (e:any)=>{
      let [itemSrc, itemTitle, itemPrice] = e.target.parentNode.childNodes;

      // console.log(itemSrc);
      setItemCount((parseInt(itemCount)+1).toString());
    }
   
    
    return(
       <>
            <Context.Provider value = {itemCount}>
              <Nav itemCount={itemCount} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products onClick={handleClick} />} />
            {/* <Route path="/cart" element={<Cart></Cart>}></Route> */}
          </Routes>
            </Context.Provider>
         </>
    
    )
    
}