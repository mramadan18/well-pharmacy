import Link from "next/link";

const OfferItemDesktop = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[234px]">
      <p className="font-bold mb-[6px] text-center text-[28px] uppercase">
        20 % off on your first purchase
      </p>
      <p className="text-center w-[45%] text-base">
        Any description (lorem ipsum)Any description (lorem ipsum)Any
        description (lorem ipsum)Any description (lorem ipsum)Any description
        (lorem ipsum)
      </p>
      <button className="bg-primary text-white font-bold py-2 px-16 rounded-sm my-5">
        Get this offer
      </button>
      <Link href="/" className="text-primary font-bold">
        Check offers
      </Link>
    </div>
  );
};

export default OfferItemDesktop;
