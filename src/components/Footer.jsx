import Image from "next/image";
import Link from "next/link";
// Import images
import logoWhite from "#/images/logo-white.png";
import telegram from "#/images/icons/telegram.png";
import whatsapp from "#/images/icons/whatsapp.png";
import messenger from "#/images/icons/messenger.png";
import viber from "#/images/icons/viber.png";
import { useTrans } from "@/locales/Helper";
import baseUrl from "@/baseURL";
import { useEffect, useState } from "react";

const Footer = () => {
  const t = useTrans();
  const [dataR, setdataR] = useState([]);
  const Socials = async () => {
    const { data } = await baseUrl.get(`/settings/social_media_links/`, {
      headers: { "Accept-Language": localStorage.getItem("lang") },
    });
    setdataR(data?.results);
    return data;
  };
  useEffect(() => {
    Socials();
  }, []);

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
          {dataR?.map((item) => (
            <a href={item?.link}>
              <img src={item?.icone_image} width={40} height={40} priority />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
