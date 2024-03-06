import Searchbar from "./SearchBar";
import Sidebar from "./Sidebar";
import { useTheme } from "../ThemeContext";
import NEOGNDARK from "../../../src/assets/Images/Logo/NEOGNDARK.webp";
import NEOGNLIGHT from "../../../src/assets/Images/Logo/NEOGNLIGHT.webp";

const TopBar = () => {
  const { theme } = useTheme();

  return (
    <div className="w-auto h-auto flex items-center dark:bg-black lg:hidden">
      <Sidebar />
      <div className="w-full h-auto">
        <div>
          <img
            src={theme === "dark" ? NEOGNLIGHT : NEOGNDARK}
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
