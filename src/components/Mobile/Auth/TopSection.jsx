import Image from "next/image";
// Images
import logo from "#/images/logo-white.png";
import authRed from "#/images/auth-red.png";

const TopSection = () => {
  return (
    <div className="lg:hidden w-full h-[400px] bg-[url('/images/bg_top_auth.png')] bg-no-repeat bg-cover bg-[center_bottom] flex flex-col justify-center items-center gap-10">
      <Image src={logo} alt="logo" priority />
      <Image src={authRed} alt="auth" priority />
    </div>
  );
};

export default TopSection;
