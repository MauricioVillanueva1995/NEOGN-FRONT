import SidebarUser from "./SidebarUser";
import { useTheme } from "../ThemeContext";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import CartDesktop from "../Cart/CartDesktop";
import Footer from "../Footer";
import BGDark from "../../../src/utils/images/Background/BGDark.webp"

const DashboardUserDesktop = ({ modalOpenCart, closeCart }) => {
  const { theme } = useTheme();
  const dashboardUserDesktopRef = useRef();

  const darkStyle = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${BGDark})`,
  };

  return (
    <div ref={dashboardUserDesktopRef}>
      <div
        className={`w-full min-h-screen h-full hidden lg:flex items-center justify-center gap-x-[10vh] xl:gap-x-[300px] ${
          theme === "dark" ? "" : "bg-cover bg-center"
        }`}
        style={theme === "dark" ? darkStyle : {}}
      >
        <div className="h-full w-auto">
          <SidebarUser />
        </div>
        <div className="h-auto xl:min-w-[600px] w-auto flex flex-col items-center gap-y-16">
          <h1 className="font-jakarta-sans text-5xl xl:text-[64px] xl:font-extrabold dark:text-white">
            Wellcome back to
          </h1>
          {theme === "dark" ? (
            <img
              className="h-[100px] w-auto"
              src="https://i.postimg.cc/wj5tMqnF/NEOGNLOGGO.png"
            />
          ) : (
            <img
              className="h-[100px] w-auto"
              src="https://i.postimg.cc/4xR7X72m/NEOGNLOGOBLACK.png"
            />
          )}

          <h2 className="font-jakarta-sans text-2xl xl:text-[32px] font-medium dark:text-white">
            Navigate and discover your potential
          </h2>
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpenCart && (
          <CartDesktop
            closeCart={closeCart}
            parentHeight={
              dashboardUserDesktopRef.current
                ? dashboardUserDesktopRef.current.offsetHeight
                : 0
            }
          />
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};
export default DashboardUserDesktop;
