import Link from "next/link";
import { useRouter } from "next/router";

const CategoryTagItem = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className={`${
        `/${router.pathname.split("/")[1]}/${router.query.categoryId}` ===
        `/categories/${data.id}`
          ? "text-white bg-second"
          : "text-black bg-[rgba(221,23,23,0.20)]"
      } py-1 px-2 rounded-md tracking-[1px] cursor-pointer`}
    >
      <Link href={`/categories/${data.id}`} className="w-full h-full block">
        {data.name}
      </Link>
    </div>
  );
};

export default CategoryTagItem;
