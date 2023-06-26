import { Link } from "react-router-dom";
import { CartView } from "./CartView";
interface CartProps{
    children: typeof CartView
}
export const Cart = ({children,totalPrice}:any)=>{
    return(
       <div>
        <header className="p-10 text-4xl underline underline-offset-8">Your Shopping Cart</header>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] pb-6  pl-28 pr-20">

        
        {children}
        </div>
        {/* <span className="w-screen border-t-4 border-black">x</span> */}
        <div className="flex justify-around p-2 text-3xl border-t border-gray-300">
            <Link to={'/products'}><button className="bg-[rgb(84,68,43)] rounded-sm text-white w-56 p-2">Back</button></Link>
            
        <p>Total: ${totalPrice} </p>
        {children?<button className="w-56 p-2 text-white bg-black rounded-sm">Checkout</button>:'Cart is Empty'}
        </div>
        </div>  
    );
}