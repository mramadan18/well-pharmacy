// react phone input
import Link from "next/link";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RegisterSection = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-start items-center gap-8 pt-5 pb-10 lg:pb-0 lg:pt-20 bg-white">
      <div className="text-center tracking-[1px]">
        <h2 className="mb-3">Welcome to Well+ pharmacy</h2>
        <h4 className="text-second">live healthy … live well</h4>
      </div>
      <form className="bg-mainBg p-6 rounded-lg flex flex-col justify-center items-center gap-6 w-[90%] lg:w-[440px]">
        <div className="text-center tracking-[1px]">
          <h2 className="text-primary mb-4">Sign up</h2>
          <span>
            Already have an account?
            <Link href="/login" className="text-[#2C6ECB] font-semibold ms-2">
              Sign in
            </Link>
          </span>
        </div>

        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="name">Your Name*</label>
          <input
            id="name"
            type="text"
            placeholder="Write here"
            required
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="phone">Your Phone*</label>
          <PhoneInput
            placeholder="000 000 000 00"
            country="eg"
            disableDropdown={true}
            disableCountryCode={true}
            autoFormat={true}
            inputProps={{
              id: "phone",
              required: true,
            }}
            inputStyle={{
              width: "100%",
              height: "42px",
              fontSize: "1rem",
              border: "1px solid var(#AEB4B9);",
              borderRadius: "2px",
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="password">Your Password*</label>
          <input
            id="password"
            type="password"
            placeholder="Write here"
            required
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="hotel">Select Hotel Name*</label>
          <select
            id="hotel"
            required
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
          >
            <option value="">Select here</option>
            <option value="1">Marina sharm</option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="room">Room Number*</label>
          <input
            id="room"
            type="number"
            placeholder="Write here"
            required
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-sm font-semibold tracking-[1px]"
          onClick={() => {
            router.push("/verification");
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default RegisterSection;
