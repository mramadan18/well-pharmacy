import CategoryTagItem from "./CategoryTagItem";

const CategoriesTagsList = () => {
  return (
    <div className="mt-4 overflow-x-scroll select-none">
      <div className="flex justify-start items-center gap-2 w-[1100px] lg:w-[1200px] pb-3">
        <CategoryTagItem name="All" href="/products" active />
        <CategoryTagItem name="Top 50 medicines" href="/categories/13" />
        <CategoryTagItem name="Natural oils and herbs" href="/categories/14" />
        <CategoryTagItem name="Cosmtics" href="/categories/15" />
        <CategoryTagItem name="Vitamins" href="/categories/16" />
        <CategoryTagItem name="Skin care" href="/categories/17" />
        <CategoryTagItem name="Kids" href="/categories/18" />
        <CategoryTagItem name="Sun and sea" href="/categories/19" />
        <CategoryTagItem name="Expensive drugs" href="/categories/20" />
        <CategoryTagItem name="Daily essentials" href="/categories/21" />
      </div>
    </div>
  );
};

export default CategoriesTagsList;
