import { CartView } from "./CartView";
interface CartProps{
    children: typeof CartView
}
export const Cart = ({children}:{children:string})=>{
    return(
       <div>
        {children}
       </div>
    );
}