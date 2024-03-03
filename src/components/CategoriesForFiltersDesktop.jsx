import { useState } from "react";
import Monitors from "../utils/images/CategoriesIcons/Monitors.webp";
import Headsets from "../utils/images/CategoriesIcons/Headsets.webp";
import Keyboards from "../utils/images/CategoriesIcons/Keyboards.webp";
import Mice from "../utils/images/CategoriesIcons/Mice.webp";
import Mousepads from "../utils/images/CategoriesIcons/Mousepads.webp";
import Controllers from "../utils/images/CategoriesIcons/Controllers.webp";
import Earbuds from "../utils/images/CategoriesIcons/Earbuds.webp";
import Microphones from "../utils/images/CategoriesIcons/Microphones.webp";

const CategoriesForFiltersDesktop = ({ handleFilterCategory }) => {
  const [selectCategory, setSelectCategory] = useState("");

  const handleSelection = (category) => {
    setSelectCategory(category);
    handleFilterCategory(category);
  };
  return (
    <div className="w-full h-[200px] flex justify-center items-center gap-x-10 xl:gap-x-14">
      <button
        onClick={() => handleSelection("Monitors")}
        className={`min-w-[110px] min-h-[110px] xl:w-[150px] xl:h-[110px]  hover:bg-[#E31B38] rounded-2xl border-[1.5px] flex flex-col justify-center items-center dark:backdrop-blur-[5px] dark:bg-neutral-100 dark:bg-opacity-20  ${
          selectCategory === "Monitors" ? "border-rose-500 bg-[#E31B38]" : "border-transparent bg-[#eb465e] dark:hover:border-rose-500"
        }`}
      >
        <img
          src={Monitors}
          className="w-[70px] h-[70px]"
        />
        <div className="font-jakarta-sans font-semibold text-[12px] text-white ">
          Monitors
        </div>
      </button>

      <button
        onClick={() => handleSelection("Headsets")}
        className={`min-w-[110px] min-h-[110px] xl:w-[150px] xl:h-[110px]  hover:bg-[#E31B38] rounded-2xl border-[1.5px] flex flex-col justify-center items-center  dark:backdrop-blur-[5px] dark:bg-neutral-100 dark:bg-opacity-20 ${
          selectCategory === "Headsets" ? "border-rose-500 bg-[#E31B38]" : "border-transparent bg-[#eb465e] dark:hover:border-rose-500"
        }`}
      >
        <img
          src={Headsets}
          className="w-[70px] h-[70px]"
        />
        <div className="font-jakarta-sans font-semibold text-[12px] text-white ">
          Headsets
        </div>
      </button>

      <button
        onClick={() => handleSelection("Keyboards")}
        className={`min-w-[110px] min-h-[110px] xl:w-[150px] xl:h-[110px]  hover:bg-[#E31B38] rounded-2xl border-[1.5px] flex flex-col justify-center items-center dark:backdrop-blur-[5px] dark:bg-neutral-100 dark:bg-opacity-20 ${
          selectCategory === "Keyboards" ? "border-rose-500 bg-[#E31B38]" : "border-transparent bg-[#eb465e] dark:hover:border-rose-500"
        }`}
      >
        <img
          src={Keyboards}
          className="w-[70px] h-[70px]"
        />
        <div className="font-jakarta-sans font-semibold text-[12px] text-white">
          Keyboards
        </div>
      </button>

      <button
        onClick={() => handleSelection("Mice")}
        className={`min-w-[110px] min-h-[110px] xl:w-[150px] xl:h-[110px]  hover:bg-[#E31B38] rounded-2xl border-[1.5px] flex flex-col justify-center items-center dark:backdrop-blur-[5px] dark:bg-neutral-100 dark:bg-opacity-20 ${
          selectCategory === "Mice" ? "border-rose-500 bg-[#E31B38]" : "border-transparent bg-[#eb465e] dark:hover:border-rose-500"
        }`}
      >
        <img
          src={Mice}
          className="w-[70px] h-[70px]"
        />
        <div className="font-jakarta-sans font-semibold text-[12px] text-white">
          Mice
        </div>
      </button>

      <button
        onClick={() => handleSelection("Mousepads")}
        className={`min-w-[110px] min-h-[110px] xl:w-[150px] xl:h-[110px]  hover:bg-[#E31B38] rounded-2xl border-[1.5px] flex flex-col justify-center items-center dark:backdrop-blur-[5px] dark:bg-neutral-100 dark:bg-opacity-20 ${
          selectCategory === "Mousepads" ? "border-rose-500 bg-[#E31B38]" : "border-transparent bg-[#eb465e] dark:hover:border-rose-500"
        }`}
      >
        <img
          src={Mousepads}
          className="w-[70px] h-[70px]"
        />
        <div className="font-jakarta-sans font-semibold text-[12px] text-white">
          Mousepads
        </div>
      </button>
      <button
        onClick={() => handleSelection("Controllers")}
        className={`min-w-[110px] min-h-[110px] xl:w-[150px] xl:h-[110px] hover:bg-[#E31B38] rounded-2xl border-[1.5px] flex flex-col justify-center items-center dark:backdrop-blur-[5px] dark:bg-neutral-100 dark:bg-opacity-20 ${
          selectCategory === "Controllers" ? "border-rose-500 bg-[#E31B38]" : "border-transparent bg-[#eb465e] dark:hover:border-rose-500"
        }`}
      >
        <img
          src={Controllers}
          className="w-[70px] h-[70px]"
        />
        <div className="font-jakarta-sans font-semibold text-[12px] text-white">
          Controllers
        </div>
      </button>
      <button
        onClick={() => handleSelection("Earbuds")}
        className={`min-w-[110px] min-h-[110px] xl:w-[150px] xl:h-[110px] hover:bg-[#E31B38] rounded-2xl border-[1.5px] flex flex-col justify-center items-center dark:backdrop-blur-[5px] dark:bg-neutral-100 dark:bg-opacity-20 ${
          selectCategory === "Earbuds" ? "border-rose-500 bg-[#E31B38]" : "border-transparent bg-[#eb465e] dark:hover:border-rose-500"
        }`}
      >
        <img
          src={Earbuds}
          className="w-[70px] h-[70px]"
        />
        <div className="font-jakarta-sans font-semibold text-[12px] text-white">
          Earbuds
        </div>
      </button>
      <button
        onClick={() => handleSelection("Microphones")}
        className={`min-w-[110px] min-h-[110px] xl:w-[150px] xl:h-[110px] hover:bg-[#E31B38] rounded-2xl border-[1.5px] flex flex-col justify-center items-center dark:backdrop-blur-[5px] dark:bg-neutral-100 dark:bg-opacity-20 ${
          selectCategory === "Microphones" ? "border-rose-500 bg-[#E31B38]" : "border-transparent bg-[#eb465e] dark:hover:border-rose-500"
        }`}
      >
        <img
          src={Microphones}
          className="w-[70px] h-[70px]"
        />
        <div className="font-jakarta-sans font-semibold text-[12px] text-white">
          Microphones
        </div>
      </button>
    </div>
  );
};
export default CategoriesForFiltersDesktop;
