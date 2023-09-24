import OrderItem from "./OrderItem";

const YourOrders = () => {
  return (
    <div className="mt-6">
      <h3 className="mb-4">Your orders</h3>
      <OrderItem />
      <OrderItem />
    </div>
  );
};

export default YourOrders;
