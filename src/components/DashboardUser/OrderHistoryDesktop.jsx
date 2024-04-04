import { useRef } from "react";
import { useTheme } from "../ThemeContext";
import MyOrdersDesktop from "./Orders/MyOrdersDesktop";
import SidebarUser from "./SidebarUser";
import { AnimatePresence } from "framer-motion";
import CartDesktop from "../Cart/CartDesktop";
import Footer from "../Footer";
import BGDark from "../../assets/Images/Background/BGDark.webp"

const OrderHistoryDesktop = ({ modalOpenCart, closeCart }) => {
  const orderHistoryDesktopRef = useRef();
  const { theme } = useTheme();
  const darkStyle = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${BGDark})`,
  };

  return (
    <div
      ref={orderHistoryDesktopRef}
      className={`hidden w-full h-auto lg:flex flex-col items-center justify-center ${
        theme === "dark" ? "" : "bg-cover bg-center"
      }`}
      style={theme === "dark" ? darkStyle : {}}
    >
      <div className="py-10 lg:py-20 min-h-screen w-full h-full">
        <div className="w-full h-[100px] my-10 mb-[35px] flex justify-center items-center">
          <h1 className="font-poppins text-5xl font-medium dark:text-white">
            {" "}
            My Orders
          </h1>
        </div>
        <div className="w-full h-auto hidden lg:flex items-start justify-center gap-x-[10vh] xl:gap-x-[200px] ">
          <div className="h-full w-auto">
            <SidebarUser />
          </div>
          <MyOrdersDesktop />
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpenCart && (
          <CartDesktop
            closeCart={closeCart}
            parentHeight={
              orderHistoryDesktopRef.current
                ? orderHistoryDesktopRef.current.offsetHeight
                : 0
            }
          />
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};
export default OrderHistoryDesktop;
