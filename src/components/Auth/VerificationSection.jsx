import Link from "next/link";

import VerificationInput from "react-verification-input";

const VerificationSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 pt-5 pb-10 lg:pt-0 lg:pb-0">
      <div className="text-center tracking-[1px]">
        <h2 className="mb-3">Welcome to Well+ pharmacy</h2>
        <h4 className="text-second">live healthy … live well</h4>
      </div>
      <form className="bg-mainBg p-6 rounded-lg flex flex-col justify-center items-center gap-6 w-[90%] lg:w-[440px]">
        <div className="text-center tracking-[1px]">
          <h2 className="text-primary mb-4">Verification</h2>
          <span className="text-lg block">
            Please enter the code that has been sent to
            <span className="text-[#2C6ECB] font-semibold ms-2">
              22655987411236
            </span>
          </span>
        </div>
        <VerificationInput length={4} placeholder="0" />
        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-sm font-semibold tracking-[1px]"
        >
          Verify
        </button>

        <div className="flex justify-around items-center w-full">
          <div>Didn’t receive the code?</div>

          <Link href="/" className="text-[#2C6ECB] font-semibold">
            Resend code
          </Link>
        </div>
      </form>
    </div>
  );
};

export default VerificationSection;
