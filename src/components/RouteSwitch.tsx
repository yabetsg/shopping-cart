import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { Context, Products } from "./Products";
import { Cart } from "./Cart";
import { CartView } from "./CartView";
import uniqid from 'uniqid';
//TODO: problem - adding same items to cart, increasing quantity
//TODO: when adding to cart and item already exists inside of cartViewStorage 
//TODO: increment existing items itemCount by 1

// import { Products } from "./Products";
//  export const Context = React.createContext('');
export const RouteSwitch = () => {
  const [itemCount, setItemCount] = useState("0");
  const [cartViewStorage, setCartViewStorage] = useState<React.ReactNode[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [counter, setCounter] = useState<string>('1');
  const [render,setRender] = useState<boolean>(true);
  const [id, setId] = useState(0);
  const count = useContext(Context);

  

  const handleClick = (e: any):void => {
    
    const [itemSrc, itemTitle, itemPrice] = e.target.parentNode.childNodes;
    const id = e.target.id;
    let flag =false;
    cartViewStorage.forEach(value=>{
      // console.log(value !== null && typeof value ==='object' && 'props' in value&& );
     
      
      if(typeof value === 'object' && value !== null && 'props' in value && value.props.id==id){ 
        //value is the old item
        //inside this if statement because the item is already in cart
        //if item is already in cart then replace the old item with new one (updated itemCount#)
        //       -  increment = value.props.itemCount +1
        const incrementedItemCount = (parseInt(value.props.itemCount) + 1).toString();
       
        const newCartItem = (
          <CartView
          id={id}
          //  handleDecrease={}
            handleIncrease={handleIncrease}
            itemSrc={value.props.itemSrc}
            itemTitle={value.props.itemTitle}
            itemPrice={value.props.itemPrice}
            itemCount={incrementedItemCount}
          ></CartView>
        );
        cartViewStorage.splice(cartViewStorage.indexOf(value),1,newCartItem);
        setCartViewStorage(cartViewStorage);

        render?setRender(false):setRender(true);
        
        
          flag = true;
          
      }
    })
    if(flag) return;
    // -------------- ITEM NOT IN CART ---------------------------
    
    
    setTotalPrice(totalPrice+parseFloat(itemPrice.textContent));
    let newCartItem = (
      <CartView
      id={id}
      // handleDecrease={}
        handleIncrease={handleIncrease}
        itemSrc={itemSrc.src}
        itemTitle={itemTitle.textContent}
        itemPrice={itemPrice.textContent}
        itemCount={"1"}
      ></CartView>
    );
    setCartViewStorage((prevState) => [...prevState, newCartItem]);
      
   
    
    setItemCount((parseInt(itemCount) + 1).toString());
    setId(id+1);
  };
  const handleIncrease = (e:any)=>{
    const id = e.target.id;
    console.log(cartViewStorage);
    
    cartViewStorage.forEach(value=>{
      if(typeof value === 'object' && value !== null && 'props' in value && value.props.id==id){ 
        
        const incrementedItemCount = (parseInt(value.props.itemCount) + 1).toString();
       
        const newCartItem = (
          <CartView
          id={id}
          //  handleDecrease={}
            handleIncrease={handleClick}
            itemSrc={value.props.itemSrc}
            itemTitle={value.props.itemTitle}
            itemPrice={value.props.itemPrice}
            itemCount={incrementedItemCount}
          ></CartView>
        );
        cartViewStorage.splice(cartViewStorage.indexOf(value),1,newCartItem);
        setCartViewStorage(cartViewStorage);

        render?setRender(false):setRender(true);  
      }
    })
    
    
      
  }
 useEffect(()=>{

  //re-renders updated items in cart
  
 },[render])
 useEffect(()=>{

  //re-renders updated items in cart
  // console.log('+1');
  console.log(cartViewStorage);
  
  
 },[cartViewStorage])

  return (
    <>
      <Context.Provider value={itemCount}>
        <Nav itemCount={itemCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products onClick={handleClick} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                totalPrice = {totalPrice}
                children={cartViewStorage.map((x, index) => {
                  return <div key={index}>{x}</div>;
                })}
              ></Cart>
            }
          ></Route>
        </Routes>
      </Context.Provider>
    </>
  );
};
