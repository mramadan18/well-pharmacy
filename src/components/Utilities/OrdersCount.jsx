const OrdersCount = ({
  className = "top-[-15px] right-[-10px]",
  count = "0",
}) => {
  return (
    <span
      className={`absolute w-[20px] h-[20px] bg-second text-white ${className} rounded-full text-sm flex justify-center items-center`}
    >
      {count}
    </span>
  );
};

export default OrdersCount;
