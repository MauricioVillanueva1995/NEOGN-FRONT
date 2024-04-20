import UsersTableSkeleton from "./Skeletons/UsersTableSkeleton";
import CardUserDesktop from "../Cards/CardUserDesktop";

const ManageUserDesktop = ({ allUsers, toggleStatus, toggleAdminStatus }) => {
  return (
    <div className="hidden lg:flex justify-center w-auto lg:ml-[350px] h-full py-10">
      <section className="bg-gray-50 dark:bg-gray-900 antialiased w-full">
        <div className="max-w-screen-2xl w-full">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4">
              <div className="w-full hidden lg:flex justify-center flex-col">
                <h3 className=" text-gray-800 text-2xl font-semibold font-general-sans p-4">
                  Users
                </h3>
                <div className="flex flex-col w-full">
                    <div className="inline-block w-full">
                      <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
                        <table className="w-full divide-y divide-gray-200">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 tracking-wider text-left"
                              >
                                Name
                              </th>

                              <th
                                scope="col"
                                className="px-6 py-3 tracking-wider text-left"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 tracking-wider text-left"
                              >
                                Role
                              </th>
                              <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {allUsers.length === 0 ? (
                              <UsersTableSkeleton />
                            ) : (
                              allUsers
                                .slice()
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
                                ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageUserDesktop;
