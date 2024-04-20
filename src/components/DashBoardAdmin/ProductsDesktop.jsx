import { useEffect, useState } from "react";
import Paginated from "./Paginated";
import ProductCardDesktop from "./ProductCardDesktop";
import { motion, AnimatePresence } from "framer-motion";
import CreateProductDesktop from "../CreateProduct/CreateProductDesktop";
import ProductsTableSkeleton from "./Skeletons/ProductsTableSkeleton";

const ProductsDesktop = ({
  products,
  toggleStatus,
  currentPage,
  totalPages,
  onPageChange,
  onPrevPage,
  onNextPage,
}) => {
  const [modalCreateOpen, setModalCreateOpen] = useState(false);

  const closeCreate = () => setModalCreateOpen(false);
  const openCreate = () => setModalCreateOpen(true);

  const sortedProducts = [...products].sort((a, b) => {
    if (a.isAvailable === b.isAvailable) {
      return 0;
    }
    return a.isAvailable ? 1 : -1;
  });
  
  return (
    <div className="hidden lg:flex justify-center w-auto lg:ml-[350px] h-full py-10">
      <section className="bg-gray-50 dark:bg-gray-900 antialiased w-full">
        <div className="max-w-screen-2xl w-full">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="flex-1 flex items-center space-x-2">
                <h5>
                  <span className="text-gray-800 text-2xl font-semibold font-general-sans">
                    Products
                  </span>
                </h5>
              </div>
              <div className="flex-shrink-0 flex flex-col items-start md:flex-row md:items-center lg:justify-end space-y-3 md:space-y-0 md:space-x-3">
                <motion.button
                  onClick={() =>
                    modalCreateOpen ? closeCreate() : openCreate()
                  }
                  className="flex-shrink-0 inline-flex items-center justify-center py-2 px-3 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <img
                    src="https://www.svgrepo.com/show/513803/add.svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 w-4 h-4"
                    aria-hidden="true"
                  />
                  Add Product
                </motion.button>
                <AnimatePresence>
                  {modalCreateOpen && (
                    <CreateProductDesktop closeCreate={closeCreate} />
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      Product
                    </th>
                    <th scope="col" className="p-4">
                      Category
                    </th>
                    <th scope="col" className="p-4">
                      Price
                    </th>
                    <th scope="col" className="p-4">
                      Stock
                    </th>
                    <th scope="col" className="p-4">
                      Rating
                    </th>
                    <th scope="col" className="p-4">
                      Status
                    </th>
                    <th scope="col" className="p-4 text-start pl-20">
                      Management
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!sortedProducts ? (
                    <ProductsTableSkeleton />
                  ) : (
                    sortedProducts.map((el, index) => (
                      <ProductCardDesktop
                        key={index}
                        id={el.id}
                        title={el.name}
                        description={el.description}
                        price={el.price}
                        stock={el.stock}
                        brand={el.brand}
                        category={el.category}
                        createdAt={el.createdAt}
                        image_url={el.image[0]}
                        images={el.image}
                        averageRating={el.averageRating}
                        toggleStatus={toggleStatus}
                        isAvailable={el.isAvailable}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <Paginated
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              onPrevPage={onPrevPage}
              onNextPage={onNextPage}
            />
          </div>
        </div>
      </section>
      <div
        id="drawer-read-product-advanced"
        className="overflow-y-auto fixed top-0 left-0 z-40 p-4 w-full max-w-lg h-screen bg-white transition-transform -translate-x-full dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-label"
        aria-hidden="true"
      >
        <div>
          <h4
            id="read-drawer-label"
            className="mb-1.5 leading-none text-xl font-semibold text-gray-900 dark:text-white"
          >
            Apple iMac 25"
          </h4>
          <h5 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
            $2999
          </h5>
        </div>
        <button
          type="button"
          data-drawer-dismiss="drawer-read-product-advanced"
          aria-controls="drawer-read-product-advanced"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="grid grid-cols-3 gap-4 mb-4 sm:mb-5">
          <div className="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
              alt="iMac Side Image"
            />
          </div>
          <div className="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
              alt="iMac Front Image"
            />
          </div>
          <div className="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
              alt="iMac Back Image"
            />
          </div>
          <div className="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
              alt="iMac Back Image"
            />
          </div>
          <div className="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
              alt="iMac Front Image"
            />
          </div>
          <div className="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
              alt="iMac Side Image"
            />
          </div>
        </div>
        <dl className="sm:mb-5">
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Details
          </dt>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
            Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
            processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
            Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
            Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
          </dd>
        </dl>
        <dl className="grid grid-cols-2 gap-4 mb-4">
          <div className="col-span-2 p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 sm:col-span-1 dark:border-gray-600">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Shipping
            </dt>
            <dd className="flex items-center text-gray-500 dark:text-gray-400">
              <svg
                className="w-4 h-4 mr-1.5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              United States, Europe
            </dd>
          </div>
          <div className="col-span-2 p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 sm:col-span-1 dark:border-gray-600">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Colors
            </dt>
            <dd className="flex items-center space-x-2 font-light text-gray-500 dark:text-gray-400">
              <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full"></div>
              <div className="flex-shrink-0 w-6 h-6 bg-indigo-400 rounded-full"></div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600"></div>
              <div className="flex-shrink-0 w-6 h-6 bg-pink-400 rounded-full"></div>
              <div className="flex-shrink-0 w-6 h-6 bg-teal-300 rounded-full"></div>
              <div className="flex-shrink-0 w-6 h-6 bg-green-300 rounded-full"></div>
            </dd>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Product State
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                <svg
                  aria-hidden="true"
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                New
              </span>
            </dd>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Sold by
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">Flowbite</dd>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Ships from
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">Flowbite</dd>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Brand
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">Apple</dd>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Dimensions (cm)
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">105 x 15 x 23</dd>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Item weight
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">12kg</dd>
          </div>
        </dl>
        <div className="flex bottom-0 left-0 justify-center pb-4 space-x-4 w-full">
          <button
            type="button"
            className="text-white w-full inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              aria-hidden="true"
              className="mr-1 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
            Edit
          </button>
          <button
            type="button"
            className="inline-flex w-full items-center text-white justify-center bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-1.5 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
      <div
        id="delete-modal"
        tabIndex="-1"
        className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full h-auto max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="delete-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <button
                data-modal-toggle="delete-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                data-modal-toggle="delete-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDesktop;
