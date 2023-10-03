import { getUses } from "@/toolkit/slices/categories/usesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const { uses } = useSelector((state) => state.uses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUses());
  }, []);

  return (
    <div className="p-6 lg:shadow-secondShadow rounded-md bg-white">
      <h2 className="text-primary text-center mb-3">Filter by</h2>
      {/* <div>
        <label htmlFor="by-diseases" className="block mb-4 font-bold">
          By diseases
        </label>
        <select
          id="by-diseases"
          className="block w-full p-2 mb-6 bg-[#F6F6F7] text-gray-900 border border-[#AEB4B9] focus:border-[#AEB4B9] rounded-md"
        >
          <option defaultChecked>All</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div> */}

      <div>
        <label htmlFor="by-uses" className="block mb-4 font-bold">
          By uses
        </label>
        <select
          id="by-uses"
          className="block w-full p-2 mb-6 bg-[#F6F6F7] text-gray-900 border border-[#AEB4B9] focus:border-[#AEB4B9] rounded-md"
        >
          <option defaultChecked>All</option>
          {uses?.map((use) => (
            <option key={use.id} value={use?.name}>
              {use?.name_en}
            </option>
          ))}
        </select>
      </div>

      {/* <div>
        <label htmlFor="by-ingredients" className="block mb-4 font-bold">
          By ingredients
        </label>
        <select
          id="by-ingredients"
          className="block w-full p-2 mb-6 bg-[#F6F6F7] text-gray-900 border border-[#AEB4B9] focus:border-[#AEB4B9] rounded-md"
        >
          <option defaultChecked>All</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div> */}

      <div className="flex justify-between items-center gap-2">
        <button className="border border-primary py-3 px-6 rounded-md font-bold bg-white text-primary w-full">
          Clear all
        </button>
        <button className="border border-primary py-3 px-6 rounded-md font-bold bg-primary text-white w-full">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
