import { CartView } from "./CartView";
interface CartProps{
    children: typeof CartView
}
export const Cart = ({children,totalPrice}:any)=>{
    return(
       <div>
        {children}
        <p>Total:{totalPrice}</p>
        {children?<button>Checkout</button>:'Cart is Empty'}
        </div>  
    );
}