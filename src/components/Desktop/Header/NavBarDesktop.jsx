import Link from "next/link";
import { useRouter } from "next/router";
// Components
import OrdersCount from "@/components/Utilities/OrdersCount";
import { useSelector } from "react-redux";

const NavBarDesktop = () => {
  const router = useRouter();
  const { cart_items } = useSelector((state) => state.cartItems);
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
            href="/products"
            className={`hover:text-primary ${
              router.pathname === "/products" && "text-primary"
            }`}
          >
            Our products
          </Link>
        </li>
        <li className="relative">
          <OrdersCount />
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
