import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

function Sidebar() {
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Agrega un event listener para detectar clics fuera del Sidebar
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    // Agrega el event listener al montar el componente
    document.addEventListener("click", handleClickOutside);

    // Limpia el event listener al desmontar el componente
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`w-full ${isSidebarOpen ? "overflow-hidden" : "lg:hidden"}`}
    >
      <div ref={sidebarRef}>
        <nav className=" p-4 ">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleSidebar}
              className=" text-gray-600 dark:text-white hover:text-gray-800 w-auto"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>

        <aside
          className={`fixed top-0 left-0 h-full w-80 bg-zinc-100 dark:bg-darkCard shadow transform ${
            isSidebarOpen ? "" : "-translate-x-full"
          }  transition-transform duration-300 ease-in-out`}
          style={{ zIndex: isSidebarOpen ? "100" : "-1" }}
        >
          <div className="mt-3 p-4 flex justify-between items-center">
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-gray-800"
            >
              {theme === "dark" ? (
                <img
                  className="w-[36px]"
                  src="https://i.postimg.cc/Y2mQRcQJ/close-x-svgrepo-com.png"
                />
              ) : (
                <svg
                  className="w-9 h-9"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
          <ul className="py-6 px-6 space-y-2 ml-8">
            <li>
              <Link
                to="/"
                className="text-black dark:text-white text-xl font-normal block mb-6"
                onClick={toggleSidebar}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/Search"
                className="text-black dark:text-white text-xl font-normal block mb-6"
                onClick={toggleSidebar}
              >
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                to="/ContactUs"
                className="text-black dark:text-white text-xl font-normal block mb-6"
                onClick={toggleSidebar}
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className="text-black dark:text-white text-xl font-normal block mb-6"
                onClick={toggleSidebar}
              >
                ABOUT US
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
