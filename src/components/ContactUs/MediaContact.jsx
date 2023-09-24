import Image from "next/image";
// Import images
import telegram from "#/images/icons/telegram.png";
import whatsapp from "#/images/icons/whatsapp.png";
import messenger from "#/images/icons/messenger.png";
import viber from "#/images/icons/viber.png";

const MediaContact = () => {
  return (
    <div className="bg-white p-6 flex flex-col justify-center items-center gap-6 text-center lg:shadow-secondShadow lg:rounded-lg">
      <h3>Social media contacts</h3>
      <p className="text-lg lg:px-16">
        If you need a help from our pharmacists or want to order a specific
        prescription contact us via
      </p>

      <div className="flex justify-center items-center gap-6">
        <Image src={telegram} alt="telegram-icon" priority />
        <Image src={whatsapp} alt="whatsapp-icon" priority />
        <Image src={messenger} alt="messenger-icon" priority />
        <Image src={viber} alt="viber-icon" priority />
      </div>
    </div>
  );
};

export default MediaContact;
