import { useEffect, useState } from "react";

interface ItemProp{
    itemSrc:string;
    itemTitle:string;
    itemPrice:number;
    id: string;
    onClick:(e:any)=> void;
}
export const Item =  ({itemSrc,itemTitle,itemPrice,id,onClick}:ItemProp)=>{
    
    
    return(
        <div   className="w-[200px]">
            <img className="w-[150px] h-[200px]" src={itemSrc} alt=''></img>
            <p>{itemTitle}</p>
            <p>{itemPrice}</p>
            <button id={id} type="button" className="text-white bg-slate-700" onClick={onClick}>Add to Cart</button>
            
        </div>
    )
}