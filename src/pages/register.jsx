import Link from "next/link";
import Image from "next/image";
// Components
import LeftSection from "@/components/Desktop/Auth/LeftSection";
import RegisterSection from "@/components/Auth/RegisterSection";
import TopSection from "@/components/Mobile/Auth/TopSection";
// Images
import arrowLeft from "#/images/icons/arrow-left.png";
import registerImg from "#/images/auth-blue.png";

const Register = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 min-h-[100vh] bg-white relative">
      <Link
        href="/"
        className="absolute top-4 left-4 bg-primary w-[50px] h-[50px] flex justify-center items-center rounded-full"
      >
        <Image src={arrowLeft} alt="arrow-left-icon" priority />
      </Link>
      <LeftSection img={registerImg} />
      <TopSection />
      <RegisterSection />
    </div>
  );
};

export default Register;
