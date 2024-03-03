import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { switchSelector } from "../redux/slices/navBarSlice";
import { useDispatch } from "react-redux";
import { useTheme } from "./ThemeContext";
import NEOGNLOGO from "../utils/images/Logo/NEOGNLOGO.webp"

import Searchbar from "./SearchbarDesktop";

const NavBar = ({modalOpenCart, openCart, closeCart}) => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [forceUpdate, setForceUpdate] = useState(false);


  const location = useLocation();
  const currentPath = location.pathname;

  const selected = (select) => {
    dispatch(switchSelector(select));
  };


  // const toggleDrawer = () => {
  //   setIsDrawerOpen(!isDrawerOpen);
  //   // Forzar una actualización para que React aplique las clases de transición
  //   setForceUpdate(!forceUpdate);
  // };

  return (
    <nav className="hidden backdrop-blur-sm bg-slate-50/[0.1] border-gray-200 lg:block shadow-md mb-2 w-full">
      <div className="w-full flex items-center justify-between mx-auto p-2 pl-10">
        <Link to="/">
          <div className="flex">
            <img
              className="h-[40px] w-[105px]"
              alt="NEOGNLOGO"
              src={NEOGNLOGO}
            />
          </div>
        </Link>
        <div
          className="hidden w-full lg:w-auto lg:flex lg:items-center lg:justify-around lg:gap-x-10 font-poppins font-semibold text-[13px]"
          id="navbar-default"
        >
          <Link
            to={currentPath === "/" ? "/" : "/"}
            onClick={() => selected("/")}
          >
            <p
              href="#"
              className={`hover:text-red-500 w-[100px] flex justify-center items-center rounded-full py-[5px] ${
                theme === "dark" && currentPath === "/"
                  ? "text-red-500 bg-white/[0.1]"
                  : theme === "text-white bg-white/[0.0]"
                  ? "text-gray-300"
                  : theme !== "dark" && currentPath === "/"
                  ? "text-red-500 bg-[#CFD1D4]/[0.4]"
                  : "text-[#ee3a7f]  bg-white/[0.0]"
              }`}
              aria-current="page"
            >
              HOME
            </p>
          </Link>
          <Link to="/Search">
            <p
              href="#"
              className={`hover:text-red-500 w-[100px] flex justify-center items-center rounded-full py-[5px] ${
                theme === "dark" && currentPath === "/Search"
                  ? "text-red-500 bg-white/[0.1]"
                  : theme === "text-white bg-white/[0.0]"
                  ? "text-gray-300"
                  : theme !== "dark" && currentPath === "/Search"
                  ? "text-red-500 bg-[#CFD1D4]/[0.4]"
                  : "text-[#ee3a7f] bg-white/[0.0] "
              }`}
            >
              SHOP
            </p>
          </Link>
          <Link to="/AboutUs">
            <p
              href="#"
              className={`hover:text-red-500 w-[100px] flex justify-center items-center rounded-full py-[5px] ${
                theme === "dark" && currentPath === "/AboutUs"
                  ? "text-red-500 bg-white/[0.1]"
                  : theme === "text-white bg-white/[0.0]"
                  ? "text-gray-300"
                  : theme !== "dark" && currentPath === "/AboutUs"
                  ? "text-red-500 bg-[#CFD1D4]/[0.4]"
                  : "text-[#ee3a7f]  bg-white/[0.0]"
              }`}
            >
              ABOUT US
            </p>
          </Link>
          <Link to="/ContactUs">
            <p
              href="#"
              className={`hover:text-red-500 min-w-[100px] flex justify-center items-center rounded-full py-[5px] ${
                theme === "dark" && currentPath === "/ContactUs"
                  ? "text-red-500 bg-white/[0.1]"
                  : theme === "text-white bg-white/[0.0]"
                  ? "text-gray-300"
                  : theme !== "dark" && currentPath === "/ContactUs"
                  ? "text-red-500 bg-[#CFD1D4]/[0.4]"
                  : "text-[#ee3a7f] bg-white/[0.0]"
              }`}
            >
              CONTACT US
            </p>
          </Link>
        </div>
        <Searchbar />
        <div className="w-[370px] h-auto border-opacity-20 justify-around items-center inline-flex">
          <Link
            to="/Account/Wishlist"
            className="flex justify-center items-center"
          >
            <div className="flex-col justify-center items-center inline-flex">
              <img
                alt="Saved"
                src="https://i.postimg.cc/vTLTgtrf/active-heart-svgrepo-com.png"
                className="w-5 h-5"
              />
            </div>
          </Link>
          <motion.button
            onClick={() => (modalOpenCart ? closeCart() : openCart())}
            className="flex justify-center items-center"
            type="button"
            data-drawer-target="drawer-right-example"
            data-drawer-show="drawer-right-example"
            data-drawer-placement="right"
            aria-controls="drawer-right-example"
          >
            <div className="flex-col justify-center items-center inline-flex">
              <img
                alt="MyCart"
                src="https://i.postimg.cc/1Xq6bnN4/active-basket-alt-3-svgrepo-com.png"
                className="w-6 h-6"
              />
            </div>
          </motion.button>
          <Link
            to="/Account"
            onClick={() => selected("Account")}
            className="flex justify-center items-center"
          >
            <div className="flex-col justify-center items-center inline-flex">
              <img
                src="https://i.postimg.cc/c1Qrb0pC/active-profile-svgrepo-com.png"
                className="w-6 h-6"
                alt="Account"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
