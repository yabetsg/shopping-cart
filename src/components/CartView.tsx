import uniqid from "uniqid";
interface CartViewProps {
  itemSrc: string;
  itemTitle: string;
  itemPrice: number;
  itemCount: string;
  id:string;
//   handleDecrease:()=>void;
  handleIncrease:(e:any)=>void;
}

export const CartView = ({
  itemSrc,
  itemTitle,
  itemPrice,
  itemCount,
  id,
//   handleDecrease,
  handleIncrease
}: CartViewProps) => {
  return (
    <div className="w-[300px]">
      <div className="flex">
        <img className="w-[80px] h-[100px]" src={itemSrc} alt=""></img>
        <div className="flex flex-col ">
          <p className="text-xs font-bold">{itemTitle}</p>
          <p>{itemPrice}</p>
          <div className="flex flex-row justify-center gap-4">
            <button id={id} className="bg-gray-400">-</button>
            <p>{itemCount}</p>
            <button id={id} onClick={handleIncrease} className="bg-gray-400">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
