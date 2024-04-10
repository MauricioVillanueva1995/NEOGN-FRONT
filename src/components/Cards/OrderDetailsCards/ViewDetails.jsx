import { motion } from "framer-motion";
import BackdropDetails from "./BackdropDetails";
import OrderSummaryDesktop from "./OrderSummaryDesktop";
import OrderedProductsDesktop from "./OrderedProductsDesktop";
import { useSelector } from "react-redux";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, damping: 25, stiffness: 500 },
  exit: { y: "100vh", opacity: 0 },
};

const ViewDetails = ({ closeDetail, order, formattedDate }) => {
  
  const user = useSelector((state) => state.user)
 console.log(order);
  return (
    <BackdropDetails closeDetail={closeDetail}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="max-h-[565px] h-auto w-[900px] bg-white rounded-2xl text-black flex flex-col justify-center items-start p-10 gap-y-4">
          <h1 className="font-general-sans font-semibold text-base">Thank you. Your order has been received.</h1>
          <div className="w-auto h-auto flex justify-start items-center gap-x-3">
            <img
              className="w-14 h-14 rounded-full"
              src={user.photo}
            />
            <div className="w-auto h-auto flex flex-col justify-center items-start font-general-sans">
              <h2 className="font-semibold text-[14px]">{user.name}</h2>
              <p className="font-normal text-[12px] text-[#6C7275] tracking-wider">16 Previous Orders</p>
              <p className="font-normal text-[12px] text-[#6C7275] tracking-wider">{user.email}</p>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-[#AAAAAA]" />
          <div className="w-full h-auto flex justify-around items-center font-poppins">
            <div className="flex flex-col w-auto h-auto items-start justify-center">
              <h3 className="text-xs tracking-wider">Order Number:</h3>
              <p className="font-semibold text-sm">#{order.paymentId}</p>
            </div>
            <div className="flex flex-col w-auto h-auto items-start justify-center">
              <h3 className="text-xs tracking-wider">Date:</h3>
              <p className="font-semibold text-sm">{formattedDate}</p>
            </div>
            <div className="flex flex-col w-auto h-auto items-start justify-center">
              <h3 className="text-xs tracking-wider">Total:</h3>
              <p className="font-semibold text-sm">$ {order.total}</p>
            </div>
            <div className="flex flex-col w-auto h-auto items-start justify-center">
              <h3 className="text-xs tracking-wider">Payment Method:</h3>
              <p className="font-semibold text-sm">MercadoPago</p>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-[#AAAAAA]" />
          <div className="w-full h-auto flex items-center justify-around">
            <OrderedProductsDesktop products={order.products} />
            <OrderSummaryDesktop total={order.total} />
          </div>
        </div>
      </motion.div>
    </BackdropDetails>
  );
};

export default ViewDetails;
