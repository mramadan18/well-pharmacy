import Button from "../Utilities/Button";

const PlaceOrder = ({ className }) => {
  return (
    <div className={`bg-white py-6 px-4 ${className}`}>
      <div className="flex justify-start items-center gap-2 mb-3">
        <span className="bg-primary text-white flex justify-center items-center w-[32px] h-[32px] rounded-full">
          2
        </span>
        <p className="text-primary text-lg">Products have been selected</p>
      </div>
      <Button className="w-full">Place order</Button>
      <p className="text-second text-sm text-center mt-3">
        Note that: your order will not be confirmed before you receive a call
        from us to let you know your order price to confirm.
      </p>
    </div>
  );
};

export default PlaceOrder;
