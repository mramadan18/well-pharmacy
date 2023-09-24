import Image from "next/image";
import Link from "next/link";
// Images
import thankYou from "#/images/thank_you.png";
import Button from "../Button";

const ThankYouModal = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-white p-4 rounded-lg w-auto lg:w-[560px] mx-4 lg:mx-0">
      <h2 className="text-primary">Thank you</h2>
      <Image src={thankYou} alt="Thank you" />
      <p>Your review has been submitted successfully</p>
      <Link href="/" className="w-full">
        <Button className="w-full">Go To Home Page</Button>
      </Link>
    </div>
  );
};

export default ThankYouModal;
