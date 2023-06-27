import React, { MutableRefObject, useCallback, useContext, useEffect, useRef, useState,MouseEvent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { Context, Products } from "./Products";
import { Cart } from "./Cart";
import { CartView } from "./CartView";

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
      const [itemSrc,_, itemTitle, itemPrice] = e.target.parentNode.childNodes;
      const id = e.target.id;
    
   
     let flag =false;
    cartViewStorage.forEach(value=>{
     
      if(typeof value === 'object' && value !== null && 'props' in value && value.props.id==id){ 
        const incrementedItemCount = (parseInt(value.props.itemCount) + 1).toString();
       
        const newCartItem = (
          <CartView
          id={id}
          //  handleDecrease={}
          products={[value.props.itemSrc,value.props.itemTitle,value.props.itemPrice]}
            handleIncrease={handleClick}
            itemSrc={value.props.itemSrc}
            itemTitle={value.props.itemTitle}
            itemPrice={value.props.itemPrice}
            itemCount={incrementedItemCount}
          ></CartView>
        );
        cartViewStorage.splice(cartViewStorage.indexOf(value),1,newCartItem);
        setCartViewStorage(cartViewStorage);
          setItemCount((parseInt(itemCount)+1).toString());
          const stringToNum = parseFloat(itemPrice.textContent.replace('$',''));
          setTotalPrice(parseFloat((totalPrice+stringToNum).toFixed(2)));

        render?setRender(false):setRender(true);
        
        
          flag = true;
          
      }
    })
    if(flag) return;
    // -------------- ITEM NOT IN CART ---------------------------
    
    const stringToNum = parseFloat(itemPrice.textContent.replace('$',''));
    setTotalPrice(parseFloat((totalPrice+stringToNum).toFixed(2)));
    let newCartItem = (
      <CartView
      id={id}
      // handleDecrease={}
      products={[itemSrc.src,itemTitle.textContent,itemPrice.textContent]}

        handleIncrease={handleClick}
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
  

 useEffect(()=>{


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
