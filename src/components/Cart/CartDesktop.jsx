import { useState } from "react";
import { motion } from "framer-motion";
import LeftySlider from "./LeftySlider/LeftySlider";
import { useSelector } from "react-redux";
import WalletPayment from "./WalletBrick";
import { initMercadoPago } from "@mercadopago/sdk-react";
import CartProduct from "../Cards/CartProduct";

const token = import.meta.env.VITE_PUBLIC_KEY;
initMercadoPago(token);

const CartDesktop = ({ closeCart, parentHeight }) => {
  const dropIn = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: "0vw", opacity: 1, damping: 25, stiffness: 500 },
    exit: { x: "100vw", opacity: 0 },
  };

  const cart = useSelector((state) => state.cart);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const [cartIsEmpty, setCartIsEmpty] = useState(cart.items.length === 0);
  console.log(dropIn);

  const handleBuyClick = () => {
    if (cart.items.length > 0) {
      setShowPaymentMethods(true);
    } else {
      setCartIsEmpty(true);
    }
  };

  const calculateTotal = (newTotal) => {
    setTotalValue(newTotal);
  };

  return (
    <LeftySlider onClick={closeCart} parentHeight={parentHeight}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute top-10 right-0"
      >
        <div className="absolute top-0 right-10 h-[800px] w-[460px] p-8 overflow-y-hidden rounded-[24px] pt-4 flex flex-col bg-[#0D0D0D]">
          <div className="w-full h-auto flex justify-between">
            <h5
              id="drawer-right-label"
              className="inline-flex items-center mb-2 font-jakarta-sans text-[36px] font-semibold text-white"
            >
              Cart
            </h5>
            <button
              type="button"
              onClick={closeCart}
              className="text-gray-400 bg-transparent hover:bg-gray-700 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                className="w-[30px] h-[30px]"
                src="https://i.postimg.cc/Y2mQRcQJ/close-x-svgrepo-com.png"
              />
            </button>
          </div>

          <div className="w-auto h-full flex flex-col gap-y-6 justify-between items-center">
            <div className="w-full h-[400px] flex flex-col justify-start items-center gap-y-6  py-5 overflow-y-auto">
              {cartIsEmpty && (
                <div className="text-white font-general-sans font-medium w-auto flex justify-center items-center">
                  No items in cart
                </div>
              )}
              {!cartIsEmpty &&
                cart.items.map((product) => (
                  <CartProduct
                    key={product.id}
                    id={product.id}
                    product={product}
                    calculateTotal={calculateTotal}
                  />
                ))}
            </div>
            <div className="w-full h-auto flex justify-center items-center">
              <div className="w-[330px]">
                <div className="bg-[#D7DCE4] rounded-[20px] shadow-md p-4 text-sm ">
                  <h2 className="font-semibold mb-2 text-base">Summary</h2>
                  <div className="flex justify-between mb-1">
                    <span>Subtotal</span>
                    <span>${cart.subtotal}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Shipping</span>
                    <span>${cart.shippingPrice}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Taxes</span>
                    <span>${cart.tax}</span>
                  </div>
                  <div className="w-full h-[1px] border-black bg-black"></div>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">${cart.totalPrice}</span>
                  </div>
                  {!showPaymentMethods && (
                    <button
                      className="text-white font-semibold bg-[#1D2430] hover:bg-slate-800 py-2 px-4 rounded-lg mt-4 w-full focus:outline-none focus:ring-4 focus:ring-gray-300"
                      onClick={handleBuyClick}
                    >
                      Checkout
                    </button>
                  )}
                  {showPaymentMethods && (
                    <div className="w-full mx-auto my-auto align-center px-2 rounded">
                      <WalletPayment />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </LeftySlider>
  );
};

export default CartDesktop;
