import Link from "next/link";
import { useRouter } from "next/router";
// Components
import OrdersCount from "@/components/Utilities/OrdersCount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "@/toolkit/slices/cart/cartItemsSlice";
import { useTranslation } from "next-i18next";
import {useTrans} from "@/locales/Helper"
const NavBarDesktop = () => {
  const router = useRouter();
  // const { t } = useTranslation();
  const t=useTrans()
  const dispatch = useDispatch();
  const { cart_items } = useSelector((state) => state.cartItems);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getCartItems());
    }
  }, []);

  return (
    <nav>
      <ul className="flex justify-center items-center gap-3 text-sm xl:text-lg font-medium">
        <li>
          <Link
            href="/"
            className={`hover:text-primary ${
              router.pathname === "/" && "text-primary"
            }`}
          >
            {t["Home"]}
          </Link>
        </li>
        <li>
          <Link
            href="/products/?page=1"
            className={`hover:text-primary ${
              router.pathname === "/products" && "text-primary"
            }`}
          >
            {t["Our products"]}
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
            {t["My orders"]}
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
            {t["My cart"]}
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className={`hover:text-primary ${
              router.pathname === "/contact-us" && "text-primary"
            }`}
          >
            {t["Contact us"]}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarDesktop;
