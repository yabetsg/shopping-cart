import { useContext, useEffect, useState } from "react";
import { Item } from "./Item"
import { Nav } from "./Nav"
import { Context } from "./Products";
export const Home =  ()=>{
    const [data,setData] = useState<Array<any>>([]);
    const count = useContext(Context);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json()).then((json)=>{
         setData(json)

    }
    )
    },[])
    
    
    return(
        <>
                 {/* <Nav itemCount={count}/> */}
        <h1 className="bg-red-300">Home</h1>
        
        </>
    )
}