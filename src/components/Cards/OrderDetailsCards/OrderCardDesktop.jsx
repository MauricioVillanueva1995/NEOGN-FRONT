import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ViewDetails from "./ViewDetails";

const OrderCardDesktop = ({ status, order }) => {
  const [modalDetailOpen, setModalDetailOpen] = useState(false);
  const closeDetail = () => setModalDetailOpen(false);
  const openDetail = () => setModalDetailOpen(true);

  function formatOrderDate(dateString) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(dateString);
    return date.toLocaleString("en-US", options);
  }

  const originalDate = order && order.date;

  const formattedDate = formatOrderDate(originalDate);

  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6 dark:text-white">
        {order ? `#${order.paymentId}` : "#NG029931"}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {formattedDate ? formattedDate : "22 Sep 2023 - 02:30PM"}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm">
        {status ? `${status}` : "Delivered"}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm">
        {order ? `$ ${order.total}.00` : "$ 1234.00"}
      </td>
      <td className="text-sm">
        {order ? (
          <div>
            <motion.button
              className="bg-[#E54660] text-white px-4 py-1 rounded-xl flex items-center justify-center w-fit"
              onClick={() => (modalDetailOpen ? closeDetail() : openDetail())}
            >
              View Details
            </motion.button>
            <AnimatePresence
              initial={false}
              mode="wait"
              onExitComplete={() => null}
            >
              {modalDetailOpen && <ViewDetails closeDetail={closeDetail} order={order} formattedDate={formattedDate} />}
            </AnimatePresence>
          </div>
        ) : (
          <div className="bg-[#E54660] text-white px-4 py-1 rounded-xl flex items-center justify-center w-fit">
            View Details
          </div>
        )}
      </td>
    </tr>
  );
};

export default OrderCardDesktop;
