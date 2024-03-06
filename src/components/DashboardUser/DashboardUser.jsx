import axios from "axios";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAuth } from "../Account/Context/AuthContext";
import { clearUser, getUser } from "../../redux/slices/userSlice";
import NEOGNDARK from "../../assets/images/Logo/NEOGNDARK.webp";
import NEOGNLIGHT from "../../assets/images/Logo/NEOGNLIGHT.webp";
import ToggleDarkMode from "./ToggleDarkMode";
import DashboardUserDesktop from "./DashboardUserDesktop";

const DashBoardUser = ({ modalOpenCart, closeCart }) => {
  const { theme, handleThemeSwitch } = useTheme();
  const auth = useAuth();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (auth.authReady) {
      const fetchDetail = async () => {
        try {
          setLoading(true);
          setError(null);

          const json = await axios.get(`/api/users/${auth.user.uid}`);
          if (!json) console.log("No existe en la db");
          const detail = json.data;
          dispatch(getUser(detail));
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchDetail();
    }
  }, [dispatch, auth.authReady, auth.user.uid]);

  const handleLogout = () => {
    auth.logout();
    dispatch(clearUser());
  };

  return (
    <div className="w-full h-auto">
      <DashboardUserDesktop
        modalOpenCart={modalOpenCart}
        closeCart={closeCart}
      />
      <div className="h-screen max-h-screen w-full flex flex-col gap-y-6 pt-10 dark:bg-black lg:hidden">
        <div className="w-auto h-auto flex items-center justify-between px-6">
          <div className="w-auto h-auto flex items-center gap-4">
            <img
              className="w-auto h-[32px]"
              src={theme === "dark" ? NEOGNLIGHT : NEOGNDARK}
            />
            <h1 className="font-general-sans text-neutral-800 text-2xl font-semibold dark:text-white">
              Profile
            </h1>
          </div>
          <ToggleDarkMode handleThemeSwitch={handleThemeSwitch} theme={theme} />
        </div>
        <div className="w-full h-auto flex flex-col justify-center items-center gap-6">
          <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center overflow-hidden">
            <img
              className="h-full w-full"
              src={
                user.photo
                  ? user.photo
                  : "https://cdn.icon-icons.com/icons2/3446/PNG/512/account_profile_user_avatar_icon_219236.png"
              }
            />
          </div>

          <h2 className="text-neutral-800 text-[21px] font-bold font-jakarta-sans dark:text-white">
            {user.name}
          </h2>
        </div>
        <div className="w-full p-2 flex justify-center items-center">
          <div className="w-4/5 h-[0px] border border-zinc-200"></div>
        </div>
        <div className="w-full h-auto gap-y-6 flex flex-col py-4 px-10">
          {user.isAdmin === true && (
            <Link
              to="/Admin/Manage-Stock"
              className="w-auto h-auto flex items-center justify-between"
            >
              <div className="w-auto h-auto flex items-center gap-6">
                <img
                  className="w-auto h-[24px]"
                  src={
                    theme === "dark"
                      ? "https://i.postimg.cc/Hn6xkcRy/dashboard.png"
                      : "https://www.svgrepo.com/show/520684/dashboard.svg"
                  }
                />
                <h1 className="font-general-sans text-neutral-800 text-lg font-medium dark:text-white">
                  Dashboard Admin
                </h1>
              </div>
              <img
                className="w-auto h-[14px]"
                src={
                  theme === "dark"
                    ? "https://i.postimg.cc/mDwM7rKb/right-thin-arrowheads.png"
                    : "https://www.svgrepo.com/show/152459/right-thin-arrowheads.svg"
                }
              />
            </Link>
          )}
          <Link
            to="/Account/EditProfile"
            className="w-auto h-auto flex items-center justify-between "
          >
            <div className="w-auto h-auto flex items-center gap-6">
              <img
                className="w-auto h-[24px]"
                src={
                  theme === "dark"
                    ? "https://i.postimg.cc/sxqJGqCs/profile.png"
                    : "https://www.svgrepo.com/show/497404/profile.svg"
                }
              />
              <h1 className="font-general-sans text-neutral-800 text-lg font-medium dark:text-white">
                Edit Profile
              </h1>
            </div>
            <img
              className="w-auto h-[14px]"
              src={
                theme === "dark"
                  ? "https://i.postimg.cc/mDwM7rKb/right-thin-arrowheads.png"
                  : "https://www.svgrepo.com/show/152459/right-thin-arrowheads.svg"
              }
            />
          </Link>
          <Link
            to="/Account/Orders"
            className="w-auto h-auto flex items-center justify-between"
          >
            <div className="w-auto h-auto flex items-center gap-6">
              <img
                className="w-auto h-[24px]"
                src={
                  theme === "dark"
                    ? "https://i.postimg.cc/dQjZfDHv/package-box.png"
                    : "https://www.svgrepo.com/show/221731/package-box.svg"
                }
              />
              <h1 className="font-general-sans text-neutral-800 text-lg font-medium dark:text-white">
                Orders
              </h1>
            </div>
            <img
              className="w-auto h-[14px]"
              src={
                theme === "dark"
                  ? "https://i.postimg.cc/mDwM7rKb/right-thin-arrowheads.png"
                  : "https://www.svgrepo.com/show/152459/right-thin-arrowheads.svg"
              }
            />
          </Link>
          <Link
            to="/Account/Wishlist"
            className="w-auto h-auto flex items-center justify-between"
          >
            <div className="w-auto h-auto flex items-center gap-6">
              <img
                className="w-auto h-[24px]"
                src={
                  theme === "dark"
                    ? "https://i.postimg.cc/rsjdRY0z/heart.png"
                    : "https://www.svgrepo.com/show/444723/heart.svg"
                }
              />
              <h1 className="font-general-sans text-neutral-800 text-lg font-medium dark:text-white">
                Wishlist
              </h1>
            </div>
            <img
              className="w-auto h-[14px]"
              src={
                theme === "dark"
                  ? "https://i.postimg.cc/mDwM7rKb/right-thin-arrowheads.png"
                  : "https://www.svgrepo.com/show/152459/right-thin-arrowheads.svg"
              }
            />
          </Link>
          <div className="w-auto h-auto flex items-center justify-between">
            <button
              className="w-auto h-auto flex items-center gap-6"
              onClick={() => handleLogout()}
            >
              <img
                className="w-auto h-[24px]"
                src="https://i.postimg.cc/GhXz4YRz/logout-svgrepo-com.png"
              />
              <h1 className="font-general-sans text-red-500 dark:darkHero text-lg font-medium">
                Logout
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardUser;
