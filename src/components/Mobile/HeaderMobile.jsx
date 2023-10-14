import { useEffect, useRef, useState } from "react";
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
import ProfileList from "../Desktop/Header/ProfileList";
import SwitchLang from "../Utilities/Lang/SwitchLang";

const HeaderMobile = ({ bg = "#0F4392", title, logo = false, search }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileList, setShowProfileList] = useState(false);
  // Profile
  const profileMenuRef = useRef();
  const profileImgRef = useRef();
  useEffect(() => {
    localStorage.getItem("token") ? setIsLogin(true) : setIsLogin(false);
  }, []);

  useEffect(() => {
    // Handle open & close profile list
    window.addEventListener("click", (e) => {
      if (e.target !== profileMenuRef && e.target !== profileImgRef.current) {
        setShowProfileList(false);
      }
    });
  }, []);
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
          <h2 className="text-white font-semibold text-lg tracking-[1px]">
            {title}
          </h2>
        )}
         {/* <SwitchLang /> */}
        {isLogin ? (
          <div className="flex justify-between items-center gap-3 relative">
            <NotifyCount />
            <Link href="/notification">
              <Image
                src={notification}
                alt="logo"
                priority
                className="invert-[80%] sepia-[46%] saturate-[375%] hue-rotate-[186deg] brightness-[97%] contrast[92%]"
              />
            </Link>
            <Image
              ref={profileImgRef}
              src={profile}
              alt="profile"
              priority
              onClick={() => setShowProfileList(!showProfileList)}
            />
            {showProfileList && (
              <ProfileList
                profileMenuRef={profileMenuRef}
                style={{ right: "0" }}
              />
            )}
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
