import Skeleton from "react-loading-skeleton";

const ProductCardSkeleton = () => {

  return (
    <>
      <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 animate-pulse">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[300px]"
        >
          <div className="flex items-center mr-3 w-[200px] max-w-[180px] gap-x-3">
            <Skeleton  circle width={30} height={32} />
            <Skeleton width={200} />
          </div>
        </th>
        <td className="px-4 py-3 w-[150px]">
          <Skeleton width={100} />
        </td>
        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <Skeleton width={65} />
        </td>
        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <div className="flex items-center">
            <Skeleton width={55} />
          </div>
        </td>
        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <Skeleton width={120} />
        </td>
        <td className="px-4 py-4 flex">
          <Skeleton width={65} height={24} />
        </td>
        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <div className="flex space-x-4 items-end justify-end">
            <Skeleton width={90} height={24}/>
            <Skeleton width={100} height={24}/>
            <Skeleton width={100} height={24}/>
          </div>
        </td>
      </tr>
    </>
  );
};
export default ProductCardSkeleton;
