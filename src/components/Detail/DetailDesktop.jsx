import { useTheme } from "../../components/ThemeContext";
import Footer from ".././Footer";
import { AnimatePresence } from "framer-motion";
import CartDesktop from "../../components/Cart/CartDesktop";
import ThreeDObject from "./ThreeDObject";
import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import HeartActive from "../../assets/Icons/Detail/HeartActive.webp"
import HeartActiveLight from "../../assets/Icons/Detail/HeartActive.webp"
import HeartInactiveLight from "../../assets/Icons/Detail/HeartInactiveLight.webp";
import HeartInactiveDark from "../../assets/Icons/Detail/HeartInactiveDark.webp";
import CloseDark from "../../assets/Icons/Detail/CloseDark.webp";
import CloseLight from "../../assets/Icons/Detail/CloseLight.webp";
import ThreeDDark from "../../assets/Icons/Detail/ThreeDDark.webp"
import ThreeDLight from "../../assets/Icons/Detail/ThreeDLight.webp"


const DetailDesktop = ({
  modalOpenCart,
  closeCart,
  detail,
  currentImage,
  handleClick,
  handleAddToCart,
  handleToggleWishlist,
  isAdded,
}) => {
  const detailDesktopRef = useRef();
  const { theme } = useTheme();
  const [show3DObject, setShow3DObject] = useState(false);

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
    <div
      ref={detailDesktopRef}
      className="w-full h-auto min-h-screen dark:bg-gradient-to-l from-[#000000] to-[#1B1B1B] hidden lg:flex flex-col"
    >
      <div className="w-full h-auto lg:flex lg:items-center justify-around py-40">
        <div className="w-auto h-auto flex flex-col gap-y-[40px] pl-[100px] max-w-[800px]">
          <div className="flex items-center justify-between">
            <h1 className="font-poppins font-normal text-2xl dark:text-white">
              Logitech
            </h1>
            {
              <img
                src={
                  isAdded
                    ? theme === "dark"
                      ? {HeartActive}
                      : {HeartActiveLight}
                    : theme === "dark"
                    ? {HeartInactiveLight}
                    : {HeartInactiveDark}
                }
                className={`w-9 h-9 object-cover rounded-lg cursor-pointer ${
                  isAdded ? "text-red-500" : "text-gray-500"
                }`}
                onClick={handleToggleWishlist}
              />
            }
          </div>
          <div className="font-general-sans font-semibold text-[84px] dark:text-white">
            {detail.name}
          </div>
          <p className="font-general-sans font-normal text-[18px] text-[#5A595B] max-w-[400px]">
            {detail.description}
          </p>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-300 dark:text-[#F8F8F8] me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300 dark:text-white me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300 dark:text-white me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300 dark:text-white me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              className="w-5 h-5 text-gray-300 me-1 dark:text-[#5A595B]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <p className="font-general-sans font-medium text-base text-gray-500 dark:text-[#5A595B]">
              50+ reviews
            </p>
          </div>
          <div className="w-[380px] h-auto flex justify-between items-center font-poppins gap-x-10">
            <p className="font-semibold text-[30px] dark:text-white">
              $ {detail.price}
            </p>
            <button
              onClick={handleAddToCart}
              className="px-7 py-2.5 justify-center items-center gap-2.5 inline-flex dark:bg-gradient-to-r dark:from-[#424242] dark:via-[#2F2F2F] dark:to-[#191919] bg-gradient-to-r from-[#cccccc] via-[#b4b4b4] to-[#a7a7a7] rounded-full dark:text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="w-auto h-auto flex gap-x-6">
          {show3DObject ? (
            <div className="flex items-center justify-center w-[650px] h-[650px] relative">
              <Canvas
                dpr={[1, 2]}
                shadow="true"
                camera={{ fov: 80, position: [0, 0, 5] }}
                className="w-auto h-auto"
              >
                <OrbitControls
                  enableZoom={true}
                  enableDamping={true}
                  dampingFactor={0.25}
                  rotateSpeed={0.5}
                  zoomSpeed={1.2}
                />
                <Stage shadows={false}>
                  <ThreeDObject scale={0.5} productName={detail.name} />
                </Stage>
              </Canvas>
              {theme === "dark" ? (
                <img
                  className="w-[50px] h-auto z-10 absolute top-10 right-10 dark:text-white cursor-pointer bg-transparent border-none"
                  onClick={() => setShow3DObject(false)}
                  src={CloseLight}
                />
              ) : (
                <img
                  className="w-[50px] h-auto z-10 absolute top-10 right-10 dark:text-white cursor-pointer bg-transparent border-none"
                  onClick={() => setShow3DObject(false)}
                  src={CloseDark}
                />
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center w-[650px] h-[650px] max-h-[650px] relative">
              <img className="h-auto max-w-[650px]" src={currentImage} />
              {detail.threeDi ? (
                theme === "dark" ? (
                  <img
                    className="w-[50px] h-auto z-10 absolute bottom-10 left-10 dark:text-white cursor-pointer bg-transparent border-none"
                    onClick={() => setShow3DObject(true)}
                    src={ThreeDLight}
                  />
                ) : (
                  <img
                    className="w-[50px] h-auto z-10 absolute bottom-10 left-10 dark:text-white cursor-pointer bg-transparent border-none"
                    onClick={() => setShow3DObject(true)}
                    src={ThreeDDark}
                  />
                )
              ) : null}
            </div>
          )}

          <div className="w-[200px] h-auto flex flex-col gap-y-10 justify-center items-center">
            <div
              onClick={() => handleClick(0)}
              className="cursor-pointer w-full h-[150px] flex items-center justify-center"
            >
              <img
                className="w-auto max-h-[150px]"
                src={
                  detail.image && detail.image[0]
                    ? detail.image[0]
                    : currentImage
                }
              />
            </div>
            <div
              onClick={() => handleClick(1)}
              className="cursor-pointer w-full h-[150px] flex items-center justify-center"
            >
              <img
                className="w-auto max-h-[150px]"
                src={
                  detail.image && detail.image[1]
                    ? detail.image[1]
                    : currentImage
                }
              />
            </div>
            <div
              onClick={() => handleClick(2)}
              className="cursor-pointer w-full h-[150px] flex items-center justify-center"
            >
              <img
                className="w-auto max-h-[150px]"
                src={
                  detail.image && detail.image[2]
                    ? detail.image[2]
                    : currentImage
                }
              />
            </div>
            <div
              onClick={() => handleClick(3)}
              className="cursor-pointer w-full h-[150px] flex items-center justify-center"
            >
              <img
                className="w-auto max-h-[150px]"
                src={
                  detail.image && detail.image[3]
                    ? detail.image[3]
                    : currentImage
                }
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpenCart && (
          <CartDesktop
            closeCart={closeCart}
            parentHeight={
              detailDesktopRef.current
                ? detailDesktopRef.current.offsetHeight
                : 0
            }
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default DetailDesktop;
