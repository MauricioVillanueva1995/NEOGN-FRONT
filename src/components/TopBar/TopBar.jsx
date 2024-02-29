import Searchbar from "./SearchBar";
import Sidebar from "./Sidebar";
import { useTheme } from "../ThemeContext";

const TopBar = () => {
  const { theme } = useTheme();

  return (
    <div className="w-auto h-auto flex items-center dark:bg-black lg:hidden">
      <Sidebar />
      <div className="w-full h-auto">
        <div>
          <img
            src={
              theme === "dark"
                ? "https://i.postimg.cc/8PRLdtWp/icosnns.png"
                : "https://i.postimg.cc/hGvKFVV8/iconns.png"
            }
            className="w-auto h-8"
          />
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <Searchbar />
      </div>
    </div>
  );
};

export default TopBar;
