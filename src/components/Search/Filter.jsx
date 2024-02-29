import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { useState } from "react";
import { useTheme } from "../ThemeContext";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, damping: 25, stiffness: 500 },
  exit: { y: "100vh", opacity: 0 },
};

const Filter = ({ closeFilter, handleFilterOrder, handleFilterPrice }) => {
  const {theme} = useTheme();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sortBy, setSortBy] = useState("");

  const handleSortOrderChange = (value) => {
    setSortBy(value);
  };

  const applyFilters = () => {
    const filteredMinPrice = minPrice === 0 ? null : minPrice;
    const filteredMaxPrice = maxPrice === 0 ? null : maxPrice;
    handleFilterOrder(sortBy);
    handleFilterPrice(filteredMinPrice, filteredMaxPrice);
    closeFilter()
  };

  return (
    <Backdrop closeFilter={closeFilter}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-auto h-[min(50%,500px)] m-auto px-2 rounded-xl flex flex-col items-center"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-[325px] h-[500px] p-2 bg-slate-50 dark:bg-darkCard flex flex-col items-center justify-center gap-y-4 rounded-[30px]">
          <div className="w-full h-auto flex items-center justify-end gap-[80px] px-4">
            <p className="font-jakarta-sans text-xl text-black dark:text-white">Filter</p>
            <button className="w-auto h-auto" onClick={closeFilter}>
              <img
                className="w-[30px] h-[30px]"
                src={theme === "dark"? "https://i.postimg.cc/Y2mQRcQJ/close-x-svgrepo-com.png":"https://www.svgrepo.com/show/499592/close-x.svg"}
              />
            </button>
          </div>
          <div className="w-auto h-auto flex flex-col justify-center items-center gap-y-3 dark:text-white">
            <div className="text-md">Sort By</div>
            <div className="w-auto h-auto flex justify-center items-center gap-4">
              <button
                onClick={() => handleSortOrderChange("A-Z")}
                className={`w-auto h-auto py-2 px-3 border-zinc-400 border rounded-lg text-sm font-thin ${
                  sortBy === "A-Z" ? "bg-heroColor text-white" : ""
                }`}
              >
                A-Z
              </button>
              <button
                onClick={() => handleSortOrderChange("Z-A")}
                className={`w-auto h-auto py-2 px-3 border-zinc-400 border rounded-lg text-sm font-thin ${
                  sortBy === "Z-A" ? "bg-heroColor text-white" : ""
                }`}
              >
                Z-A
              </button>
            </div>
            <div className="w-auto h-auto flex justify-center items-center gap-4">
              <button
                onClick={() => handleSortOrderChange("Newest")}
                className={`w-[80px] h-auto py-2 px-3 border-zinc-400 border rounded-lg text-sm font-thin ${
                  sortBy === "Newest" ? "bg-heroColor text-white" : ""
                }`}
              >
                Newest
              </button>
              <button
                onClick={() => handleSortOrderChange("Oldest")}
                className={`w-[80px] h-auto py-2 px-3 border-zinc-400 border rounded-lg text-sm font-thin ${
                  sortBy === "Oldest" ? "bg-heroColor text-white" : ""
                }`}
              >
                Oldest
              </button>
            </div>
            <div className="w-auto h-auto flex justify-center items-center gap-4">
              <button
                onClick={() => handleSortOrderChange("price-high")}
                className={`w-auto h-auto py-2 px-3 border-zinc-400 border rounded-lg text-sm font-thin ${
                  sortBy === "price-high" ? "bg-heroColor text-white" : ""
                }`}
              >
                High Price
              </button>
              <button
                onClick={() => handleSortOrderChange("price-low")}
                className={`w-auto h-auto py-2 px-3 border-zinc-400 border rounded-lg text-sm font-thin ${
                  sortBy === "price-low" ? "bg-heroColor text-white" : ""
                }`}
              >
                Low Price
              </button>
            </div>
            <div className="text-md">Price Range</div>
            <div className="flex w-auto items-center gap-4 text-black">
              <input
                className="w-[110px] h-[45px] border border-solid rounded-md px-4 text-sm"
                type="text"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                className="w-[110px] h-[45px] border border-solid rounded-md px-4 text-sm"
                type="text"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={applyFilters}
            className="w-4/5 h-auto bg-heroColor dark:bg-darkHero py-2 rounded-[10px] text-white"
          >
            Apply Filter
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Filter;
