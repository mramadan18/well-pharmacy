import { useTrans } from "@/locales/Helper";
import Link from "next/link";

const OfferItemDesktop = ({ item }) => {
  const t = useTrans();

  return (
    <div className="flex justify-center items-center flex-col h-[234px]">
      <p className="font-bold mb-[6px] text-center text-[28px] uppercase">
        {item?.header_title}
      </p>
      <p className="text-center w-[45%] text-base">{item?.description}</p>
      <button className="bg-primary text-white font-bold py-2 px-16 rounded-sm my-5">
        {t["Get this offer"]}
      </button>
      <Link href="/" className="text-primary font-bold">
        {t["Check offers"]}
      </Link>
    </div>
  );
};

export default OfferItemDesktop;
