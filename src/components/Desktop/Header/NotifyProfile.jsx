import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// Components
import NotifyList from "./NotifyList";
import ProfileList from "./ProfileList";
// Images
import notify from "#/images/icons/notification_icon.png";
import profile from "#/images/icons/profile_icon_2.png";
import NotifyCount from "@/components/Utilities/NotifyCount";

const NotifyProfile = () => {
  // Notifications
  const notifyListRef = useRef();
  const notifyImgRef = useRef();
  const notifyAllReadRef = useRef();
  const [showNotify, setShowNotify] = useState(false);
  // Profile
  const profileMenuRef = useRef();
  const profileImgRef = useRef();
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    // Handle open & close notifications list
    window.addEventListener("click", (e) => {
      if (
        e.target !== notifyListRef &&
        e.target !== notifyImgRef.current &&
        e.target !== notifyAllReadRef.current
      ) {
        setShowNotify(false);
      }
      // Handle open & close profile list
      if (e.target !== profileMenuRef && e.target !== profileImgRef.current) {
        setShowProfile(false);
      }
    });
  }, []);
  return (
    <div className="text-sm flex justify-end items-center gap-5">
      <div
        className="relative"
        onClick={() => {
          setShowNotify((prevState) => !prevState);
        }}
      >
        <NotifyCount />
        <Image
          ref={notifyImgRef}
          src={notify}
          alt="notification-icon"
          priority
        />
        {showNotify && (
          <NotifyList
            notifyListRef={notifyListRef}
            notifyAllReadRef={notifyAllReadRef}
          />
        )}
      </div>
      <div
        className="relative"
        onClick={() => {
          setShowProfile((prevState) => !prevState);
        }}
      >
        <Image ref={profileImgRef} src={profile} alt="profile-icon" priority />

        {showProfile && <ProfileList profileMenuRef={profileMenuRef} />}
      </div>
    </div>
  );
};

export default NotifyProfile;
