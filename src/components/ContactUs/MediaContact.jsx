import Image from "next/image";
// Import images
import telegram from "#/images/icons/telegram.png";
import whatsapp from "#/images/icons/whatsapp.png";
import messenger from "#/images/icons/messenger.png";
import viber from "#/images/icons/viber.png";
import { useTrans } from "@/locales/Helper";
import { useEffect, useState } from "react";
import baseUrl from "@/baseURL";

const MediaContact = () => {
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
    <div className="bg-white p-6 flex flex-col justify-center items-center gap-6 text-center lg:shadow-secondShadow lg:rounded-lg">
      <h3>Social media contacts</h3>
      <p className="text-lg lg:px-16">
        {
          t[
            "If you need a help from our pharmacists or want to order a specific prescription contact us via"
          ]
        }
      </p>

      <div className="flex justify-center items-center gap-6">
        {dataR?.map((item) => (
          <a href={item?.link}>
            {" "}
            <Image
              src={item?.icone_image}
              alt="telegram-icon"
              width={40}
              height={40}
              priority
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MediaContact;
