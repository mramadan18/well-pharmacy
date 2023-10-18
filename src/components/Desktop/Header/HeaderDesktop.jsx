import { useEffect, useState } from "react";
import Image from "next/image";
// Import components
import NavBarDesktop from "./NavBarDesktop";
import BtnsAuth from "../../BtnsAuth";
import NotifyProfile from "./NotifyProfile";
// Import images
import logo from "#/images/logo-1.png";
import SwitchLang from "@/components/Utilities/Lang/SwitchLang";
import Link from "next/link";

const HeaderDesktop = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    localStorage.getItem("token") ? setIsLogin(true) : setIsLogin(false);
  }, []);
  return (
    <header className="py-4 shadow-mainShadow fixed top-0 left-0 w-full z-30 bg-white hidden lg:block">
      <div className="container flex justify-between items-center gap-1">
        <Link href="/">
          <Image src={logo} alt="Well-logo" priority />
        </Link>
        <div className="flex justify-center items-center gap-4">
          <NavBarDesktop />
          <SwitchLang />
        </div>
        {isLogin ? <NotifyProfile /> : <BtnsAuth />}
      </div>
    </header>
  );
};

export default HeaderDesktop;
