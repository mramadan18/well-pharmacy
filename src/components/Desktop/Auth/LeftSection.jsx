import Image from "next/image";
// Images
import logo from "#/images/logo-blue.png";

const LeftSection = ({ img }) => {
  return (
    <div className="bg-mainBg hidden lg:flex flex-col justify-start items-center gap-28 pt-20">
      <Image src={logo} alt="logo" priority />
      <Image src={img} alt="logo" priority />
    </div>
  );
};

export default LeftSection;
