import CategoryTagItem from "./CategoryTagItem";

const CategoriesTagsList = () => {
  return (
    <div className=" mt-4 overflow-x-scroll select-none">
      <div className="flex justify-start items-center gap-2 w-[1100px] lg:w-[1200px] pb-3">
        <CategoryTagItem name="All" active={true} />
        <CategoryTagItem name="Top 50 medicines" />
        <CategoryTagItem name="Natural oils and herbs " />
        <CategoryTagItem name="Cosmtics" />
        <CategoryTagItem name="Vitamins" />
        <CategoryTagItem name="Skin care" />
        <CategoryTagItem name="Kids" />
        <CategoryTagItem name="Sun and sea" />
        <CategoryTagItem name="Expensive drugs" />
        <CategoryTagItem name="Daily essentials" />
      </div>
    </div>
  );
};

export default CategoriesTagsList;
