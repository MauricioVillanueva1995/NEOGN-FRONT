import { Link } from "react-router-dom";

const MyOrdersDesktop = () => {
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
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6 dark:text-white">
                  #3456_768
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  October 17, 2023
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  Delivered
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  $1234.00
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm sm:pr-6 underline">
                  <Link>
                    View Details
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6 dark:text-white">
                  #3456_768
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  October 17, 2023
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  Delivered
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  $1234.00
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm sm:pr-6 underline">
                  <Link>
                    View Details
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6 dark:text-white">
                  #3456_768
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  October 17, 2023
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  Delivered
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  $1234.00
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm sm:pr-6 underline">
                  <Link>
                    View Details
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6 dark:text-white">
                  #3456_768
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  October 17, 2023
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  Delivered
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  $1234.00
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm sm:pr-6 underline">
                  <Link>
                    View Details
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersDesktop;
