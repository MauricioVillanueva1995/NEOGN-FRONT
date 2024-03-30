import { useState } from "react";

const PricesFilter = ({ handleFilterPrice }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const applyFilters = () => {
    handleFilterPrice(minPrice, maxPrice);
  };

  return (
    <div className="space-y-2 font-jakarta-plus font-normal">
      <h6 className="text-xl font-medium font-jakarta-sans text-black dark:text-white pb-4">
        Prices
      </h6>
      <div className="flex items-center justify-between col-span-2 space-x-3">
        <div className="w-full">
          <label
            htmlFor="min-experience-input"
            className="block mb-2 text-sm text-gray-900 dark:text-white"
          >
            From
          </label>

          <input
            type="number"
            id="price-from"
            value={minPrice}
            min="1"
            max="10000"
            onChange={(e) => setMinPrice(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder=""
            required
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="price-to"
            className="block mb-2 text-sm text-gray-900 dark:text-white"
          >
            To
          </label>

          <input
            type="number"
            id="max-experience-input"
            value={maxPrice}
            min="1"
            max="10000"
            onChange={(e) => setMaxPrice(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="flex justify-end pt-3">
        <button
          className="px-4 py-1 transition-all duration-500 bg-gradient-to-br to-red-800 via-red-500 from-heroButton bg-size-200 hover:bg-right-bottom dark:bg-[#CFD1D4] text-[14px] font-general-sans font-semibold tracking-wider text-white rounded-md hover:bg-slate-700"
          onClick={applyFilters}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default PricesFilter;
