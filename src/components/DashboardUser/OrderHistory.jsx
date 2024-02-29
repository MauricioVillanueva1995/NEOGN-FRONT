import TitleSection from "../TitleSection";
import OrderHistoryDesktop from "./OrderHistoryDesktop";
import ToggleOrders from "./Orders/ToggleOrders";

const OrderHistory = ({ modalOpenCart, closeCart }) => {
  return (
    <div className="w-full h-screen">
      <OrderHistoryDesktop
        modalOpenCart={modalOpenCart}
        closeCart={closeCart}
      />
      <div className="h-screen max-h-screen flex flex-col lg:hidden w-full pt-6 dark:bg-black">
        <TitleSection title="Orders" location="/Account" />
        {/* Card */}
        <div className="w-full pt-11 dark:bg-black">
          <ToggleOrders leftTittle="Current" rightTittle="History" />
        </div>
      </div>
    </div>
  );
};
export default OrderHistory;
