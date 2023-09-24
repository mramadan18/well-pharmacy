import FilterTagItem from "./FilterTagItem";

const FilterTagsList = () => {
  return (
    <div className="flex justify-start items-center flex-wrap gap-4 mb-4">
      <FilterTagItem value="Diclofenac Sodium" />
      <FilterTagItem value="Sodium Chloride" />
      <FilterTagItem value="Ibuprofen" />
      <FilterTagItem value="Sodium Chloride" />
    </div>
  );
};

export default FilterTagsList;
