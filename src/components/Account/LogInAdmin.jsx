import NEOGNDARK from "../../utils/images/Logo/NEOGNDARK.webp";
import NEOGNLIGHT from "../../utils/images/Logo/NEOGNLIGHT.webp";
import { useTheme } from "../ThemeContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/slices/userSlice";
import axios from "axios";
import toast from "react-hot-toast";
import LogInAdminDesktop from "./LogInAdminDesktop";

const LogInAdmin = ({ modalOpenCart, closeCart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useTheme();
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

  return (
    <section className="w-full h-full min-h-screen">
      <LogInAdminDesktop modalOpenCart={modalOpenCart} closeCart={closeCart} />
      <div className="flex flex-col w-full h-full min-h-screen pt-[63px] items-center font-general-sans  dark:bg-[#121212] overflow-y-auto lg:hidden">
        <div className="w-full h-auto flex flex-col items-center gap-6">
          {theme === "dark" ? (
            <img className="w-[80px] h-auto" src={NEOGNLIGHT} />
          ) : (
            <img className="w-[80px] h-auto" src={NEOGNDARK} />
          )}
          <h1 className="text-[28px] font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
            Log in Admin
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center mx-0 py-2 h-auto lg:py-0 w-full">
          <div className="w-full bg-white dark:bg-transparent dark:border-gray-700">
            <div className="p-6 h-auto">
              <form className=" gap-4 flex flex-col justify-center" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="section-blue shipping address-level2"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="w-full h-auto pt-4 pb-4">
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="w-full text-white bg-heroColor hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-full text-base px-5 py-[15px] text-center dark:bg-heroButton dark:hover:bg-red-800 dark:focus:ring-red-800"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default LogInAdmin;
