import { useEffect, useState } from "react";

interface ItemProp{
    itemSrc:string;
    itemTitle:string;
    itemPrice:number;
    onClick:(e:any)=> void;
}
export const Item =  ({itemSrc,itemTitle,itemPrice,onClick}:ItemProp)=>{
    
    
    return(
        <div className="w-[200px]">
            <img className="w-[150px] h-[200px]" src={itemSrc} alt=''></img>
            <p>{itemTitle}</p>
            <p>{itemPrice}</p>
            <button type="button" className="bg-slate-700 text-white" onClick={onClick}>Add to Cart</button>
            
        </div>
    )
}