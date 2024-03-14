import { motion, AnimatePresence } from "framer-motion";
import Filter from "../components/Search/Filter";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoriesFilter from "../components/CategoriesForFilters";
import SearchCard from "../components/Cards/SearchCard";
import { getProducts } from "../redux/slices/productsSlice";
import { clearFiltered, getFiltered } from "../redux/slices/filteredSlice";
import { useTheme } from "../components/ThemeContext";
import SearchDesktop from "../components/SearchDesktop";
import CircleLoader from "react-spinners/CircleLoader";

const Search = ({ modalOpenCart, closeCart }) => {
  window.scrollTo(0, 0);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const allFiltered = useSelector((state) => state.filtered.filtered.results);
  const [modalFilterOpen, setModalFilterOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [filters, setFilters] = useState({
    selectedOrder: selectedOrder,
    category: selectedCategory,
    brand: selectedBrand,
    minPrice: minPrice,
    maxPrice: maxPrice,
  });

  const closeFilter = () => setModalFilterOpen(false);
  const openFilter = () => setModalFilterOpen(true);

  const buildFilterUrl = () => {
    let url = "";

    if (location.search) url = location.search.toString();
    const filterParams = [];
    for (const key in filters) {
      if (filters[key] !== "" && filters[key] !== null) {
        filterParams.push(`${key}=${filters[key]}`);
      }
    }

    if (filterParams.length > 0) url = "";
    if (filterParams.length > 0) {
      url += "?" + filterParams.join("&");
    }

    return url;
  };

  const updateFilter = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const fetchProducts = () => {
    setSelectedCategory("");
    setSelectedBrand("");
    setMinPrice(null);
    setMaxPrice(null);
    setSelectedOrder("");

    return async function (dispatch) {
      try {
        const json = await axios.get("/api/products");
        const products = json.data;
        return dispatch(getProducts(products));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  };

  const resetFilters = () => {
    setSelectedCategory("");
    setSelectedBrand("");
    setMinPrice(null);
    setMaxPrice(null);
    setSelectedOrder("");
    setFilters({
      selectedOrder: "",
      category: "",
      brand: "",
      minPrice: null,
      maxPrice: null,
    });

    navigate("/search");

    dispatch(fetchProducts());
  };

  const fetchFilteredProducts = async () => {
    try {
      const url = buildFilterUrl();
      if (url == location.search) {
        // console.log(url + " es igual que " + location.search);
        const json = await axios.get(`/api/products/filter${url}`);
        const products = json.data;
        dispatch(getFiltered(products));
        navigate(url);
      }
      if (url !== location.search) {
        // console.log(url + " no es igual que " + location.search);
        const json = await axios.get(`/api/products/filter${url}`);
        const products = json.data;
        dispatch(getFiltered(products));
        navigate(url);
        // console.log(`/api/products/filter${url}`);
      }
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  const handleFilterCategory = async (category) => {
    setSelectedCategory(category);
    updateFilter("category", category);
  };
  const handleFilterBrand = async (brand) => {
    setSelectedBrand(brand);
    updateFilter("brand", brand);
    console.log(brand);
  };

  const handleFilterOrder = async (order) => {
    console.log(order);
    setSelectedOrder(order);
    updateFilter("order", order);
  };

  const handleFilterPrice = async (minPrice, maxPrice) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    updateFilter("min", minPrice);
    updateFilter("max", maxPrice);
  };

  useEffect(() => {
    dispatch(fetchProducts());
    return () => {
      dispatch(clearFiltered());
    };
  }, [dispatch]);

  useEffect(() => {
    fetchFilteredProducts();
    return () => {
      dispatch(clearFiltered());
    };
  }, [selectedCategory, selectedBrand, selectedOrder, minPrice, maxPrice]);

  return (
    <div className="w-auto h-full max-h-screen">
      <SearchDesktop
        modalOpenCart={modalOpenCart}
        closeCart={closeCart}
        handleFilterCategory={handleFilterCategory}
        handleFilterOrder={handleFilterOrder}
        handleFilterPrice={handleFilterPrice}
        handleFilterBrand={handleFilterBrand}
        resetFilters={resetFilters}
        allFiltered={allFiltered}
        selectedCategory={selectedCategory}
      />
      <div className="max-h-screen w-auto pb-20 dark:bg-black lg:hidden">
        <div className="font-jakarta-sans w-auto flex justify-between items-center mx-5 py-3 dark:bg-black">
          <h1 className="text-stone-900 text-[18px] font-bold tracking-wide dark:text-white">
            By Category
          </h1>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => (modalFilterOpen ? closeFilter() : openFilter())}
            >
              <img
                className="w-[34px] h-[34px]"
                src={
                  theme === "dark"
                    ? "https://i.postimg.cc/kGBBZCtk/filter-alt-1.png"
                    : "https://www.svgrepo.com/show/458686/filter-alt-1.svg"
                }
              />
            </motion.button>
            <AnimatePresence
              initial={false}
              mode="wait"
              onExitComplete={() => null}
            >
              {modalFilterOpen && (
                <Filter
                  handleFilterOrder={handleFilterOrder}
                  handleFilterPrice={handleFilterPrice}
                  closeFilter={closeFilter}
                />
              )}
            </AnimatePresence>
          </div>
          {/* <FilterBar /> */}
        </div>
        <div className="w-auto h-auto m-6 backface-hidden">
          <CategoriesFilter handleFilterCategory={handleFilterCategory} />
        </div>
        <div className="w-full h-[64vh] overflow-hidden overflow-y-auto flex justify-center items-start dark:bg-black">
          <div className="w-auto h-auto p-2 grid grid-cols-1 gap-y-4 justify-center font-bold dark:bg-black">
            {allFiltered ? (
              allFiltered.map((product) => (
                <SearchCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image[0]}
                  description={product.description}
                />
              ))
            ) : (
              <div className="w-full max-h-[600px] flex items-center justify-center">
                <CircleLoader
                  color={"#DF102E"}
                  loading={1}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
