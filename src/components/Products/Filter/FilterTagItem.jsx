import Image from "next/image";
// Images
import closeIcon from "#/images/icons/close_icon.png";

const FilterTagItem = ({ value }) => {
  return (
    <div className="py-1 px-1 flex justify-center items-center gap-1 border-[0.5px] border-[#979797] rounded-md text-sm">
      <span>{value}</span>
      <span className="cursor-pointer">
        <Image src={closeIcon} alt="remove" priority />
      </span>
    </div>
  );
};

export default FilterTagItem;
