import Link from "next/link";
// react phone input
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const LoginSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 pt-5 pb-10 lg:pt-0 lg:pb-0">
      <div className="text-center tracking-[1px]">
        <h2 className="mb-3">Welcome to Well+ pharmacy</h2>
        <h4 className="text-second">live healthy … live well</h4>
      </div>
      <form className="bg-mainBg p-6 rounded-lg flex flex-col justify-center items-center gap-6 w-[90%] lg:w-[440px]">
        <div className="text-center tracking-[1px]">
          <h2 className="text-primary mb-4">Sign in</h2>
          <span>
            Don’t have an account?
            <Link
              href="/register"
              className="text-[#2C6ECB] font-semibold ms-2"
            >
              Sign up
            </Link>
          </span>
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
        <div className="flex justify-between items-center w-full">
          <div>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" className="ms-2">
              Remember me
            </label>
          </div>

          <Link href="/" className="text-[#2C6ECB] font-semibold">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-sm font-semibold tracking-[1px]"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginSection;
