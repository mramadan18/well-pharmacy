import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Components
import BtnsAuth from "../BtnsAuth";
import SearchInput from "../Utilities/SearchInput";
// Import images
import logoImg from "#/images/logo-1.png";
import notification from "#/images/icons/notification_icon.png";
import profile from "#/images/icons/profile_icon.png";
import arrowLeft from "#/images/icons/arrow-left.png";
import filterIcon from "#/images/icons/filter_icon.png";
import BottomModal from "../Utilities/BottomModal";
import Filter from "../Products/Filter/Filter";
import NotifyCount from "../Utilities/NotifyCount";

const HeaderMobile = ({ bg = "#0F4392", title, logo = false, search }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className="lg:hidden py-6 rounded-b-lg"
      style={{
        backgroundColor: bg,
      }}
    >
      <div className="container flex justify-between items-center">
        <div>
          {logo ? (
            <Image src={logoImg} alt="logo" priority />
          ) : (
            <Link
              href="/"
              className="flex justify-center items-center p-1 border border-white rounded-lg"
            >
              <Image src={arrowLeft} alt="back" priority />
            </Link>
          )}
        </div>
        {title && (
          <h2 className="text-white font-semibold text-xl tracking-[1px]">
            {title}
          </h2>
        )}
        {isLogin ? (
          <div className="flex justify-between items-center gap-3 relative">
            <NotifyCount />
            <Image
              src={notification}
              alt="logo"
              priority
              className="invert-[80%] sepia-[46%] saturate-[375%] hue-rotate-[186deg] brightness-[97%] contrast[92%]"
            />
            <Image src={profile} alt="logo" priority />
          </div>
        ) : (
          <BtnsAuth />
        )}
      </div>
      {search && (
        <>
          <div className="container mt-6 flex justify-around items-center gap-2">
            <SearchInput />
            <div
              className="flex justify-center items-center gap-2 text-white tracking-[1px] text-lg border border-white py-1 px-2 rounded-md cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <Image src={filterIcon} alt="filter" priority />
              <span>Filters</span>
            </div>
          </div>
          <BottomModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Filter />
          </BottomModal>
        </>
      )}
    </header>
  );
};

export default HeaderMobile;
