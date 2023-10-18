import Image from "next/image";
import Link from "next/link";
// Import images
import logoWhite from "#/images/logo-white.png";
import telegram from "#/images/icons/telegram.png";
import whatsapp from "#/images/icons/whatsapp.png";
import messenger from "#/images/icons/messenger.png";
import viber from "#/images/icons/viber.png";
import { useTranslation } from "react-i18next";
import { useTrans } from "@/locales/Helper";

const Footer = () => {
  // const { t } = useTranslation();
  const t=useTrans()

  return (
    <section className="bg-second mt-[30px] lg:mt-[50px] text-center py-8 text-white">
      <div className="container flex justify-center items-center flex-col gap-6">
        <Image src={logoWhite} alt="logo-white-img" priority />

        <ul className="flex justify-center items-center gap-3 lg:gap-5 text-sm lg:text-lg tracking-[1px]">
          <li>
            <Link href="/">{t["About us"]}</Link>
          </li>
          <li>
            <Link href="/products">{t["Our products"]}</Link>
          </li>
          <li>
            <Link href="/">{t["How to order"]}</Link>
          </li>
          <li>
            <Link href="/policy">{t["Our policy"]}</Link>
          </li>
        </ul>
        <span className="w-full h-[1px] bg-white"></span>
        <h5 className="font-normal tracking-[1px]">{t["Contact us"]}</h5>
        <div className="flex justify-center items-center gap-6">
          <Image
            src={telegram}
            alt="telegram-icon"
            width={40}
            height={40}
            priority
          />
          <Image
            src={whatsapp}
            alt="whatsapp-icon"
            width={40}
            height={40}
            priority
          />
          <Image
            src={messenger}
            alt="messenger-icon"
            width={40}
            height={40}
            priority
          />
          <Image src={viber} alt="viber-icon" width={40} height={40} priority />
        </div>
      </div>
    </section>
  );
};

export default Footer;
