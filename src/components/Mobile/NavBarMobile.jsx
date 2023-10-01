import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// Images
import homeIcon from "#/images/icons/home_icon.png";
import productsIcon from "#/images/icons/products_icon.png";
import requestsIcon from "#/images/icons/request_icon.png";
import contactIcon from "#/images/icons/contact_icon.png";
import OrdersCount from "../Utilities/OrdersCount";

const NavBarMobile = () => {
  const router = useRouter();

  const linksData = [
    {
      id: 1,
      icon: homeIcon,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      icon: productsIcon,
      name: "Products",
      path: "/products",
    },
    {
      id: 3,
      icon: requestsIcon,
      name: "My orders",
      path: "/orders",
    },
    {
      id: 4,
      icon: contactIcon,
      name: "Contact us",
      path: "/contact-us",
    },
  ];

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
              <OrdersCount className="top-[-5px] right-[5px]" />
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
