import SidebarUser from "./SidebarUser";
import { AnimatePresence } from "framer-motion";
import CartDesktop from "../Cart/CartDesktop";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { editProfile } from "../../redux/actions/editProfile";
import { useAuth } from "../Account/Context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/slices/userSlice";
import { useTheme } from "../ThemeContext";
import Footer from "../Footer";
import BACKGROUNDDARK from "../../utils/images/background/BACKGROUNDDARK.webp"

const EditProfileDesktop = ({ modalOpenCart, closeCart }) => {
  const darkStyle = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${BACKGROUNDDARK})`,
  };

  const EditProfileDesktopRef = useRef();
  const { theme } = useTheme();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const auth = useAuth();
  const navigate = useNavigate();

  const { uid } = auth.user;

  const [input, setInput] = useState({
    username: "",
    name: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (user) {
      setInput({
        username: user.username,
        name: user.name,
        address: user.address,
      });
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(event);
      await dispatch(editProfile(uid, input));
      await dispatch(getUser(input));
      toast.success("Your profile was successfully updated.");
      navigate("/Account/EditProfile");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating your profile.");
    }
  };

  return (
    <div
    ref={EditProfileDesktopRef}
      className={`hidden w-full h-auto min-h-screen lg:flex flex-col items-center justify-center ${
        theme === "dark" ? "" : "bg-cover bg-center"
      }`}
      style={theme === "dark" ? darkStyle : {}}
    >
     <div className="py-10 lg:pt-28 w-full h-auto">
      <div className="w-full h-[100px] my-10  flex justify-center items-center">
        <h1 className="font-poppins text-5xl font-medium dark:text-white"> My Account</h1>
      </div>
      <div className="w-full h-auto hidden lg:flex items-start justify-center gap-x-[10vh] xl:gap-x-[200px] ">
        <div className="p-4 h-full w-auto pt-2">
          <SidebarUser />
        </div>
        <div className="hidden max-w-[700px] lg:flex flex-col w-full items-center justify-center h-auto pt-6 lg:pt-0">
          <form
            className="w-full h-auto"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="grid gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  value={input.username || ""}
                  name="username"
                  id="username"
                  placeholder="Type your username"
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={input.name || ""}
                  id="name"
                  placeholder="Type your name"
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>

              <div>
                <label
                  htmlFor="genre"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  value={input.address || ""}
                  name="address"
                  id="address"
                  placeholder="Type your address"
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="size"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <label
                  type="text"
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                >
                  {user.email}
                </label>
              </div>
            </div>
            <div className="flex justify-start items-center pt-10">
              <button
                type="submit"
                className="h-[50px] flex w-auto text-white justify-center items-center bg-[#DF102E] rounded-[8px] hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-neutral-500 font-medium text-md px-5 py-1 text-center dark:bg-darkHero dark:hover:bg-heroColor"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
      <AnimatePresence
       initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpenCart && (
          <CartDesktop
            closeCart={closeCart}
            parentHeight={EditProfileDesktopRef.current ? EditProfileDesktopRef.current.offsetHeight : 0}
          />
        )}
      </AnimatePresence>
      <Footer/>
    </div>
  );
};
export default EditProfileDesktop;
