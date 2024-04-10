import { AnimatePresence } from "framer-motion";
import SearchCardDesktop from "./Cards/SearchCard/SearchCardDesktop";
import CategoriesForFiltersDesktop from "./CategoriesForFiltersDesktop";
import FiltersSideBar from "./Search/FiltersSideBar";
import Footer from "./Footer";
import Brands from "./Brands";
import CartDesktop from "./Cart/CartDesktop";
import SearchBanner from "./Search/SearchBanner";
import { useRef } from "react";
import { CircleLoader } from "react-spinners";

const SearchDesktop = ({
  modalOpenCart,
  closeCart,
  handleFilterCategory,
  handleFilterOrder,
  handleFilterPrice,
  resetFilters,
  allFiltered,
  selectedCategory,
  handleFilterBrand,
}) => {
  const searchRef = useRef();

  return (
    <div
      ref={searchRef}
      className="w-full min-h-screen dark:bg-gradient-to-l from-[#000000] to-[#1B1B1B] hidden lg:flex flex-col"
    >
      <SearchBanner selectedCategory={selectedCategory} />
      <div>
        <CategoriesForFiltersDesktop
          handleFilterCategory={handleFilterCategory}
        />
      </div>
      <div className="pl-10 pb-20 h-full w-auto pt-2 flex">
        <FiltersSideBar
          handleFilterPrice={handleFilterPrice}
          handleFilterOrder={handleFilterOrder}
          handleFilterBrand={handleFilterBrand}
          resetFilters={resetFilters}
        />
        <div className="flex justify-center pt-10 pl-10 w-full h-auto">
          {allFiltered ? (
            <div className="grid grid-rows-auto-1fr items-start lg:grid-cols-2 lg:gap-[70px] xl:grid-cols-3 xl:gap-[60px] 2xl:grid-cols-4 2xl:gap-[80px] ">
              {allFiltered.map((product) => (
                <SearchCardDesktop
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image[0]}
                  description={product.description}
                  threeDi={product.threeDi}
                />
              ))}
            </div>
          ) : (
            <div className="w-full h-screen flex items-center justify-center">
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
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpenCart && (
          <CartDesktop
            closeCart={closeCart}
            parentHeight={
              searchRef.current ? searchRef.current.offsetHeight : 0
            }
          />
        )}
      </AnimatePresence>
      <Brands />
      <Footer />
    </div>
  );
};

export default SearchDesktop;
