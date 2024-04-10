import { NavLink } from "react-router-dom";

const AsideBar = () => {
  return (
    <aside
      className="hidden fixed lg:flex w-auto min-h-screen pt-[20px] transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-neutral-950 w-[300px]">
        <form action="#" method="GET" className="md:hidden mb-2">
          <label htmlFor="sidebar-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              name="search"
              id="sidebar-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search"
            />
          </div>
        </form>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="Dashboard"
              className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                className="w-[30px] h-[30px]"
                src="https://cdn-icons-png.flaticon.com/512/8722/8722500.png"
              />
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Purchase-History"
              className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                className="w-[30px] h-[30px]"
                src="https://cdn-icons-png.flaticon.com/512/411/411745.png"
              />
              <span className="ml-3">Purchase History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Create-Product"
              className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                className="w-[30px] h-[30px]"
                src="https://cdn-icons-png.flaticon.com/512/5258/5258076.png"
              />
              <span className="ml-3">Create Product</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Products-To-Modify"
              className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                className="w-[30px] h-[30px]"
                src="https://cdn-icons-png.flaticon.com/512/683/683139.png"
              />
              <span className="ml-3">Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Manage-Stock"
              className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                className="w-[30px] h-[30px]"
                src="https://cdn-icons-png.flaticon.com/512/5164/5164023.png"
              />
              <span className="ml-3">Manage Stock</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Manage-User"
              className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                className="w-[30px] h-[30px]"
                src="https://cdn-icons-png.flaticon.com/512/166/166256.png"
              />
              <span className="ml-3">Manage User</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideBar;
