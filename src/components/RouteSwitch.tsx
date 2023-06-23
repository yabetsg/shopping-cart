import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Nav } from "./Nav"
import { Context, Products } from "./Products"
import { Cart } from "./Cart";
import { CartView } from "./CartView";
// import { Products } from "./Products";
//  export const Context = React.createContext('');
export const RouteSwitch =()=>{
    const [itemCount, setItemCount] = useState('0');
    const [cartViewStorage, setCartViewStorage] = useState<React.ReactNode[]>([]);
    const count = useContext(Context);
    // const cartViewStorage:any = [];
    const handleClick = (e:any)=>{ 
      let [itemSrc, itemTitle, itemPrice] = e.target.parentNode.childNodes;
      // console.log(itemSrc.src);
      // console.log(itemTitle.textContent);
      // console.log(itemPrice.textContent);
      
      
      
      let newCartItem = <CartView itemSrc={itemSrc.src} itemTitle={itemTitle.textContent} itemPrice={itemPrice.textContent}></CartView>;
      setCartViewStorage((prevState)=>[...prevState, newCartItem]);
      setItemCount((parseInt(itemCount)+1).toString());

    }
    //  console.log(cartViewStorage[0]);
    
    
    
    return(
       <>
            <Context.Provider value = {itemCount}>
              <Nav itemCount={itemCount} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products onClick={handleClick} />} />
            <Route path="/cart" element={<Cart children={cartViewStorage.map((x,index)=>{
              return <div key={index}>{x}</div>
            })} ></Cart>}></Route>
          </Routes>
            </Context.Provider>
         </>
    
    )
    
}