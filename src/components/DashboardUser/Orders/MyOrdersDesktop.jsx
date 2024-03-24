import OrderCardDesktop from "../../Cards/OrderDetailsCards/OrderCardDesktop";
import { useSelector } from "react-redux";
const MyOrdersDesktop = () => {
  const myOrders = useSelector((state) => state.myOrders.myOrders);
  return (
    <div className="xl:w-[700px] h-auto flex justify-start">
      <div className="inline-block min-w-full py-2 align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr className="font-poppins text-[#6C7275] text-sm">
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left sm:pl-6">
                  Number ID
                </th>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left">
                  Dates
                </th>
                <th scope="col" className="px-3 py-3.5 text-left">
                  Status
                </th>
                <th scope="col" className="px-3 py-3.5 text-left">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:text-white">
              {myOrders.length > 0 &&
                myOrders.map((order, index) => (
                  <OrderCardDesktop
                    key={index}
                    order={order}
                    status="Confirmed"
                  />
                ))}
              <OrderCardDesktop />
              <OrderCardDesktop />
              <OrderCardDesktop />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersDesktop;
