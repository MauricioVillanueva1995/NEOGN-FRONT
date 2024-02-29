import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const products = useSelector((state) => state.products.products);

  const searcher = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setSearch("");
    setIsSearchOpen(false);
  };

  const handleProductClick = (e) => {
    e.preventDefault(); 
    closeSearch();
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();

    const searchTermLength = search.length;
    const productNameLength = productName.length;

    if (searchTermLength <= productNameLength) {
      const firstPartOfProductName = productName.slice(0, searchTermLength);

      return firstPartOfProductName === search.toLowerCase();
    }

    return false;
  });

  return (
    <div className="bg-transparent py-2 px-2 w-auto relative">
      <div className="relative h-auto bg-white">
        <input
          type="text"
          placeholder="Search anything"
          className="relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-[98vw] focus:cursor-text focus:border-[#E54660] focus:pl-4 focus:pr-4 transition-all duration-300"
          value={search}
          onChange={searcher}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 right-0 my-auto h-8 w-12 border-transparent stroke-gray-500 px-3.5 peer-focus:border-[#E54660] peer-focus:stroke-[#E54660]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {isSearchOpen && search && (
        <ul className="absolute z-20 w-full bg-white border border-gray-200 shadow-lg rounded-md mt-2">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="py-2 px-4 z-20 hover:bg-gray-100 flex items-center"
              onMouseDown={(e) => e.preventDefault()} 
              onClick={handleProductClick} 
            >
              <Link to={`/${product.id}`} className="flex items-center w-full">
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

export default SearchBar;
