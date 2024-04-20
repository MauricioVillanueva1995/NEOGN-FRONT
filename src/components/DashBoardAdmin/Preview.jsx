import BackdropEdit from "./BackdropEdit";
import { motion } from "framer-motion";
import CircleBlack from "../../assets/Icons/Circles/CircleBlack.png";
import CircleBlue from "../../assets/Icons/Circles/CircleBlue.png";
import CircleGreen from "../../assets/Icons/Circles/CircleGreen.png";
import CircleRed from "../../assets/Icons/Circles/CircleRed.png";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, damping: 25, stiffness: 500 },
  exit: { y: "100vh", opacity: 0 },
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Preview = ({
  id,
  title,
  description,
  brand,
  images,
  image_url,
  category,
  isAvailable,
  createdAt,
  price,
  stock,
  averageRating,
  closePreview,
}) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const changeMainImage = (index) => {
    setCurrentImage(images[index]);
  };
  const dateObject = new Date(createdAt);
  const day = dateObject.getDate();
  const monthIndex = dateObject.getMonth();
  const year = dateObject.getFullYear();

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const monthName = monthNames[monthIndex];

  const formattedDate = `${day} ${monthName} ${year}`;

  return (
    <BackdropEdit closeModal={closePreview}>
      <motion.div
        onClick={(event) => event.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-auto h-auto bg-transparent flex gap-x-5">
          <div className="w-[364px] h-[500px] bg-white rounded-xl flex flex-col justify-center py-5 gap-y-4">
            <div>
              <img src={currentImage} />
            </div>
            <Carousel responsive={responsive}>
              {images.map((image, index) => {
                return (
                  <img
                    key={index}
                    onClick={() => changeMainImage(index)}
                    className="cursor-pointer"
                    src={image}
                  />
                );
              })}
            </Carousel>
          </div>
          <div className="w-[600px] h-[500px] bg-white rounded-xl p-5 gap-y-[22px] flex flex-col">
            <div className="flex items-center justify-between">
              <div className="font-general-sans font-semibold text-[40px] dark:text-white">
                {title.length > 16 ? `${title.slice(0, 16)}...` : title}
              </div>
              <h1 className="font-poppins font-normal text-3xl dark:text-white">
                {brand}
              </h1>
            </div>
            <div className="w-auto h-auto flex gap-x-4 font-general-sans text-[#5A595B]">
              <div className="flex">
                Rating:&nbsp;&nbsp;
                <svg
                  className="w-5 h-5 text-yellow-300 dark:text-[#F8F8F8] me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <h3 className="text-black">{averageRating}/5</h3>
              </div>
              <div className="flex">
                Stock:&nbsp;
                <h3 className="text-black">{stock}</h3>
              </div>
            </div>
            <h2 className="font-poppins font-semibold text-[30px]">
              {" "}
              $&nbsp;{price}.00
            </h2>
            <div className="h-[2px] w-full bg-[#D4D4D4]" />
            <div className="flex flex-col w-full h-auto text-wrap">
              Description:
              <div>{description}</div>
            </div>
            <h3 className="w-auto h-auto flex gap-x-4 font-general-sans text-[14px]">
              Color Variant
            </h3>
            <div className="w-full h-auto flex flex-wrap gap-x-4 text-[#5A595B]">
              <div className="h-fit py-1.5 px-2.5 w-fit border border-gray-400 rounded-lg gap-x-2 items-center justify-center flex">
                <img src={CircleBlack} className="w-5 h-auto" />
                Black
              </div>
              <div className="h-fit py-1.5 px-2.5 w-fit border border-gray-400 rounded-lg gap-x-2 items-center justify-center flex">
                <img src={CircleRed} className="w-5 h-auto" />
                Red
              </div>
              <div className="h-fit py-1.5 px-2.5 w-fit border border-gray-400 rounded-lg gap-x-2 items-center justify-center flex">
                <img src={CircleGreen} className="w-5 h-auto" />
                Green
              </div>
              <div className="h-fit py-1.5 px-2.5 w-fit border border-gray-400 rounded-lg gap-x-2 items-center justify-center flex">
                <img src={CircleBlue} className="w-5 h-auto" />
                Blue
              </div>
            </div>
            <div className="w-auto h-auto flex gap-x-2 items-center">
              <h3 className="w-auto h-auto flex gap-x-4 font-general-sans text-[14px]">
                Available:
              </h3>
              <div
                className={`${
                  isAvailable ? "bg-green-600" : "bg-red-600"
                } text-white w-fit h-fit rounded-md px-1 py-[1px] text-xs`}
              >
                {isAvailable ? "In Stock" : "Out Of Stock"}
              </div>
            </div>
            <div className="h-[2px] w-full bg-[#D4D4D4]" />
            <div className="w-full h-auto flex items-center justify-between text-[#5A595B]">
              <h3> SKU: #{id}</h3>
              <h3> Created date: {formattedDate}</h3>
            </div>
          </div>
        </div>
      </motion.div>
    </BackdropEdit>
  );
};

export default Preview;
