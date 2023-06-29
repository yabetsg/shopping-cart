import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Products";
interface NavProps {
  itemCount: string;
}

export const Nav = ({ itemCount }: NavProps) => {
  const count = useContext(Context);
  return (
    <nav className="flex justify-between px-16 py-5 text-4xl bg-[rgb(20,18,4)] text-white">
      <header>
        <Link
          className="font-['TTNormsBlack','ui-serif','Georgia'] text-5xl"
          to="/"
        >
          fashion
        </Link>
      </header>
      <div className="flex ">
        <ul className="flex flex-row items-center gap-10 text-base ">
          <li>
            <Link className="hover:underline" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/products">
              Products
            </Link>
          </li>
          <span className="flex gap-1 text-sm font-bold hover:translate-y-[-2px]">
            <li className="flex self-center">
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>
            </li>
            <p className="items-start p-0 text-sm font-medium text-red-500">
              {itemCount}
            </p>
          </span>
        </ul>
      </div>
    </nav>
  );
};
