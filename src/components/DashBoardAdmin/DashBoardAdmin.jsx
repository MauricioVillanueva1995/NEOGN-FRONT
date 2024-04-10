import SideBarAdmin from "./SideBarAdmin";
import AsideBar from "./AsideBar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import NEOGNLOGO from "../../assets/Images/Logo/NEOGNLOGO.webp";
import { Link } from "react-router-dom";

const DashBoardAdmin = () => {
  const { pathname } = useLocation();

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900 h-screen">
      {pathname === "/" && <Navigate to="/admin" />}
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-neutral-950 dark:border-gray-500 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-start items-center">
          <SideBarAdmin />
          <div className="hidden lg:flex items-center z-20">
            <Link to="/" className="flex">
              <img
                className="h-[40px] w-[105px]"
                alt="NEOGNLOGO"
                src={NEOGNLOGO}
              />
            </Link>
          </div>
        </div>
      </nav>
      <div className=" h-full w-full pt-14 flex">
        <AsideBar />
        <div className="flex-grow lg:h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardAdmin;
