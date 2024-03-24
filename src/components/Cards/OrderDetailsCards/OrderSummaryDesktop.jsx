const OrderSummaryDesktop = ({total}) => {
  return (
    <div className="w-[400px] h-auto flex flex-col justify-start items-start font-poppins">
      <h2 className="text-sm font-bold">Order Details</h2>
      <div className="w-full h-auto flex flex-col justify-center items-center gap-y-3 py-3">
        <div className="w-full h-auto flex items-center justify-between">
          <h2 className="font-medium">Subtotal</h2>
          <p className="font-semibold text-base">${total}</p>
        </div>
        <div className="w-full h-auto flex items-center justify-between">
          <h2 className="font-medium">Shipping Fee</h2>
          <p className="font-semibold text-base">$50</p>
        </div>
        <div className="w-full h-auto flex items-center justify-between">
          <h2 className="font-medium">Taxes</h2>
          <p className="font-semibold text-base">$5</p>
        </div>
      </div>
      <div className="w-full border-b-[1px] border-[#AAAAAA]" />
      <div className="w-full h-auto flex items-center justify-between font-bold text-base py-3">
        <h2>Total</h2>
        <p>${`${total + 55}`}</p>
      </div>
    </div>
  );
};

export default OrderSummaryDesktop;
