import Skeleton from "react-loading-skeleton";

const UserCardSkeleton = () => {
  return (
    <>
      <tr className="transition-all hover:bg-gray-100 hover:shadow-lg animate-pulse">
        <td className="px-6  whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <Skeleton circle width={30} height={32}/>
            </div>
            <div className="ml-4">
              <Skeleton width={200} />
              <Skeleton width={200} />
            </div>
          </div>
        </td>
        <td className="px-6 py-6 whitespace-nowrap flex items-center justify-start">
          <Skeleton width={65} height={24} />
        </td>
        <td className="px-6 text-sm text-gray-500 whitespace-nowrap">
          <Skeleton width={65} height={24} />
        </td>
        <td className="px-3 py-2 text-sm font-medium text-center">
          <Skeleton width={120} height={36} />
        </td>
      </tr>
    </>
  );
};

export default UserCardSkeleton;
