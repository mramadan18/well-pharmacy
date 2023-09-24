import CategoryItemMobile from "@/components/Mobile/Category/CategoryItemMobile";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import ExploreProducts from "@/components/Utilities/ExploreProducts";

const categoriesData = [
  {
    id: 1,
    img: "category-2.png",
    title: "All medicines",
  },
  {
    id: 2,
    img: "category-1.png",
    title: "Top 50 medicines",
  },
  {
    id: 3,
    img: "category-3.png",
    title: "Natural oils and herbs",
  },
  {
    id: 4,
    img: "category-4.png",
    title: "Cosmetics",
  },
  {
    id: 5,
    img: "category-5.png",
    title: "Vitamins",
  },
  {
    id: 6,
    img: "category-6.png",
    title: "Skin care",
  },
  {
    id: 7,
    img: "category-2.png",
    title: "All medicines",
  },
  {
    id: 8,
    img: "category-1.png",
    title: "Top 50 medicines",
  },
  {
    id: 9,
    img: "category-3.png",
    title: "Natural oils and herbs",
  },
  {
    id: 10,
    img: "category-4.png",
    title: "Cosmetics",
  },
  {
    id: 11,
    img: "category-5.png",
    title: "Vitamins",
  },
  {
    id: 12,
    img: "category-6.png",
    title: "Skin care",
  },
];

const Categories = () => {
  return (
    <div>
      <HeaderMobile bg="#0F4392" title="Categories" btnBack={true} />
      <div className="container mt-6">
        <ExploreProducts />
        <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
          {categoriesData.map((category) => (
            <CategoryItemMobile key={category.id} data={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
