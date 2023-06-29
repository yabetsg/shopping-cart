import { useEffect, useState } from "react";

interface ItemProp {
  itemSrc: string;
  itemTitle: string;
  itemPrice: number;
  id: string;
  onClick: (e: any) => void;
}
export const Item = ({
  itemSrc,
  itemTitle,
  itemPrice,
  id,
  onClick,
}: ItemProp) => {
  return (
    <div className="flex font-serif flex-col w-[350px] pb-4 border-blue-100 border rounded-md shadow-md shadow-[rgb(38,42,16)]">
      <img
        className="bg-none self-center w-[120px] h-[170px]"
        src={itemSrc}
        alt=""
      ></img>
      <span className="w-full mt-2 border-t border-gray-300"></span>
      <p className="flex items-center justify-center font-semibold text-center min-h-[50px]">
        {itemTitle}
      </p>
      <p className="m-2 italic font-extralight text-slate-600">${itemPrice}</p>
      <button
        id={id}
        type="button"
        className="self-center w-56 p-2 text-white bg-[rgb(60,61,59)] rounded-lg"
        onClick={onClick}
      >
        Add to Cart
      </button>
    </div>
  );
};
