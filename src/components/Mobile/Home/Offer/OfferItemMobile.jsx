import Image from "next/image";
// Import Images
import offer from "#/images/offer-2.png";
import { useTrans } from "@/locales/Helper";

const OfferItemMobile = ({ data }) => {
  const t = useTrans();
  return (
    <div className="bg-white rounded-lg pt-4 pb-10 px-4 mt-3">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <h5 className="text-primary font-normal tracking-[0.5px] text-base">
            {data?.header_title}
          </h5>
          <p className="my-1 text-sm">{data?.description}</p>
          <button className="text-sm py-2 px-8 bg-primary text-white rounded-sm mt-3 font-medium">
            {t["Get this offer"]}
          </button>
        </div>
        <div>
          <img
            className="w-full"
            src={data?.image}
            alt="offer-img"
            width={100}
            height={80}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default OfferItemMobile;
