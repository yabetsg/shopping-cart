import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import { Home } from "../Home";
import { Nav } from "../Nav";
import { Item } from "../Item";
import { MemoryRouter } from "react-router-dom";
// import TestComponent from "path-to-test-component";

describe("Nav component", () => {
  it("checks for correct elements inside of navigation", () => {
    render(
      <MemoryRouter>
        <Nav itemCount={""} />
      </MemoryRouter>
    );
    const navigation = screen.getByRole("navigation");
    const homeLink = screen.getByRole("link", { name: "Home" });
    const productsLink = screen.getByRole("link", { name: "Products" });
    expect(navigation).toContainElement(homeLink);
    expect(navigation).toContainElement(productsLink);
  });
  it("checks for correct path to links", () => {
    render(
      <MemoryRouter>
        <Nav itemCount={""} />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Home" });
    const productsLink = screen.getByRole("link", { name: "Products" });
    const cartLink = screen.getByRole("link", { name: "" });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(productsLink).toHaveAttribute("href", "/products");
    expect(cartLink).toHaveAttribute("href", "/cart");
  });
});
