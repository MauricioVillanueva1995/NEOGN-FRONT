import axios from "axios";
import { useEffect, useState } from "react";
import CardProduct from "../Cards/CardProduct";
import ProductsDesktop from "./ProductsDesktop";
import { useDispatch, useSelector } from "react-redux";
import { getProductsPerPage } from "../../redux/slices/productsPerPage";

const ProductsToModify = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const products = useSelector((state) => state.productsPerPage.productsPerPage.results);
  const dispatch = useDispatch();

  const fetchProducts = () => {
    return async function (dispatch) {
      try {
        const response = await axios.get(`/api/products?page=${currentPage}`);
        const products = response.data;
        setTotalPages(response.data.info.pages);
        return dispatch(getProductsPerPage(products));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  };

  useEffect(() => {
    dispatch(fetchProducts());

    return () => {
      dispatch(getProductsPerPage({ results: [] }));
    };
  }, [currentPage, dispatch]);

  const toggleStatus = async (productId, newStatus) => {
    try {
      await axios.put(`/api/products/update/${productId}`, {
        isAvailable: newStatus,
      });
      fetchProducts();
    } catch (error) {
      console.error("Error toggling admin status:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full max-h-screen lg:h-full">
      <div className="flex justify-center lg:hidden">
        <div className="w-auto h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16 mb-4 pb-20 pt-16 lg:hidden">
          {products?.map((el) => (
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
      <ProductsDesktop
        products={products}
        toggleStatus={toggleStatus}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
};

export default ProductsToModify;
