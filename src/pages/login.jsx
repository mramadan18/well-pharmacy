import Link from "next/link";
import Image from "next/image";
// Components
import LoginSection from "@/components/Auth/LoginSection";
import LeftSection from "@/components/Desktop/Auth/LeftSection";
import TopSection from "@/components/Mobile/Auth/TopSection";
// Images
import arrowLeft from "#/images/icons/arrow-left.png";
import registerImg from "#/images/auth-blue.png";

const Login = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 min-h-[100vh] bg-white">
      <Link
        href="/"
        className="absolute top-4 left-4 bg-primary w-[50px] h-[50px] pt-2 flex justify-center items-center rounded-full"
      >
        <Image src={arrowLeft} alt="arrow-left-icon" priority />
      </Link>
      <LeftSection img={registerImg} />
      <TopSection />
      <LoginSection />
    </div>
  );
};

export default Login;
