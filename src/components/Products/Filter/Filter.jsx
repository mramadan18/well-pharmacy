import { useTrans } from "@/locales/Helper";
import { getUses } from "@/toolkit/slices/categories/usesSlice";
import { getProducts } from "@/toolkit/slices/products/productsSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const { query } = useRouter();
  const t = useTrans();
  const { uses } = useSelector((state) => state.uses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUses());
  }, []);

  const handleSelectChange = (event) => {
    const { value } = event.target;
    const { page } = query;
    console.log({ query, value });
    dispatch(getProducts({ page, use: value }));
  };

  return (
    <div className="p-6 lg:shadow-secondShadow rounded-md bg-white">
      <h2 className="text-primary text-center mb-3">{t["Filter by"]}</h2>
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
          {t["By uses"]}
        </label>
        <select
          onChange={handleSelectChange}
          id="by-uses"
          className="block w-full p-2 mb-6 bg-[#F6F6F7] text-gray-900 border border-[#AEB4B9] focus:border-[#AEB4B9] rounded-md"
        >
          <option defaultChecked>{t["All"]}</option>
          {uses?.map((use) => (
            <option key={use.id} value={use?.name}>
              {use?.name}
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
        <button className="border border-primary py-3 w-32 rounded-md font-bold bg-white text-primary">
          {t["Clear All"]}
        </button>
        <button className="border border-primary py-3 w-32 rounded-md font-bold bg-primary text-white">
          {t["Apply"]}
        </button>
      </div>
    </div>
  );
};

export default Filter;
