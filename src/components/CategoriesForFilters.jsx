import Carousel from "react-multi-carousel";
import { useState } from "react";
import Monitors from "../assets/Images/CategoriesIcons/Monitors.webp";
import Headsets from "../assets/Images/CategoriesIcons/Headsets.webp";
import Keyboards from "../assets/Images/CategoriesIcons/Keyboards.webp";
import Mice from "../assets/Images/CategoriesIcons/Mice.webp";
import Mousepads from "../assets/Images/CategoriesIcons/Mousepads.webp";
import Controllers from "../assets/Images/CategoriesIcons/Controllers.webp";
import Earbuds from "../assets/Images/CategoriesIcons/Earbuds.webp";
import Microphones from "../assets/Images/CategoriesIcons/Microphones.webp";

const CategoriesFilter = ({handleFilterCategory}) => {
  const [selectCategory, setSelectCategory] = useState("");

  const handleSelection = (category) => {
    setSelectCategory(category);
    handleFilterCategory(category)
  };

  const responsive = {
    bigscreen: {
      breakpoint: { max: 1920, min: 1280 },
      items: 8,
    },
    huge: {
      breakpoint: { max: 1280, min: 992 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 992, min: 768 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 768, min: 428 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 4,
    },
  };

  return (
      <Carousel
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <button
          onClick={() => handleSelection("Monitors")}
          className={`w-[76px] h-[60px] dark:bg-white rounded-xl border-2 flex flex-col justify-center items-center ${
            selectCategory === "Monitors" ? "border-rose-500" : "border-category"
          }`}
        >
          <img
            src={Monitors}
            className="w-[30px] h-[30px]"
          />
          <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px] dark:text-black">
            Monitors
          </div>
        </button>

        <button
          onClick={() => handleSelection("Headsets")}
          className={`w-[76px] h-[60px] dark:bg-white rounded-xl border-2 flex flex-col justify-center items-center ${
            selectCategory === "Headsets" ? "border-rose-500" : "border-category"
          }`}
        >
          <img
            src={Headsets}
            className="w-[30px] h-[30px]"
          />
          <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px] dark:text-black">
            Headsets
          </div>
        </button>

        <button
          onClick={() => handleSelection("Keyboards")}
          className={`w-[76px] h-[60px] dark:bg-white rounded-xl border-2 flex flex-col justify-center items-center ${
            selectCategory === "Keyboards" ? "border-rose-500" : "border-category"
          }`}
        >
          <img
            src={Keyboards}
            className="w-[30px] h-[30px]"
          />
          <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px] dark:text-black">
            Keyboards
          </div>
        </button>

        <button
          onClick={() => handleSelection("Mice")}
          className={`w-[76px] h-[60px] dark:bg-white rounded-xl border-2 flex flex-col justify-center items-center ${
            selectCategory === "Mice" ? "border-rose-500" : "border-category"
          }`}
        >
          <img
            src={Mice}
            className="w-[30px] h-[30px]"
          />
          <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px] dark:text-black">
            Mice
          </div>
        </button>

        <button
          onClick={() => handleSelection("Mousepads")}
          className={`w-[76px] h-[60px] dark:bg-white rounded-xl border-2 flex flex-col justify-center items-center ${
            selectCategory === "Mousepads" ? "border-rose-500" : "border-category"
          }`}
        >
          <img
            src={Mousepads}
            className="w-[30px] h-[30px]"
          />
          <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px] dark:text-black">
            Mousepads
          </div>
        </button>
        <button
          onClick={() => handleSelection("Controllers")}
          className={`w-[76px] h-[60px] dark:bg-white rounded-xl border-2 flex flex-col justify-center items-center ${
            selectCategory === "Controllers" ? "border-rose-500" : "border-category"
          }`}
        >
          <img
            src={Controllers}
            className="w-[30px] h-[30px]"
          />
          <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px] dark:text-black">
            Controllers
          </div>
        </button>
        <button
          onClick={() => handleSelection("Earbuds")}
          className={`w-[76px] h-[60px] dark:bg-white rounded-xl border-2 flex flex-col justify-center items-center ${
            selectCategory === "Earbuds" ? "border-rose-500" : "border-category"
          }`}
        >
          <img
            src={Earbuds}
            className="w-[30px] h-[30px]"
          />
          <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px] dark:text-black">
            Earbuds
          </div>
        </button>
        <button
          onClick={() => handleSelection("Microphones")}
          className={`w-[76px] h-[60px] dark:bg-white rounded-xl border-2 flex flex-col justify-center items-center ${
            selectCategory === "Microphones" ? "border-rose-500" : "border-category"
          }`}
        >
          <img
            src={Microphones}
            className="w-[30px] h-[30px]"
          />
          <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px] dark:text-black">
            Microphones
          </div>
        </button>
      </Carousel>
  );
};

export default CategoriesFilter;
