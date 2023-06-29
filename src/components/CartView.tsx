import uniqid from "uniqid";
interface CartViewProps {
  itemSrc: string;
  itemTitle: string;
  itemPrice: number;
  itemCount: string;
  id: string;
  products: any;
  //   handleDecrease:()=>void;
  handleIncrease: (e: any) => void;
}

export const CartView = ({
  itemSrc,
  itemTitle,
  itemPrice,
  itemCount,
  id,
  products,
  //   handleDecrease,
  handleIncrease,
}: CartViewProps) => {
  return (
    <div className="w-[350px] font-serif  ">
      <div className="flex gap-3">
        <img className="w-[190px] h-[240px]" src={itemSrc} alt=""></img>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs font-extrabold">{itemTitle}</p>
          <p>{itemPrice}</p>
          <div className="flex flex-row justify-center gap-4 border-t border-b border-t-black border-b-black">
            <button
              id={id}
              className="border-l border-r border-l-black border-r-black w-7"
            >
              -
            </button>
            <p>{itemCount}</p>
            <button
              data-products={products}
              id={id}
              onClick={handleIncrease}
              className="border-l border-r border-l-black border-r-black w-7"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
