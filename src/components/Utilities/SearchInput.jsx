import Image from "next/image";
// Import images
import searchIcon from "#/images/icons/search_icon.png";

const SearchInput = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={searchIcon}
        alt="search-icon"
        priority
        className="absolute top-1/2 -translate-y-1/2 left-2"
      />
      <input
        type="text"
        placeholder="Search products"
        className="w-full h-[40px] lg:h-[64px] bg-[#FAFBFB] border border-[#D2D5D8] rounded-md px-8 text-sm text-[#8C9196] outline-none"
      />
    </div>
  );
};

export default SearchInput;
