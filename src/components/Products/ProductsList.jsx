import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/toolkit/slices/products/productsSlice";
import Loading from "../Utilities/Loading";
import { addToCart } from "@/toolkit/slices/cart/addToCartSlice";

const ProductsList = () => {
  const { loading: loadingMakeRequest } = useSelector(
    (state) => state.addToCart
  );
  const { loading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleRequest = (formData) => {
    dispatch(addToCart(formData));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="mt-4 grid grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4 relative">
      {loading ? (
        <div className="text-center mx-auto absolute top-10 left-1/2 -translate-x-1/2">
          <Loading size={50} />
        </div>
      ) : (
        <>
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              loading={loadingMakeRequest}
              handleRequest={() =>
                handleRequest({
                  product: product.id,
                  quantity: 1,
                })
              }
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductsList;
