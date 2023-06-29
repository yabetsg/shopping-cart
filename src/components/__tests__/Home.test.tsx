import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import { Home } from "../Home";
import { Nav } from "../Nav";
import { Item } from "../Item";
import { MemoryRouter } from "react-router-dom";
// import TestComponent from "path-to-test-component";

describe("Home component", () => {
  it("renders button correctly", () => {
    render(
      <MemoryRouter>
        <Nav itemCount={""} />
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByRole("button").textContent).toMatch(/Shop Now/i);
  });
  it("checks if Shop Now button has the right link", () => {
    render(
      <MemoryRouter>
        <Nav itemCount={""} />
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: "Shop Now" })).toHaveAttribute(
      "href",
      "/products"
    );
  });
});
