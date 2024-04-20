import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import { useState } from "react";
import {
  validateName,
  validateDescription,
  validateCategory,
  validateStock,
  validatePrice,
  validateRating,
  validateDiscount,
} from "../CreateProduct/helpers/ProductValidation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { editProduct } from "../../redux/actions/editProduct";
import { useNavigate } from "react-router-dom";
import Category from "../CreateProduct/Category";

import { setProductDetail, clearDetail } from "../../redux/slices/detailSlice";

import { categories } from "../CreateProduct/helpers/FormHelpers";
import BackdropEdit from "./BackdropEdit";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, damping: 25, stiffness: 500 },
  exit: { y: "100vh", opacity: 0 },
};

const EditProductDesktop = ({ id, closeEdit }) => {
  const detail = useSelector((state) => state.detail.detail);
  const dispatch = useDispatch();
  const history = useNavigate();

  const fetchDetail = () => {
    return async function (dispatch) {
      try {
        const json = await axios.get(`/api/products/${id}`);
        const detail = json.data;
        return dispatch(setProductDetail(detail));
      } catch (error) {
        console.error("Error fetching detail:", error);
      }
    };
  };

  useEffect(() => {
    dispatch(fetchDetail());
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
    stock: 0,
    price: 0,
    discount: 0,
    rating: 0,
  });

  useEffect(() => {
    if (detail) {
      const calculateAverageRating = (ratings) => {
        if (!ratings || ratings.length === 0) {
          return 0;
        }

        const sum = ratings.reduce((total, rating) => total + rating, 0);
        const average = sum / ratings.length;
        return average;
      };
      const averageRating = calculateAverageRating(detail.rating);

      setInput({
        name: detail.name,
        description: detail.description,
        category: detail.category,
        image: detail.image,
        stock: detail.stock,
        price: detail.price,
        discount: detail.discount,
        rating: averageRating,
      });
    }
  }, [detail]);

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
    stock: "",
    price: "",
    discount: "",
    rating: "",
  });

  const [descriptionLength, setDescriptionLength] = useState(0);
  const maxDescriptionLength = 255;

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: validateDescription(value),
    }));
  };

  const handleDescriptionChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      description: validateDescription(value),
    }));
    setDescriptionLength(value.length);
  };

  const handleCategoryChange = (selectedCategory) => {
    setInput((prevInput) => ({
      ...prevInput,
      category: selectedCategory,
      size: [],
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      category: validateCategory(selectedCategory),
    }));
  };

  // //****************************************************************** */
  const handleStockChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: parseFloat(value),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      stock: validateStock(value),
    }));
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: parseFloat(value),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      price: validatePrice(value),
    }));
  };

  const handleDiscountChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: parseFloat(value),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      discount: validateDiscount(value),
    }));
  };

  const handleRatingChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: parseInt(value),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      rating: validateRating(value),
    }));
  };
  //***************************************************************** */

  function handleSubmit(event) {
    event.preventDefault();
    const fieldErrors = {
      name: validateName(input.name),
      description: validateDescription(input.description),
      category: validateCategory(input.category),
      stock: validateStock(input.stock),
      price: validatePrice(input.price),
      discount: validateDiscount(input.discount),
      rating: validateRating(input.rating),
    };

    setErrors(fieldErrors);

    const hasErrors = Object.values(fieldErrors).some((error) => error !== "");

    if (hasErrors) {
      return;
    }

    const updatedInput = {
      ...input,
      rating: [input.rating],
    };

    dispatch(editProduct(id, updatedInput));
    toast.success("Product Edited Successfully");

    setInput({
      name: "",
      description: "",
      category: "",
      image: "",
      stock: 0,
      price: 0,
      discount: 0,
      rating: 0,
    });
    history("/Admin/Products-To-Modify");
  }

  return (
    <BackdropEdit closeModal={closeEdit}>
      <motion.div
        onClick={(event) => event.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="h-screen overflow-y-auto w-[700px] justify-center items-start md:inset-0 md:h-full dark:bg-neutral-950 flex pt-10">
          <div className="relative p-4 max-w-2xl h-screen md:h-auto font-general-sans w-full ">
            {/* <!-- content --> */}
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-zinc-950 sm:p-5 pb-[100px]">
              {/* <!--  header --> */}
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Edit Product
                </h3>
                <button
                  type="button"
                  onClick={closeEdit}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="updateProductModal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!--  body --> */}
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      value={input.name}
                      name="name"
                      id="name"
                      placeholder="Type product name"
                      onChange={handleNameChange}
                      autoComplete="off"
                      className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg block w-full p-2.5  dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      required=""
                    />
                    {errors.name && (
                      <div className="mb-3 text-normal text-red-500 ">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category
                    </label>
                    <Category
                      categories={categories}
                      selectedCategory={input.category}
                      onSelectCategory={handleCategoryChange}
                    />
                    {errors.category && (
                      <div className="mb-3 text-normal text-red-500 ">
                        {errors.category}
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      value={input.description}
                      name="description"
                      id="description"
                      rows="4"
                      placeholder="Write product description here"
                      onChange={handleDescriptionChange}
                      maxLength={maxDescriptionLength}
                      className="block p-2.5 w-full text-sm text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 bg-gray-50 rounded-lg border border-gray-300 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    />
                    {errors.description && (
                      <div className="mb-3 text-normal text-red-500 ">
                        {errors.description}
                      </div>
                    )}
                    <span className="flex justify-end dark:text-white">
                      {`${descriptionLength}/${maxDescriptionLength}`}
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor="stock"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Stock
                    </label>
                    <input
                      type="number"
                      name="stock"
                      id="stock"
                      value={input.stock}
                      autoComplete="off"
                      className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg  block w-full p-2.5 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      onChange={handleStockChange}
                      placeholder="999"
                      required=""
                    />
                    {errors.stock && (
                      <div className="mb-3 text-normal text-red-500 ">
                        {errors.stock}
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      value={input.price}
                      autoComplete="off"
                      onChange={handlePriceChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg  block w-full p-2.5 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="$2999"
                      required=""
                    />
                    {errors.price && (
                      <div className="mb-3 text-normal text-red-500 ">
                        {errors.price}
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="discount"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Discount
                    </label>
                    <input
                      type="number"
                      name="discount"
                      id="discount"
                      value={input.discount}
                      autoComplete="off"
                      onChange={handleDiscountChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg  block w-full p-2.5 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="99%"
                      required=""
                    />
                    {errors.discount && (
                      <div className="mb-3 text-normal text-red-500 ">
                        {errors.discount}
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="rating"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Rating
                    </label>
                    <input
                      type="number"
                      name="rating"
                      id="rating"
                      value={input.rating}
                      autoComplete="off"
                      onChange={handleRatingChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-sm rounded-lg  block w-full p-2.5 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="1/5"
                      required=""
                    />
                    {errors.rating && (
                      <div className="mb-3 text-normal text-red-500 ">
                        {errors.rating}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-black hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-neutral-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black dark:bg-gray-200 dark:hover:bg-white"
                  >
                    Edit product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </BackdropEdit>
  );
};

export default EditProductDesktop;
