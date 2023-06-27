import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import { Home } from "../Home";
import { Nav } from "../Nav";
import { Item } from "../Item";
import { MemoryRouter } from "react-router-dom";
// import TestComponent from "path-to-test-component";

describe('Home component',()=>{
    it('button displays correct text',()=>{
        render(<Item itemSrc={""} itemTitle={""} itemPrice={0} id={""} onClick={function (e: any): void {
            throw new Error("Function not implemented.");
        } }/>)
        expect(screen.getByRole('button').textContent).toMatch(/Add to Cart/i)
    })
    it('renders button correctly',()=>{
        render(<MemoryRouter>
           <Nav itemCount={""}/>
           <Home/>
          </MemoryRouter>)
        // render(<Item itemSrc={""} itemTitle={""} itemPrice={0} id={""} onClick={function (e: any): void {
        //     throw new Error("Function not implemented.");
        // } }/>)
        // const button = 
        // const click = fireEvent.click()
        expect(screen.getByRole('button').textContent).toMatch(/Shop Now/i)
    })
    it('checks for button click',()=>{
        render(<MemoryRouter>
           <Nav itemCount={""}/>
           <Home/>
          </MemoryRouter>)
        // render(<Item itemSrc={""} itemTitle={""} itemPrice={0} id={""} onClick={function (e: any): void {
        //     throw new Error("Function not implemented.");
        // } }/>)
        // const button = screen.getByRole('button');
        //  const click = fireEvent.click(button);
        expect(screen.getByRole('link',{name:'Shop Now'})).toHaveAttribute('href','/products');
    })
})