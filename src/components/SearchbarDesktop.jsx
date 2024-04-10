import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ActiveSearch from "../assets/Icons/ActiveSearch.webp";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const products = useSelector((state) => state.products.products);

  const searcher = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  const handleSearchSuccess = () => {
    console.log("handleSearchSuccess called");
    setSearch("");
    console.log("Search cleared:", search);
  };

  return (
    <div className="relative w-full lg:w-[400px] lg:ml-2">
      <div className="w-full bg-slate-50/[0.1] rounded-full lg:py-[2px] lg:px-[18px] flex items-center border border-slate-300/[0.5]">
        <input
          type="text"
          className="flex-1 bg-transparent text-gray-400 dark:text-white text-[13px] font-poppins focus:outline-none px-2 border-none rounded-full"
          placeholder="Search anything"
          value={search}
          onChange={searcher}
        />
        <img className="w-8 h-8" src={ActiveSearch} />
      </div>
      {search && (
        <ul className="absolute z-10 w-full bg-white border border-gray-200 shadow-lg rounded-md mt-2">
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((product) => (
              <li
                key={product.id}
                className="py-2 px-4 hover:bg-gray-100 flex items-center"
              >
                <Link
                  to={`/${product.id}`}
                  className="flex items-center w-full"
                  onClick={() => {
                    console.log("Link clicked");
                    handleSearchSuccess();
                  }}
                >
                  <img
                    src={product.image}
                    className="w-12 h-12 object-contain rounded"
                    alt=""
                  />
                  <p className="ml-4 text-gray-800 truncate w-[calc(100% - 60px)]">
                    {product.name}
                  </p>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
