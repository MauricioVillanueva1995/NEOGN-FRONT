import PricesFilter from "./PricesFilter";
import RatingFilter from "./RatingFilter";

const FiltersSideBar = ({
  handleFilterPrice,
  handleFilterOrder,
  handleFilterBrand,
  resetFilters,
}) => {
  return (
    <div className="py-5 px-3 h-auto min-w-[300px] bg-white dark:bg-transparent flex flex-col items-start gap-y-6 font-jakarta-plus font-normal">
      <h1 className=" text-2xl dark:text-white">Filters</h1>
      <h2 className=" text-xl dark:text-white">Brand</h2>
      <ul className="h-[300px] flex flex-col justify-around text-start">
        <li>
          <button
            className="btn relative group dark:text-white font-normal text-[17px]"
            onClick={() => handleFilterBrand("HyperX")}
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all" />
            HyperX
          </button>
        </li>
        <li>
          <button
            className="btn relative group dark:text-white font-normal text-[17px]"
            value="Logitech"
            onClick={() => handleFilterBrand("Logitech")}
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all" />
            Logitech
          </button>
        </li>
        <li>
          <button
            className="btn relative group dark:text-white font-normal text-[17px]"
            value="Razer"
            onClick={() => handleFilterBrand("Razer")}
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all" />
            Razer
          </button>
        </li>
        <li>
          <button
            className="btn relative group dark:text-white font-normal text-[17px]"
            value="Corsair"
            onClick={() => handleFilterBrand("Corsair")}
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all" />
            Corsair
          </button>
        </li>
        <li>
          <button
            className="btn relative group dark:text-white font-normal text-[17px]"
            value="Aorus"
            onClick={() => handleFilterBrand("Aorus")}
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all" />
            Aorus
          </button>
        </li>
        <li>
          <button
            className="btn relative group dark:text-white font-normal text-[17px]"
            value="Asus"
            onClick={() => handleFilterBrand("Asus")}
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all" />
            Asus ROG
          </button>
        </li>
      </ul>
      <div className="w-full h-1 border-t-[1px] border-black dark:border-white"></div>
      <div className="w-full">
        <RatingFilter />
      </div>
      <div className="w-full h-1 border-t-[1px] border-black dark:border-white"></div>
      <div className="w-full">
        <PricesFilter handleFilterPrice={handleFilterPrice} />
      </div>
      <div className="w-full h-1 border-t-[1px] border-black dark:border-white"></div>
      <h2 className=" text-xl dark:text-white">Sort By</h2>
      <ul className="h-[300px] flex flex-col justify-around text-start">
        <li>
          <button
            className="btn relative group dark:text-white font-normal text-[17px]"
            value="A-Z"
            onClick={(event) => {
              handleFilterOrder(event.target.value);
            }}
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all" />
            A-Z
          </button>
        </li>
        <li>
          <button
            className="btn relative group dark:text-white font-normal text-[17px]"
            value="Z-A"
            onClick={(event) => {
              handleFilterOrder(event.target.value);
            }}
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all" />
            Z-A
          </button>
        </li>
        <li>
          <button
            className="btn relative group dark:text-white font-normal text-[17px]"
            value="Newest"
            onClick={(event) => {
              handleFilterOrder(event.target.value);
            }}
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all" />
            Newest
          </button>
        </li>
        <li>
          <button
            className="btn relative group dark:text-white font-normal text-[17px]"
            value="Oldest"
            onClick={(event) => {
              handleFilterOrder(event.target.value);
            }}
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all" />
            Oldest
          </button>
        </li>
        <li>
          <button
            className="btn relative group dark:text-white font-normal text-[17px]"
            value="price-low"
            onClick={(event) => {
              handleFilterOrder(event.target.value);
            }}
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all" />
            Price - Low to High
          </button>
        </li>
        <li>
          <button
            className="btn relative group dark:text-white font-normal text-[17px]"
            value="price-high"
            onClick={(event) => {
              handleFilterOrder(event.target.value);
            }}
          >
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:transition-all" />
            Price - High to Low
          </button>
        </li>
      </ul>
      <div className="w-full h-auto flex items-center justify-end">
        <button onClick={resetFilters} className="bg-slate-300 rounded-lg p-2">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FiltersSideBar;
