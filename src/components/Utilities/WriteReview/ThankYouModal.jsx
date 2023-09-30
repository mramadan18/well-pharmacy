import Image from "next/image";
import Link from "next/link";
// Images
import thankYou from "#/images/thank_you.png";
import Button from "../Button";
// animate
import { motion } from "framer-motion";

const ThankYouModal = ({ setThankYou }) => {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      className="flex flex-col justify-center items-center gap-6 bg-white p-4 rounded-lg w-auto lg:w-[560px] mx-4 lg:mx-0"
    >
      <h2 className="text-primary">Thank you</h2>
      <Image src={thankYou} alt="Thank you" />
      <p>Your review has been submitted successfully</p>
      <Link
        href="/all-reviews"
        className="w-full"
        onClick={() => setThankYou(false)}
      >
        <Button className="w-full">Go To Reviews Page</Button>
      </Link>
    </motion.div>
  );
};

export default ThankYouModal;
