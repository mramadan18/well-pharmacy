import Image from "next/image";
import Link from "next/link";

const CategoryItem = ({ data }) => {
  return (
    <Link href={`/products/${data?.id}`}>
      <div className="bg-[url('/images/bg_category.png')] bg-no-repeat bg-contain h-[140px] flex justify-center items-center">
        <Image
          src={data.icon_image || "/"}
          alt={data.name_en}
          width={100}
          height={80}
          priority
        />
      </div>
      <p className="mt-6 w-[150px]">{data.name_en}</p>
    </Link>
  );
};

export default CategoryItem;
