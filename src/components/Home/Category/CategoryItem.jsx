import Image from "next/image";

const CategoryItem = ({ data }) => {
  return (
    <div>
      <div className="bg-[url('/images/bg_category.png')] bg-no-repeat bg-contain h-[140px] flex justify-center items-center">
        <Image
          src={`/images/${data.img}`}
          alt={data.title}
          width={100}
          height={80}
          priority
        />
      </div>
      <p className="mt-6 w-[150px]">{data.title}</p>
    </div>
  );
};

export default CategoryItem;
