import { useAuth } from "./Context/AuthContext";
import { useTheme } from "../ThemeContext";
import NEOGNDARK from "../../assets/Images/Logo/NEOGNDARK.webp";
import NEOGNLIGHT from "../../assets/Images/Logo/NEOGNLIGHT.webp";
import NEOGNLOGOLIGHT from "../../assets/Images/Logo/NEOGNLOGOLIGHT.webp";
import NEOGNLOGODARK from "../../assets/Images/Logo/NEOGNLOGODARK.webp";
import BGDark from "../../../src/assets/Images/Background/BGDark.webp";
import BGLight from "../../assets/Images/Background/BGLight.webp";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SignUpDesktop = () => {
  const { theme } = useTheme();
  const auth = useAuth();
  const navigate = useNavigate();

  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (isUserAuthenticated) {
      const delay = 2000;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const newTimeoutId = setTimeout(() => {
        navigate("/Account");
      }, delay);
      setTimeoutId(newTimeoutId);
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }
  }, [isUserAuthenticated]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsUserAuthenticated(true);

    try {
      await auth.register(emailRegister, passwordRegister);
    } catch (error) {
      console.log(error);
    } finally {
      setIsUserAuthenticated(false);
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await auth.loginWithGoogle();
      setIsUserAuthenticated(true);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  const darkStyle = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${BGDark})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // o 'contain'
    backgroundPosition: "center",
  };
  const lightStyle = {
    background: `url(${BGLight})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // o 'contain'
    backgroundPosition: "center",
  };

  return (
    <div
      className={`w-full min-h-screen hidden lg:flex items-center justify-center gap-x-[10vh] xl:gap-x-[300px]`}
      style={theme === "dark" ? darkStyle : lightStyle}
    >
      <div className="h-auto w-auto flex flex-col items-center gap-y-24">
        <div className="flex justify-center items-center gap-x-32">
          <div className="flex items-center gap-x-6">
            {theme === "dark" ? (
              <img className="w-[140px] h-auto" src={NEOGNLIGHT} />
            ) : (
              <img className="w-[140px] h-auto" src={NEOGNDARK} />
            )}
            {theme === "dark" ? (
              <img
                className="w-[190px] h-[90px]"
                src={NEOGNLOGOLIGHT}
              />
            ) : (
              <img
                className="w-[190px] h-[90px]"
                src={NEOGNLOGODARK}
              />
            )}
          </div>
          {theme === "dark" ? (
            <img
              className="w-[45px] h-[45px]"
              src="https://i.postimg.cc/T33w66Tp/noun-double-arrow-down-white.png"
            />
          ) : (
            <img
              className="w-[45px] h-[45px]"
              src="https://i.postimg.cc/GhQ2V2wW/noun-double-arrow-down-black.png"
            />
          )}
        </div>
        <h1 className="dark:text-white font-general-sans text-6xl font-extrabold">
          Join our community
        </h1>
        <div className="dark:text-white flex items-center gap-x-4 font-general-sans text-base font-medium">
          Log in or Create a new accont with us.
          {theme === "dark" ? (
            <img
              className="w-3 h-3"
              src="https://i.postimg.cc/mDwM7rKb/right-thin-arrowheads.png"
            />
          ) : (
            <img
              className="w-3 h-3"
              src="https://www.svgrepo.com/show/152459/right-thin-arrowheads.svg"
            />
          )}
        </div>
      </div>
      <div className="max-w-[450px] h-auto flex flex-col items-center gap-y-10">
        <h1 className="text-white font-general-sans text-4xl font-extrabold">
          Create new account.
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
                onChange={(e) => setEmailRegister(e.target.value)}
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
                onChange={(e) => setPasswordRegister(e.target.value)}
                type="password"
                name="password"
                autoComplete="section-blue shipping address-level2"
                placeholder="••••••••"
                className="bg-white/30 border border-gray-300 placeholder:text-white text-white focus:outline-none sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="w-full h-auto flex items-center justify-center">
              <button
                onClick={(e) => handleRegister(e)}
                disabled={isUserAuthenticated}
                className="w-3/4 text-white transition-all duration-500 bg-gradient-to-br to-red-800 via-red-500 from-heroButton bg-size-200 hover:bg-right-bottom rounded-full text-base px-5 py-2 text-center"
              >
                Sign Up
              </button>
            </div>
            <div className="w-full p-x-2 flex justify-center items-center gap-x-4">
              <div className="w-20 h-[0px] border border-black dark:border-zinc-200"></div>
              <p className="font-general-sans text-base font-normal dark:text-zinc-400">
                Or
              </p>
              <div className="w-20 h-[0px] border border-black dark:border-zinc-200"></div>
            </div>
            <div className="w-full h-auto flex items-center justify-center">
              <button
                onClick={(e) => handleGoogle(e)}
                type="submit"
                className="w-3/4 flex items-center justify-center bg-white border border-gray-300 rounded-2xl shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 min-h-[54px]"
              >
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                >
                  {" "}
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      {" "}
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        {" "}
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </svg>
                <span>Sign Up with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpDesktop;
