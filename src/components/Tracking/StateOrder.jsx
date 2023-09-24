import Delivered from "./Delivered";
import OnItsWay from "./OnItsWay";
import Prepared from "./Prepared";
import Received from "./Received";

const StateOrder = () => {
  return (
    <div className="state-tracking text-center mt-8 mx-auto lg:bg-white p-6 rounded-lg max-w-xl lg:shadow-secondShadow">
      <h2 className="text-primary mb-6 hidden lg:block">Order Tracking</h2>
      <Prepared />
    </div>
  );
};

export default StateOrder;
