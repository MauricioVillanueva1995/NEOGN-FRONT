import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchProductById from "../redux/actions/fetchProductById";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";
import { clearDetail } from "../redux/slices/detailSlice";
import toast from "react-hot-toast";
import { addToWishlist, removeFromWishlist } from "../redux/slices/userSlice";
import TitleSection from "../components/TitleSection";
import { useTheme } from "../components/ThemeContext";
import DetailDesktop from "../components/Detail/DetailDesktop";

const Detail = ({ modalOpenCart, closeCart }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail.detail);
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const wishlist = user.wishlist;
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (detail.image) {
      setCurrentImage(detail.image[0] || "");
    }
  }, [detail]);

  useEffect(() => {
    dispatch(fetchProductById(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  useEffect(() => {
    const existingProduct = wishlist.find((product) => product.id === id);
    setIsAdded(existingProduct ? true : false);
    dispatch(fetchProductById(id));
  }, [wishlist, dispatch, id]);

  const handleClick = (newImage) => {
    setSelectedImageIndex(newImage);
    if (detail.image[newImage]) {
      setCurrentImage(detail.image[newImage]);
    } else {
      setCurrentImage(detail.image);
    }
  };

  const handleToggleWishlist = () => {
    console.log("user wish", wishlist);
    if (!user.id) {
      return navigate("/Account");
    }
    toggleWishlist(id);
    setIsAdded(!isAdded);
    console.log("user wish", wishlist);
  };

  const toggleWishlist = () => {
    const existingProduct = wishlist.find((detail) => detail.id === id);
    if (existingProduct) {
      dispatch(removeFromWishlist({ id }));
      toast.success("Product successfully removed!");
    } else {
      const productData = {
        id: detail.id,
        name: detail.name,
        price: detail.price,
        image: detail.image,
        brand: detail.brand,
        description: detail.description,
      };
      dispatch(addToWishlist(productData));
      toast.success("Product successfully added!");
    }
  };

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
    const productData = {
      id: detail.id,
      name: detail.name,
      price: detail.price,
      image: detail.image[0],
      brand: detail.brand,
      description: detail.description,
    };
    toast.success(`Added to cart successfully (${quantity})`);

    console.log(productData);
    dispatch(addToCart(productData));
  };

  return (
    <div>
      <DetailDesktop
        detail={detail}
        currentImage={currentImage}
        handleClick={handleClick}
        handleAddToCart={handleAddToCart}
        isAdded={isAdded}
        handleToggleWishlist={handleToggleWishlist}
        modalOpenCart={modalOpenCart}
        closeCart={closeCart}
      />
      <div className="flex flex-col w-auto h-screen left-[15px] pb-[120px] md:mb-[600px] lg:mb-[700px] dark:bg-[#121212] dark:text-white lg:hidden">
        <TitleSection title="Detail" location="/" />
        <div className="flex flex-row justify-evenly pl-3 pt-5 gap-x-4">
          <div className="content flex flex-col w-1/4 md:w-1/5 lg:w-1/6 justify-center gap-3">
            <div
              onClick={() => handleClick(1)}
              className={`inline-flex justify-center h-[56px] dark:bg-white w-[56px] md:h-[6rem] md:w-[6rem] lg:h-[10rem] lg:w-[10rem] xl:h-auto rounded-[12px] p-1 ${
                selectedImageIndex === 1
                  ? "border-2 border-red-400"
                  : "border border-category"
              }`}
            >
              <img
                className="relative w-full h-full object-cover"
                alt="small img"
                src={
                  detail.image && detail.image[1]
                    ? detail.image[1]
                    : currentImage
                }
              />
            </div>
            <div
              onClick={() => handleClick(2)}
              className={`inline-flex justify-center h-[56px] dark:bg-white w-[56px] md:h-[6rem] md:w-[6rem] lg:h-[10rem] lg:w-[10rem] xl:h-auto rounded-[12px] p-1 ${
                selectedImageIndex === 2
                  ? "border-2 border-red-400"
                  : "border border-category"
              }`}
            >
              <img
                className="relative w-full h-full object-cover"
                alt="small img"
                src={
                  detail.image && detail.image[2]
                    ? detail.image[2]
                    : currentImage
                }
              />
            </div>
            <div
              onClick={() => handleClick(3)}
              className={`inline-flex justify-center h-[56px] dark:bg-white w-[56px] md:h-[6rem] md:w-[6rem] lg:h-[10rem] lg:w-[10rem] xl:h-auto  rounded-[12px] p-1 ${
                selectedImageIndex === 3
                  ? "border-2 border-red-400"
                  : "border border-category"
              }`}
            >
              <img
                className="relative w-full h-full object-cover"
                alt="small img"
                src={
                  detail.image && detail.image[3]
                    ? detail.image[3]
                    : currentImage
                }
              />
            </div>
            <div
              onClick={() => handleClick(0)}
              className={`inline-flex justify-center h-[56px] dark:bg-white w-[56px] md:h-[6rem] md:w-[6rem] lg:h-[10rem] lg:w-[10rem] xl:h-auto  rounded-[12px] p-1 ${
                selectedImageIndex === 0
                  ? "border-2 border-red-400"
                  : "border border-category"
              }`}
            >
              <img
                className="relative w-full h-full object-cover"
                alt="small img"
                src={
                  detail.image && detail.image[0]
                    ? detail.image[0]
                    : currentImage
                }
              />
            </div>
          </div>
          <div className="Big image  flex bg-card dark:bg-white rounded-tl-[20px] rounded-bl-[20px] overflow-hidden relative  w-[30rem] md:w-[35rem] lg:w-[44rem] xl:w-auto">
            <div className="absolute top-4 right-4">
              <div
                className="Wishlist-Heart inline-flex relative bg-absolutestaticwhite-s rounded-[10px]"
                style={{ zIndex: 1 }}
              >
                <div className="bg-white dark:bg-darkCard h-[42px] w-[42px] rounded-[10px] overflow-hidden flex items-center justify-center">
                  {
                    <img
                      src={
                        isAdded
                          ? theme === "dark"
                            ? "https://i.postimg.cc/ydfDvxWm/heasrt.png"
                            : "https://i.postimg.cc/YSGJpbnw/heart-svgrepo-com-1.png"
                          : theme === "dark"
                          ? "https://i.postimg.cc/rsjdRY0z/heart.png"
                          : "https://i.postimg.cc/4xFd9d9L/heart-svgrepo-com.png"
                      }
                      className={`w-5 h-5 md:w-auto md:h-auto object-cover rounded-lg cursor-pointer ${
                        isAdded ? "text-red-500" : "text-gray-500"
                      }`}
                      onClick={handleToggleWishlist}
                    />
                  }
                </div>
              </div>
            </div>
            <img
              className="relative bg-cover bg-no-repeat"
              src={currentImage}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between relative pt-6 px-3 md:pl-15 md:pl-15 lg:pr-20 lg:pl-20">
          <div className="w-auto h-auto flex gap-x-4">
            <div className="pt-1 gap-y-2 flex flex-col items-start justify-between relative self-stretch w-full">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-oil-11 text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                {`${detail.name}`}
              </div>

              <p className="relative justify-around font-[Roboto-Regular, Helvetica] font-normal text-oil-11 text-[14px] tracking-[0] leading-normal">
                {detail.description}
              </p>
            </div>
            <div className="w-auto h-auto flex items-start justify-center">
              <div className="flex items-center justify-center h-[auto] gap-x-2 px-5 py-2 relative rounded-[10px] border border-solid border-oil-03">
                <img
                  className="relative w-[16px] h-[16px]"
                  alt="Star"
                  src="https://i.postimg.cc/YCvVthCt/star-1-svgrepo-com.png"
                />
                <div className="relative w-fit mt-[-0.50px] [font-family:'Roboto-Medium',Helvetica] font-medium text-oil-11 text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                  4.9
                </div>
              </div>
            </div>
          </div>

          <div className="w-auto flex flex-col pt-5 gap-[16px]  ">
            <div className="w-auto gap-[12px] inline-flex items-center relative flex-[0_0_auto]">
              <div className="w-auto h-full items-start justify-start inline-flex relative flex-[0_0_auto]">
                <div className="w-auto h-auto flex items-center justify-center p-[9px] bg-gray-100 dark:bg-darkCard rounded-[10px]">
                  <img
                    src={
                      theme === "dark"
                        ? "https://i.postimg.cc/L5KY5GcZ/document-svgsrepo-com.png"
                        : "https://i.postimg.cc/NjZnFBKm/document-svgrepo-com.png"
                    }
                    className="relative w-[24px] h-[24px]"
                    alt="Document Icon"
                  />
                </div>
              </div>
              <div className="relative w-auto  overflow-hidden [font-family:'Roboto-Regular',Helvetica] font-normal text-oil-11 text-[16px] tracking-[0] leading-[normal]">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-auto h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="px-2 h-12 w-auto flex items-center">
                  <h1 className="">Product Specifications</h1>
                </div>
                <div className="absolute top-3 right-0  transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                <div className="content bg-gray-100 dark:bg-darkCard rounded-[12px] overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                  <div className="p-4">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quibusdam quisquam id officia quam cumque fugiat. Delectus
                      a error alias atque ratione esse voluptate beatae fugiat
                      vitae, officia at ullam enim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img className="relative h-px bg-gray-300 w-full" />
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-[12px] inline-flex items-center relative flex-[0_0_auto]">
                <div className="justify-center gap-[10px] p-[9px] bg-gray-100 dark:bg-darkCard rounded-[10px] inline-flex items-center relative flex-[0_0_auto]">
                  <img
                    src={
                      theme === "dark"
                        ? "https://i.postimg.cc/sXSxkwMf/colors-svgrsepo-com.png"
                        : "https://i.postimg.cc/d0dxTpCX/colors-svgrepo-com.png"
                    }
                    className="relative w-[24px] h-[24px]"
                    alt="Colors Icon"
                  />
                </div>
                <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-oil-11 text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Colors
                </div>
              </div>

              <div className="inline-flex items-start  gap-[8px] relative flex-[0_0_auto]">
                <div
                  className={`bg-oil-08 bg-red-100 ${
                    detail.color == "Red"
                      ? "border-red-700 bg-red-800"
                      : "border-oil-03"
                  } border-primary-color  relative w-[24px] h-[24px] rounded-[12px] border-2 border-solid`}
                />
                <div
                  className={`bg-oil-0 bg-gray-100 ${
                    detail.color == "Black"
                      ? "border-red-700 bg-gray-800"
                      : "border-oil-03"
                  } relative w-[24px] h-[24px] rounded-[12px] border-2 border-solid`}
                />

                <div
                  className={`bg-absolutestaticwhite-s border-oil-03 ${
                    detail.color == "White"
                      ? "border-red-700 bg-white"
                      : "border-oil-03"
                  } relative w-[24px] h-[24px] rounded-[12px] border-2 border-solid`}
                />
              </div>
            </div>
            <img className="relative h-px bg-gray-300 w-full" />
          </div>

          <div className="flex flex-row pt-4  ">
            <div className="flex w-[342px] items-center justify-between ">
              <p className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-black dark:text-white text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                {`$ ${detail.price}`}
              </p>
            </div>
            <button
              className="bg-heroColor dark:bg-darkHero flex w-[200px] items-center justify-center gap-[4px] p-[12px] relative rounded-[15px] text-white"
              onClick={handleAddToCart}
            >
              <div className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium t text-[18px] tracking-[0] leading-[normal] whitespace-nowrap">
                Add To Cart
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;