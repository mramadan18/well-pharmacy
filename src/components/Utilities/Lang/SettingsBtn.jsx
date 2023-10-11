import { useState } from "react";
import Image from "next/image";
// Image
import settingsIcon from "#/images/icons/settings_icon.png";
// Components
import SwitchLang from "./SwitchLang";
import Modal from "../Madal";

const SettingsBtn = () => {
  const [showSwitch, setShowSwitch] = useState(false);
  return (
    <>
      <button
        className="settings-button fixed top-1/2 left-0 -translate-y-1/2 z-30"
        onClick={() => setShowSwitch(true)}
      >
        <Image
          src={settingsIcon}
          alt="settings"
          priority
          width={40}
          height={40}
        />
      </button>

      <Modal showModal={showSwitch} setShowModal={setShowSwitch}>
        <SwitchLang />
      </Modal>
    </>
  );
};

export default SettingsBtn;
