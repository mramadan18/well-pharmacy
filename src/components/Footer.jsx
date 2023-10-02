import Image from "next/image";
import Link from "next/link";
// Import images
import logoWhite from "#/images/logo-white.png";
import telegram from "#/images/icons/telegram.png";
import whatsapp from "#/images/icons/whatsapp.png";
import messenger from "#/images/icons/messenger.png";
import viber from "#/images/icons/viber.png";

const Footer = () => {
  return (
    <section className="bg-second mt-[30px] lg:mt-[50px] text-center py-8 text-white">
      <div className="container flex justify-center items-center flex-col gap-6">
        <Image src={logoWhite} alt="logo-white-img" priority />

        <ul className="flex justify-center items-center gap-3 lg:gap-5 text-sm lg:text-lg tracking-[1px]">
          <li>
            <Link href="/">About us</Link>
          </li>
          <li>
            <Link href="/products">Our products</Link>
          </li>
          <li>
            <Link href="/">How to order</Link>
          </li>
          <li>
            <Link href="/policy">Our policy</Link>
          </li>
        </ul>
        <span className="w-full h-[1px] bg-white"></span>
        <h5 className="font-normal tracking-[1px]">Contact us</h5>
        <div className="flex justify-center items-center gap-6">
          <Image src={telegram} alt="telegram-icon" priority />
          <Image src={whatsapp} alt="whatsapp-icon" priority />
          <Image src={messenger} alt="messenger-icon" priority />
          <Image src={viber} alt="viber-icon" priority />
        </div>
      </div>
    </section>
  );
};

export default Footer;
