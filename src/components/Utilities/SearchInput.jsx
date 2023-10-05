import Image from "next/image";
// Import images
import searchIcon from "#/images/icons/search_icon.png";
import ProductsList from "../Products/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "@/toolkit/slices/products/searchSlice";
import { useRef, useState } from "react";
import Modal from "./Madal";
import { motion } from "framer-motion";

const SearchInput = ({ className }) => {
  const inputSearchBox = useRef();
  const [showSearchBox, setShowSearchBox] = useState(false);
  const { loading, products } = useSelector((state) => state.searchProducts);
  const dispatch = useDispatch();

  const handleClick = () => {
    setShowSearchBox(true);
    setTimeout(() => {
      document.getElementById("search-input").focus();
    }, 200);
  };

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
          onFocus={handleClick}
        />
      </div>

      <Modal showModal={showSearchBox} setShowModal={setShowSearchBox}>
        {showSearchBox && (
          <motion.div
            className="p-4 rounded-lg bg-white w-[96vw] lg:w-[50vw] h-[60vh] lg:h-[80vh] overflow-y-scroll"
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
          >
            <div className={`relative ${className}`}>
              <Image
                src={searchIcon}
                alt="search-icon"
                priority
                className="absolute top-1/2 -translate-y-1/2 left-2"
              />
              <input
                id="search-input"
                className="w-full h-[40px] lg:h-[64px] bg-[#FAFBFB] border border-[#D2D5D8] rounded-md px-8 text-sm text-[#8C9196] outline-none"
                type="text"
                placeholder="Search products"
                onChange={handleSearch}
              />
            </div>
            {products?.length !== 0 ? (
              <ProductsList loading={loading} products={products} />
            ) : (
              <p className="text-center mt-4">
                There is no product with this name
              </p>
            )}
          </motion.div>
        )}
      </Modal>
    </>
  );
};

export default SearchInput;
