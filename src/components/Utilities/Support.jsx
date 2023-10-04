import Image from "next/image";
import Link from "next/link";
// Images
import support from "#/images/icons/support_icon.png";

const Support = () => {
  return (
    <Link
      href="/contact-us"
      className="p-6 bg-primary fixed bottom-[50px] right-[50px] rounded-full shadow-mainShadow hidden lg:block"
    >
      <Image src={support} alt="support" priority />
    </Link>
  );
};

export default Support;
