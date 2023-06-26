import React, { MutableRefObject, useCallback, useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { Context, Products } from "./Products";
import { Cart } from "./Cart";
import { CartView } from "./CartView";
import uniqid from 'uniqid';
// when clicking + simulate "add to cart click"
// import { Products } from "./Products";
//  export const Context = React.createContext('');
export const RouteSwitch = () => {
  const [itemCount, setItemCount] = useState("0");
  const [cartViewStorage, setCartViewStorage] = useState<React.ReactNode[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [counter, setCounter] = useState<string>('1');
  const [render,setRender] = useState<boolean>(true);
  const [id, setId] = useState(0);
  const [incrementedItemCount, setIncrementedItemCount] = useState('');
  const count = useContext(Context);
  
  

  const handleClick = (e: any):void => {
    // console.log(e.target.parentNode.childNodes);
    
    const [itemSrc,_, itemTitle, itemPrice] = e.target.parentNode.childNodes;
    console.log(itemPrice.textContent.replace('$',''));
    
    const id = e.target.id;
    let flag =false;
    // console.log(itemPrice);
    
    cartViewStorage.forEach(value=>{
     
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
          setItemCount((parseInt(itemCount)+1).toString());
          setTotalPrice(totalPrice+parseFloat(itemPrice.textContent.replace('$','')));

        render?setRender(false):setRender(true);
        
        
          flag = true;
          
      }
    })
    if(flag) return;
    // -------------- ITEM NOT IN CART ---------------------------
    
    
    setTotalPrice(totalPrice+parseFloat(itemPrice.textContent.replace('$','')));
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
  const handleIncrease = ((e:any) =>{
    const id = e.target?.id;
    cartViewStorage.forEach(value=>{
     
      
      if(typeof value === 'object' && value !== null && 'props' in value && value.props.id==id){ 
        console.log('inside if');
        setIncrementedItemCount((parseInt(value.props.itemCount) + 1).toString());
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
          console.log(render);
          
        render?setRender(false):setRender(true);  
      }
    })
    
  });
 useEffect(()=>{

  
  console.log('render change');
  
 },[render])
 

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
