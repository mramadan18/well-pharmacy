import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// react phone input
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// Toolkit
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/toolkit/slices/auth/loginSlice";
// Components
import Loading from "../Utilities/Loading";
import EyeIcon from "../Utilities/EyeIcon";
import { useTrans } from "@/locales/Helper";

const LoginSection = () => {
  const t = useTrans();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { loading, user } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const formData = {
    phone,
    password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center gap-8 pt-5 pb-10 lg:pt-0 lg:pb-0">
      <div className="text-center tracking-[1px]">
        <h2 className="mb-3"> {t["Welcome to Well+ pharmacy"]} </h2>
        <h4 className="text-second">{t["live healthy … live well"]}</h4>
      </div>
      <form
        className="bg-mainBg p-6 rounded-lg flex flex-col justify-center items-center gap-6 w-[90%] lg:w-[440px]"
        onSubmit={handleSubmit}
      >
        <div className="text-center tracking-[1px]">
          <h2 className="text-primary mb-4"> {t["Sign in"]} </h2>
          <span>
            {t["Don’t have an account?"]}

            <Link
              href="/register"
              className="text-[#2C6ECB] font-semibold ms-2"
            >
              {t["Sign up"]}
            </Link>
          </span>
        </div>

        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="phone">{t["Your Phone*"]}</label>
          <input
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
            id="number"
            type="tel"
            autoComplete="phone"
            placeholder="Write here"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="password">{t["Your Password*"]} </label>
          <div className="relative w-full">
            <input
              className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Write here"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <EyeIcon show={showPassword} setShow={setShowPassword} />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="text-[#2C6ECB] font-semibold">
            {t["Forgot password?"]}
          </Link>
        </div>

        <button
          type="submit"
          className={`bg-primary text-white w-full py-2 rounded-sm font-semibold tracking-[1px] ${
            loading && "opacity-50"
          }`}
        >
          {loading ? <Loading size={22} /> : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default LoginSection;
