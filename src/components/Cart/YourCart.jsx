// import { getCartItems } from "@/toolkit/slices/cart/cartItemsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Utilities/Loading";
import CartItem from "./CartItem";
import { getCartItems } from "@/toolkit/slices/cart/cartItemsSlice";

const YourCart = () => {
  const { loading, cart_items } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <div className="mt-6">
      <h3 className="mb-4">Your items</h3>
      <>
        {cart_items?.results?.length === 0 ? (
          <p className="text-center">Not found items in cart</p>
        ) : (
          <>
            {loading ? (
              <div className="text-center">
                <Loading />
              </div>
            ) : (
              <>
                {cart_items.results?.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default YourCart;
