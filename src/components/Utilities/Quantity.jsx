import { useState } from "react";

const Quantity = ({ item }) => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="grid grid-cols-[40px_1fr_40px] text-lg font-bold rounded-md overflow-hidden w-full">
      <button
        className="flex justify-center items-center bg-primary text-white py-2"
        onClick={decrementCount}
      >
        -
      </button>
      <span className="text-center text-primary bg-[#eee] py-2">{count}</span>
      <button
        className="flex justify-center items-center bg-primary text-white py-2"
        onClick={incrementCount}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
