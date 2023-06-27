import { useContext, useEffect, useState } from "react";
import { Item } from "./Item"
import { Nav } from "./Nav"
import { Context } from "./Products";
import homeBg from '../imgs/home-bg.png'
import bg from '../imgs/bgg.png'
import { Link } from "react-router-dom";
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
        <div className="flex justify-around m-6 bg-[rgb(244,246,245)] rounded-2xl">

       
          <div className="flex flex-col items-center justify-center max-w-md gap-5">
             <h1 className="font-['TTNormsBlack','ui-serif','Georgia'] text-8xl max-w-sm">LET'S EXPLORE UNIQUE CLOTHES.</h1>
             <p className="font-serif">Live for influencial and innovative fashion.</p>
             <button className="w-56 h-12 p-2 text-lg font-bold text-white bg-black rounded-3xl hover:scale-110"><Link to={'/products'}>Shop Now</Link></button>
            </div>  
            <img alt="" src={bg} className="w-[450px] h-[600px] shrink-0 "></img>
        </div>
        
        </>
    )
}