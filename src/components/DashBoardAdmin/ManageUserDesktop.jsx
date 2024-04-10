import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/slices/allUsersSlice";
import CardUserDesktop from "../Cards/CardUserDesktop";

const ManageUserDesktop = ({allUsers}) => {
  const dispatch = useDispatch();

  const getAllUsers = () => {
    return async function (dispatch) {
      try {
        const json = await axios.get(
          "https://neogn-back-584v.onrender.com/api/users"
        );
        const users = json.data;
        return dispatch(getUsers(users));
      } catch (error) {
        console.error("Error getting users:", error);
      }
    };
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const toggleAdminStatus = async (userId, newAdminStatus) => {
    try {
      await axios.put(
        `https://neogn-back-584v.onrender.com/api/users/update/${userId}`,
        {
          isAdmin: newAdminStatus,
        }
      );
      dispatch(getAllUsers());
    } catch (error) {
      console.error("Error toggling admin status:", error);
    }
  };

  const toggleStatus = async (userId, newStatus) => {
    try {
      await axios.put(
        `https://neogn-back-584v.onrender.com/api/users/update/${userId}`,
        {
          isDisable: newStatus,
        }
      );
      dispatch(getAllUsers());
    } catch (error) {
      console.error("Error toggling admin status:", error);
    }
  };

  return (
    <div className="w-auto hidden lg:flex justify-center flex-col lg:ml-[350px]">
      <h3 className="mt-6 text-gray-800 text-2xl font-semibold font-general-sans">Users</h3>
      <div className="flex flex-col mt-6 w-full">
        <div className="w-full">
          <div className="inline-block w-full pr-6">
            <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                {allUsers
                  ?.slice()
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((el) => (
                    <CardUserDesktop
                      key={el.id}
                      id={el.id}
                      toggleStatus={toggleStatus}
                      toggleAdminStatus={toggleAdminStatus}
                      name={el.name}
                      email={el.email}
                      image={el.photoURL}
                      isAdmin={el.isAdmin}
                      isDisable={el.isDisable}
                    />
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUserDesktop
