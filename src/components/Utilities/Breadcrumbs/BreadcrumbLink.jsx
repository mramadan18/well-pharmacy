import Link from "next/link";

const BreadcrumbLink = ({ href, children }) => {
  return (
    <li>
      <div className="flex items-center">
        <Link
          href={href}
          className="inline-flex items-center text-base font-medium text-primary hover:text-[#585859] underline"
        >
          {children}
        </Link>
        <svg
          className="w-3 h-3 text-[#585859] ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </div>
    </li>
  );
};

export default BreadcrumbLink;
