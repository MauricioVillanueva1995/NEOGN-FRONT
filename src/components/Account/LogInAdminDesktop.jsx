import { AnimatePresence } from "framer-motion";
import CartDesktop from "../Cart/CartDesktop";
import NEOGNDARK from "../../assets/Images/Logo/NEOGNDARK.webp";
import NEOGNLIGHT from "../../assets/Images/Logo/NEOGNLIGHT.webp";
import NEOGNLOGODARK from "../../assets/Images/Logo/NEOGNLOGODARK.webp";
import NEOGNLOGOLIGHT from "../../assets/Images/Logo/NEOGNLOGOLIGHT.webp";
import BGDark from "../../../src/assets/Images/Background/BGDark.webp";
import BackgroundLight from "../../assets/Images/Background/BackgroundLight.webp";
import { useTheme } from "../ThemeContext";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/slices/userSlice";
import axios from "axios";
import toast from "react-hot-toast";

const LogInAdminDesktop = ({ modalOpenCart, closeCart }) => {
  const logInAdminDesktopRef = useRef();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (isUserAuthenticated) {
      const delay = 2000;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const newTimeoutId = setTimeout(() => {
        navigate("/Account/Admin");
      }, delay);
      setTimeoutId(newTimeoutId);
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }
  }, [isUserAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const checkUserAdmin = await axios.get(`/api/admin`, {
        params: {
          email: email,
          password: password,
        },
      });
      if (checkUserAdmin.status === 200) {
        const detail = checkUserAdmin.data;
        dispatch(getUser(detail));
        toast.success("Successful Login");
        setIsUserAuthenticated(true);
      }
    } catch (error) {
      console.log(error.message);
      setIsUserAuthenticated(false);
      toast.error("Login Failed");
    }
  };

  const darkStyle = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${BGDark})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // o 'contain'
    backgroundPosition: "center",
  };
  const lightStyle = {
    background: `url(${BackgroundLight})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // o 'contain'
    backgroundPosition: "center",
  };

  return (
    <div
      ref={logInAdminDesktopRef}
      className={`w-full min-h-screen hidden lg:flex items-center justify-center gap-x-[10vh] xl:gap-x-[500px]`}
      style={theme === "dark" ? darkStyle : lightStyle}
    >
      <div className="h-auto w-auto flex flex-col items-center gap-y-24">
        <div className="flex justify-center items-center gap-x-32">
          <div className="flex flex-col items-center gap-x-6">
            {theme === "dark" ? (
              <img className="w-[300px] h-auto" src={NEOGNLIGHT} />
            ) : (
              <img className="w-[300px] h-auto" src={NEOGNDARK} />
            )}
            {theme === "dark" ? (
              <img
                className="w-[130px] h-[90px]"
                src={NEOGNLOGOLIGHT}
              />
            ) : (
              <img
                className="w-[190px] h-[90px]"
                src={NEOGNLOGODARK}
              />
            )}
          </div>
        </div>
      </div>
      <div className="max-w-[450px] h-auto flex flex-col items-center gap-y-10">
        <h1 className="text-white font-general-sans text-4xl font-extrabold">
          Log in to your admin account.
        </h1>
        <div className="py-6 h-auto w-full flex flex-col gap-y-10">
          <form
            className=" gap-4 gap-y-10 flex flex-col justify-center"
            action="#"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                autoComplete="section-blue shipping address-level2"
                className="bg-white/30 border border-gray-300 placeholder:text-white focus:outline-none text-white sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                autoComplete="section-blue shipping address-level2"
                placeholder="••••••••"
                className="bg-white/30 border placeholder:text-white border-gray-300 focus:outline-none text-white sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="w-full h-auto flex items-center justify-center">
              <button
                onClick={handleLogin}
                className="w-3/4 text-white bg-[#DF102E] hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-full text-base px-5 py-2 text-center dark:bg-heroButton dark:hover:bg-red-800 dark:focus:ring-red-800"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <AnimatePresence
       initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpenCart && (
          <CartDesktop
            closeCart={closeCart}
            parentHeight={logInAdminDesktopRef.current ? logInAdminDesktopRef.current.offsetHeight : 0}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LogInAdminDesktop;
