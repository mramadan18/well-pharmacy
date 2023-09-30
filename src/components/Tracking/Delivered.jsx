import Image from "next/image";
// Images
import received from "#/images/received.png";
import Button from "../Utilities/Button";
import Link from "next/link";

const Delivered = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto h-1 bg-[#ECC1C1] relative delivered">
        <span
          before="Received"
          className="absolute top-1/2 -left-[16px] -translate-y-1/2 w-[16px] h-[16px] bg-second rounded-full"
        ></span>
        <span
          before="Prepared"
          className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[16px] h-[16px] bg-second rounded-full"
        ></span>
        <span
          before="On its way"
          className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[16px] h-[16px] bg-second rounded-full"
        ></span>
        <span
          before="Delivered"
          className="absolute top-1/2 left-full -translate-y-1/2 w-[16px] h-[16px] bg-second rounded-full"
        ></span>
      </div>

      <svg
        className="mx-auto mt-20"
        xmlns="http://www.w3.org/2000/svg"
        width="197"
        height="189"
        viewBox="0 0 197 189"
        fill="none"
      >
        <path
          opacity="0.2"
          d="M135.791 136.442C160.627 112.348 162.484 73.8984 139.938 50.5624C117.391 27.2265 78.9796 27.841 54.1428 51.935C29.3061 76.029 27.4494 114.479 49.9958 137.815C72.5422 161.15 110.954 160.536 135.791 136.442Z"
          fill="#0F4392"
        />
        <path
          opacity="0.2"
          d="M89.0125 187.784C37.4478 187.784 -1.7346 145.803 1.65781 94.1337C5.05022 42.4643 49.6605 0.48291 101.225 0.48291C152.79 0.48291 191.972 42.4643 188.58 94.1337C185.018 145.803 140.408 187.784 89.0125 187.784ZM100.886 2.18256C50.339 2.18256 6.40718 43.4841 3.18439 94.1337C-0.0384078 144.783 38.4655 186.085 89.0125 186.085C139.559 186.085 183.491 144.783 186.714 94.1337C189.937 43.4841 151.603 2.18256 100.886 2.18256Z"
          fill="#0F4392"
        />
        <path
          d="M80.5336 123.538L75.445 113.68C64.4197 92.264 38.9765 73.058 30.1562 67.4491L38.4677 54.8717C48.9842 61.5003 70.0171 77.817 83.0779 97.193C107.334 68.2989 141.767 38.5551 187.904 6.43164L195.706 18.3292C146.516 52.6622 111.065 83.9357 87.4881 114.19L80.5336 123.538Z"
          fill="#0F4392"
        />
      </svg>

      <p className="text-2xl mt-10 max-w-[400px] mx-auto tracking-[1px]">
        Your order has een delivered <br /> successfully. <br /> We wish you
        speedy recovery.
      </p>

      <Button className="w-full mt-5">Write a review</Button>

      <Link
        href="/"
        className="text-[#2C6ECB] font-semibold mt-4 block tracking-[1px]"
      >
        Contact us
      </Link>
    </div>
  );
};

export default Delivered;
