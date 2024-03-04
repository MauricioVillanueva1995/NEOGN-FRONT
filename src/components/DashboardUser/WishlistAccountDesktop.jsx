import { AnimatePresence } from "framer-motion";
import CartDesktop from "../Cart/CartDesktop";
import SidebarUser from "./SidebarUser";
import MyWishlistDesktop from "./MyWishlistDesktop";
import { useTheme } from "../ThemeContext";
import { useRef } from "react";
import Footer from "../Footer";
import BGDark from "../../../src/utils/images/Background/BGDark.webp"

const WishlistAccountDesktop = ({ modalOpenCart, closeCart }) => {
  const wishlistAccountDesktopRef = useRef();
  const { theme } = useTheme();
  const darkStyle = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${BGDark})`,
  };

  return (
    <div ref={wishlistAccountDesktopRef}>
      <div
        className={`hidden w-full h-auto min-h-screen lg:flex flex-col items-center justify-center ${
          theme === "dark" ? "" : "bg-cover bg-center"
        }`}
        style={theme === "dark" ? darkStyle : {}}
      >
       <div className="py-10 lg:pt-28 w-full h-auto">
        <div className="w-full h-[100px] my-10 flex justify-center items-center">
          <h1 className="font-poppins text-5xl font-medium dark:text-white">
            {" "}
            My Wishlist
          </h1>
        </div>
        <div className="w-full h-auto hidden lg:flex items-start justify-center gap-x-[10vh] xl:gap-x-[200px] ">
          <div className="p-4 h-full w-auto pt-2">
            <SidebarUser />
          </div>
          <MyWishlistDesktop />
        </div>
      </div>
      </div>
      <AnimatePresence
       initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpenCart && (
          <CartDesktop
            closeCart={closeCart}
            parentHeight={wishlistAccountDesktopRef.current ? wishlistAccountDesktopRef.current.offsetHeight : 0}
          />
        )}
      </AnimatePresence>
      <Footer/>
    </div>
  );
};

export default WishlistAccountDesktop;
