import CardProduct from "../Cards/CardProduct";
import axios from "axios";
import { useEffect } from "react";
import { getProducts } from "../../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductsDesktop from "./ProductsDesktop";

const ProductsToModify = () => {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const fetchProducts = () => {
    return async function (dispatch) {
      try {
        const response = await axios.get("/api/products/filter?order=A-Z");
        const products = response.data;
        return dispatch(getProducts(products.results));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const toggleStatus = async (productId, newStatus) => {
    try {
      await axios.put(`/api/products/update/${productId}`, {
        isAvailable: newStatus,
      });
      // dispatch(getAllUsers());
    } catch (error) {
      console.error("Error toggling admin status:", error);
    }
  };

  return (
    <div className="w-full max-h-screen lg:h-full">
      <div className="flex justify-center lg:hidden">
        <div className="w-auto h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16 mb-4 pb-20 pt-16 lg:hidden">
          {products.map((el) => (
            <div key={el.id}>
              <CardProduct
                id={el.id}
                title={el.name}
                image_url={el.image[0]}
                toggleStatus={toggleStatus}
                isAvailable={el.isAvailable}
              />
            </div>
          ))}
        </div>
      </div>
      <ProductsDesktop products={products} toggleStatus={toggleStatus} />
    </div>
  );
};

export default ProductsToModify;
