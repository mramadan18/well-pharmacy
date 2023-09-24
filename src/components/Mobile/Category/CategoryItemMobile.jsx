import Image from "next/image";

const CategoryItemMobile = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="bg-[url('/images/bg_category_2.png')] bg-no-repeat bg-contain w-[100px] h-[100px] flex justify-center items-start">
        <Image
          src={`/images/${data.img}`}
          alt={data.title}
          width={75}
          height={55}
          priority
        />
      </div>
      <p className="mt-2 w-[76px]">{data.title}</p>
    </div>
  );
};

export default CategoryItemMobile;
