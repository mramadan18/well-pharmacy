import ProductCard from "./ProductCard";
import Loading from "../Utilities/Loading";

const ProductsList = ({ loading, products }) => {
  return (
    <div className="mt-4 grid grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4 relative">
      {loading ? (
        <div className="text-center mx-auto absolute top-10 left-1/2 -translate-x-1/2">
          <Loading size={50} />
        </div>
      ) : (
        <>
          {products?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductsList;
