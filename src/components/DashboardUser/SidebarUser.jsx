import { Link } from "react-router-dom";
import { useAuth } from "../Account/Context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import ToggleDarkMode from "./ToggleDarkMode";
import { useTheme } from "../ThemeContext";

const SidebarUser = () => {
  const { theme, handleThemeSwitch } = useTheme();
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const location = useLocation();
  console.log(location.pathname);

  const handleLogout = () => {
    auth.logout();
    dispatch(clearUser());
    navigate("/Account");
    toast.success("Successful Logout");
  };

  return (
    <div className="w-[270px] h-[500px] rounded-[8px] bg-[#EEEEEE] flex justify-around items-center flex-col px-4 py-2">
      <div className="w-full bg-transparent flex items-center justify-end">
        <ToggleDarkMode handleThemeSwitch={handleThemeSwitch} theme={theme} />
      </div>
      <div className=" w-full h-auto flex justify-center items-center flex-col gap-4 mb-6">
        <div className="border border-gray-300 rounded-full overflow-hidden flex justify-center items-center">
          <img className="w-[80px] h-[80px]" src={user.photo} />
        </div>
        <p className="font-general-sans font-semibold text-lg text-center">{user.name}</p>
      </div>
      <div className="flex flex-col items-start justify-center gap-y-[40px] font-jakarta-sans text-base font-semibold w-full h-auto">
        <div className="w-full border-b-[2px] border-black">
          <Link
            to="/Account/EditProfile"
            className={`w-full ${
              location.pathname.startsWith("/Account/EditProfile")
                ? "text-black"
                : "text-[#6C7275]"
            }`}
          >
            Account
          </Link>
        </div>
        <div className="text-[#6C7275]">
          <Link
            to="/Account/Orders"
            className={`w-full ${
              location.pathname.startsWith("/Account/Orders")
                ? "text-black"
                : "text-[#6C7275]"
            }`}
          >
            Orders
          </Link>
        </div>
        <div className="text-[#6C7275]">
          <Link
            to="/Account/Wishlist"
            className={`w-full ${
              location.pathname.startsWith("/Account/Wishlist")
                ? "text-black"
                : "text-[#6C7275]"
            }`}
          >
            Wishlist
          </Link>
        </div>
        <div
          className="text-[#6C7275] hover:text-[#DF102E] hover:cursor-pointer"
          onClick={() => handleLogout()}
        >
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarUser;
