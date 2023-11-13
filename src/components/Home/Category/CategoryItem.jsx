import Image from "next/image";
import Link from "next/link";

const CategoryItem = ({ data }) => {
  return (
    <Link href={`/categories/${data?.id}`}>
      <div className="bg-[url('/images/bg_category.png')] bg-no-repeat bg-contain h-[140px] flex justify-center items-center">
        <img
          src={data.icon_image || "/images/not_found.png"}
          alt={data.name}
          width={100}
          height={80}
          
        />
      </div>
      <p className="mt-6 w-[150px]">{data.name}</p>
    </Link>
  );
};

export default CategoryItem;
