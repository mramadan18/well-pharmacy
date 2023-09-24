import Link from "next/link";

const BreadcrumbActive = ({ href, children }) => {
  return (
    <li>
      <div className="flex items-center">
        <Link
          href={href}
          className="text-base font-medium text-[#585859] hover:text-primary"
        >
          {children}
        </Link>
      </div>
    </li>
  );
};

export default BreadcrumbActive;
