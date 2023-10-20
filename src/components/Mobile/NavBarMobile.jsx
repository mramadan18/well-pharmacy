import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// Images
import homeIcon from "#/images/icons/home_icon.png";
import productsIcon from "#/images/icons/products_icon.png";
import requestsIcon from "#/images/icons/request_icon.png";
import contactIcon from "#/images/icons/contact_icon.png";
import OrdersCount from "../Utilities/OrdersCount";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "@/toolkit/slices/cart/cartItemsSlice";
import { useTrans } from "@/locales/Helper";

const NavBarMobile = () => {
  const router = useRouter();
  const t=useTrans()

  const dispatch = useDispatch();

  const linksData = [
    {
      id: 1,
      icon: homeIcon,
      name: t["Home"],
      path: "/",
    },
    {
      id: 2,
      icon: productsIcon,
      name: t["Our products"],
      path: "/products?page=1",
    },
    {
      id: 3,
      icon: requestsIcon,
      name: t["My cart"],
      path: "/cart",
    },
    {
      id: 4,
      icon: requestsIcon,
      name: t["My orders"],
      path: "/orders",
    },
    {
      id: 5,
      icon: contactIcon,
      name: t["Contact us"],
      path: "/contact-us",
    },
  ];
  const { cart_items } = useSelector((state) => state.cartItems);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getCartItems());
    }
  }, []);

  return (
    <div className="nav-mobile fixed w-full h-[80px] bottom-0 left-0 z-50 bg-white shadow-[0_-18px_40px_rgba(0,0,0,0.12)] flex lg:hidden justify-around items-center">
      {linksData.map((link) => (
        <Link
          key={link.id}
          href={link.path}
          className={`${router.pathname === link.path && "active"} nav-item`}
        >
          <div className="box flex flex-col justify-center items-center text-sm relative">
            {link.id === 3 && (
              <OrdersCount
                className="top-[-5px] right-[5px]"
                count={cart_items.count}
              />
            )}
            <Image src={link.icon} alt={link.name} priority />
            <div>
              <span>{link.name}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavBarMobile;
