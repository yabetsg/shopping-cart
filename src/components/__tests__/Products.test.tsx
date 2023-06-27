import { MemoryRouter } from "react-router-dom";
import { Nav } from "../Nav";
import { Item } from "../Item";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Products Compenent", () => {
  it("checks if add to cart button works", () => {
    const handleClick = jest.fn();

    render(
      <MemoryRouter>
        <Item
          itemSrc={""}
          itemTitle={""}
          itemPrice={0}
          id={""}
          onClick={handleClick}
        ></Item>
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: "Add to Cart" });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
