import { CartView } from "./CartView";
interface CartProps{
    children: typeof CartView
}
export const Cart = ({children}:any)=>{
    return(
       <div>
        {children}

        {children?<>Checkout</>:'Cart is Empty'}
       
        </div>  
    );
}