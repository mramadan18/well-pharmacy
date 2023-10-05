import Link from "next/link";
import { useRouter } from "next/router";
// Components
import OrdersCount from "@/components/Utilities/OrdersCount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "@/toolkit/slices/cart/cartItemsSlice";

const NavBarDesktop = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cart_items } = useSelector((state) => state.cartItems);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getCartItems());
    }
  }, []);

  return (
    <nav>
      <ul className="flex justify-center items-center gap-6 text-lg font-medium">
        <li>
          <Link
            href="/"
            className={`hover:text-primary ${
              router.pathname === "/" && "text-primary"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/products?page=1"
            className={`hover:text-primary ${
              router.pathname === "/products" && "text-primary"
            }`}
          >
            Our products
          </Link>
        </li>
        <li className="relative">
          {/* <OrdersCount /> */}
          <Link
            href="/orders"
            className={`hover:text-primary ${
              router.pathname === "/orders" && "text-primary"
            }`}
          >
            My orders
          </Link>
        </li>
        <li className="relative">
          <OrdersCount count={cart_items?.count} />
          <Link
            href="/cart"
            className={`hover:text-primary ${
              router.pathname === "/cart" && "text-primary"
            }`}
          >
            My cart
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className={`hover:text-primary ${
              router.pathname === "/contact-us" && "text-primary"
            }`}
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarDesktop;
