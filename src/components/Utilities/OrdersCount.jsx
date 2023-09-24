const OrdersCount = ({ className = "top-[-15px] right-[-10px]" }) => {
  return (
    <span
      className={`absolute w-[20px] h-[20px] bg-second text-white ${className} rounded-full text-sm flex justify-center items-center`}
    >
      2
    </span>
  );
};

export default OrdersCount;
