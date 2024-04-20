import Skeleton from "react-loading-skeleton";

const TransactionCardSkeleton = () => {
  return (
    <>
      <tr className="bg-gray-50 dark:bg-gray-700 animate-pulse">
        <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
          <Skeleton width={200}/>
        </td>
        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
        <Skeleton width={80}/>
        </td>
        <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
        <Skeleton width={60}/>
        </td>
        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
        <Skeleton width={80}/>
        </td>
        <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
        <Skeleton width={85}/>
        </td>
        <td className="p-4 whitespace-nowrap">
          <Skeleton width={90}/>
        </td>
      </tr>
    </>
  );
};

export default TransactionCardSkeleton
