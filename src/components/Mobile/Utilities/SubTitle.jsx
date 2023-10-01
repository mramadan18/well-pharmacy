import Link from "next/link";

const SubTitle = ({ title, link, href, className }) => {
  return (
    <div className={`flex lg:hidden justify-between items-center ${className}`}>
      <h5>{title}</h5>
      <Link href={href || "/"} className="text-[#2C6ECB] font-bold">
        {link}
      </Link>
    </div>
  );
};

export default SubTitle;
