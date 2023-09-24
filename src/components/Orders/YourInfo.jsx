import Link from "next/link";

const YourInfo = () => {
  return (
    <div>
      <h3 className="mb-4">Your info</h3>
      <div className="p-6 bg-white rounded-lg font-bold flex flex-wrap lg:flex-nowrap justify-between items-start gap-2 relative">
        <div className="flex flex-wrap lg:flex-col gap-3 mt-4 lg:mt-0 lg:gap-6">
          <span>
            Name:{" "}
            <span className="text-second font-semibold">Mahmoud Ramadan</span>
          </span>
          <span>
            Room Number: <span className="text-second font-semibold">A109</span>
          </span>
        </div>
        <div className="flex flex-wrap lg:flex-col gap-3 mt-4 lg:mt-0 lg:gap-6">
          <span>
            Hotal: <span className="text-second font-semibold">Marriott</span>
          </span>
          <span>
            Phone Number:{" "}
            <span className="text-second font-semibold">01100594017</span>
          </span>
        </div>
        <Link
          href="/"
          className="flex justify-center items-center gap-3 text-primary absolute lg:static top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_269_5061)">
              <path
                d="M11.8765 1.12284L14.8779 4.12492L15.3785 3.62425C16.2072 2.79537 16.2072 1.4517 15.3785 0.622825C14.5496 -0.206306 13.2054 -0.206306 12.3764 0.622825L11.8765 1.12284Z"
                fill="#0F4392"
              />
              <path
                d="M13.4998 5.50014L10.4984 2.49806L0.974273 12.0227L0 15.9993L3.97569 15.0248L13.4998 5.50014Z"
                fill="#0F4392"
              />
            </g>
            <defs>
              <clipPath id="clip0_269_5061">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h4 className="hidden lg:block">Edit info</h4>
        </Link>
      </div>
    </div>
  );
};

export default YourInfo;
