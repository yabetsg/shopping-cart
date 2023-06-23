interface CartViewProps{
    itemSrc:string;
    itemTitle:string;
    itemPrice:number;
}

export const CartView = ({itemSrc,itemTitle,itemPrice}:CartViewProps)=>{
    return(
        <div className="w-[300px]">
            <div className="flex">
           <img className="w-[80px] h-[100px]" src={itemSrc} alt=''></img>
           <div className="flex flex-col text-center self-center">
             <p className="text-xs font-bold">{itemTitle}</p>
             <p>{itemPrice}</p> </div>
              </div>
        </div>
    )
   
}

//  <div className="w-[300px]">
        //     <img className="w-[250px] h-[300px]" src={itemSrc} alt=''></img>
        //     <p>{itemTitle}</p>
        //     <p>{itemPrice}</p>
        //     </div>
