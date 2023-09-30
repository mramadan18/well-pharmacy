import Image from "next/image";
// Images
import support from "#/images/icons/support_icon.png";

const Support = () => {
  return (
    <div className="p-6 bg-primary fixed bottom-[50px] right-[50px] rounded-full shadow-mainShadow hidden lg:block">
      <Image src={support} alt="support" priority />
    </div>
  );
};

export default Support;
