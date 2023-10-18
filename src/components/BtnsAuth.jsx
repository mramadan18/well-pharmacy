import Link from "next/link";

const BtnsAuth = () => {
  return (
    <div className="text-sm flex justify-end items-center gap-2 font-semibold">
      <Link
        href="/login"
        className="border-2 border-primary text-primary bg-white text-xs px-1 lg:px-4 h-[34px] lg:h-[44px] flex justify-center items-center rounded-md tracking-[0.5px]"
      >
        Sign in
      </Link>
      <Link
        href="/register"
        className="border border-white text-white bg-primary text-xs px-1 lg:px-4 h-[34px] lg:h-[44px] flex justify-center items-center rounded-md tracking-[0.5px]"
      >
        Sign up
      </Link>
    </div>
  );
};

export default BtnsAuth;
