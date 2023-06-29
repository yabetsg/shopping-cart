import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "vm";
import { Nav } from "./Nav";
import { RouteSwitch } from "./RouteSwitch";
import { Item } from "./Item";

interface ProductsProps {
  onClick: (e: any) => void;
}
export const Context = React.createContext<string>("0");
export const Products = ({ onClick }: ProductsProps) => {
  const [data, setData] = useState<Array<any>>([]);
  const count = useContext(Context);
  const menCategory = "men's clothing";
  const womenCategory = "women's clothing";
  useEffect(() => {
    Promise.all([
      fetch(`https://fakestoreapi.com/products/category/${menCategory}`).then(
        (res) => res.json()
      ),
      fetch(`https://fakestoreapi.com/products/category/${womenCategory}`).then(
        (res) => res.json()
      ),
    ]).then(([json1, json2]) => {
      setData([...json1, ...json2]);
    });
  }, []);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-2 p-4">
      {data.map((item, index) => {
        return (
          <Item
            id={index.toString()}
            key={index}
            itemSrc={item?.image}
            itemPrice={item?.price}
            itemTitle={item?.title}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};
