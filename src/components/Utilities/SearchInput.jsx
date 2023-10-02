import Image from "next/image";
// Import images
import searchIcon from "#/images/icons/search_icon.png";
import ProductsList from "../Products/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "@/toolkit/slices/products/searchSlice";
import { useState } from "react";

const SearchInput = ({ className }) => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const { loading, products, error } = useSelector(
    (state) => state.searchProducts
  );
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchProducts(e.target.value));
  };
  return (
    <>
      <div className={`relative ${className}`}>
        <Image
          src={searchIcon}
          alt="search-icon"
          priority
          className="absolute top-1/2 -translate-y-1/2 left-2"
        />
        <input
          className="w-full h-[40px] lg:h-[64px] bg-[#FAFBFB] border border-[#D2D5D8] rounded-md px-8 text-sm text-[#8C9196] outline-none"
          type="text"
          placeholder="Search products"
          onChange={handleSearch}
          onFocus={() => setShowSearchBox(true)}
          onBlur={() => setShowSearchBox(false)}
        />
      </div>
      {showSearchBox && (
        <div className="p-4 rounded-lg bg-white">
          {products?.length !== 0 ? (
            <ProductsList loading={loading} products={products} />
          ) : (
            <p className="text-center">There is no product with this name</p>
          )}
        </div>
      )}
    </>
  );
};

export default SearchInput;
