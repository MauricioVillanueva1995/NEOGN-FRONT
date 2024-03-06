import { Link } from "react-router-dom";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";
import CartDesktop from "../components/Cart/CartDesktop";
import { useRef, useEffect } from "react";
import AboutUs from "../assets/images/AboutUs/AboutUs.webp";

const AboutUsDesktop = ({ modalOpenCart, closeCart }) => {
  const aboutUsRef = useRef();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();

    const handleBeforeUnload = () => {
      scrollToTop();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div ref={aboutUsRef} className="w-full h-auto">
      <div className="w-full h-screen hidden lg:flex items-center justify-center flex-col dark:bg-[#121212]">
        <div className="w-auto h-auto flex items-start justify-center flex-col gap-y-[40px]">
          <div className="font-poppins dark:text-white flex flex-col items-start justify-center gap-y-[24px]">
            <h2 className="w-[850px] h-auto text-[54px] font-medium leading-[60px]">
              Empowering gamers with elite tools for a superior gaming journey.
            </h2>
            <p className="w-[850px] h-auto text-[16px] font-normal">
              Unveiling timeless gaming gear: where innovation meets classic
              design, enhancing every gaming setup. Our pieces captivate with
              their enduring style, destined to elevate your gaming experience
              for years to come.
            </p>
          </div>
          <div className="w-auto h-auto flex">
            <div className="w-[560px] h-auto overflow-hidden">
              <img
                className="w-auto h-auto"
                src={AboutUs}
              />
            </div>
            <div className="pl-[72px] gap-y-[24px] font-poppins w-[560px] h-auto overflow-hidden flex flex-col justify-center items-start bg-[#ebebeb]">
              <h1 className="font-medium text-[40px]">About Us</h1>
              <p className="text-[16px] font-normal max-w-[450px]">
                NEOGN is your ultimate destination for gaming accessories,
                committed to serving you since 2019. Our round-the-clock support
                team is here to enhance your gaming experience.
              </p>
              <Link
                to="/Search"
                className="w-auto h-auto border-b-2 border-black flex items-start justify-center font-medium text-[16px]"
              >
                Shop Now{" "}
                <img
                  className="h-[25px] w-[25px]"
                  src="https://www.svgrepo.com/show/510165/right-arrow.svg"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpenCart && (
          <CartDesktop
            closeCart={closeCart}
            parentHeight={
              aboutUsRef.current ? aboutUsRef.current.offsetHeight : 0
            }
          />
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default AboutUsDesktop;
