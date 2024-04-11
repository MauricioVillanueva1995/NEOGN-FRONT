import { useState } from "react";

const CardUserDesktop = ({
  id,
  name,
  toggleStatus,
  toggleAdminStatus,
  photo_secure_url,
  email,
  isAdmin,
  isDisable,
}) => {
  const [adminStatus, setAdminStatus] = useState(isAdmin);
  const [status, setStatus] = useState(isDisable);

  const handleToggleAdminStatus = () => {
    const newAdminStatus = !adminStatus;
    setAdminStatus(newAdminStatus);
    toggleAdminStatus(id, newAdminStatus);
  };

  const handleToggleStatus = () => {
    const newStatus = !status;
    setStatus(newStatus);
    toggleStatus(id, newStatus);
  };

  const defaultImageUrl =
    "https://i.pinimg.com/originals/1d/2a/7b/1d2a7b6ecfa0afc3b7c854d3aad01f37.jpg";

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr className="transition-all hover:bg-gray-100 hover:shadow-lg">
        <td className="px-6  whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-10 h-10 rounded-full"
                src={photo_secure_url || defaultImageUrl}
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{name}</div>
              <div className="text-sm text-gray-500">{email}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-6 whitespace-nowrap flex items-center justify-start">
          {/* Toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={!status}
              onChange={handleToggleStatus}
              className="sr-only peer"
            />
            <div className="group peer ring-0 bg-gradient-to-bl from-red-800 via-red-700 to-red-600 rounded-full outline-none duration-1000 after:duration-300 w-16 h-7 shadow-md peer-focus:outline-none after:content-[''] after:rounded-full after:absolute peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)] after:outline-none after:h-6 after:w-6 after:top-[2px] after:left-1 peer-checked:after:translate-x-[33px] peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-400 peer-checked:to-emerald-600" />
          </label>
        </td>
        <td className="px-6 text-sm text-gray-500 whitespace-nowrap">
          {adminStatus === true ? "Admin" : "User"}
        </td>
        <td className="px-3 py-2 text-sm font-medium text-center">
          {adminStatus ? (
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 py-2 text-center"
              onClick={handleToggleAdminStatus}
            >
              Remove Admin
            </button>
          ) : (
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-6 py-2 text-center"
              onClick={handleToggleAdminStatus}
            >
              Add Admin
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default CardUserDesktop;
