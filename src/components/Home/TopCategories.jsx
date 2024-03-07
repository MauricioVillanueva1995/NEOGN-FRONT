import { Link } from "react-router-dom";
import Monitors from "../../assets/Images/CategoriesIcons/Monitors.webp"
import Headsets from "../../assets/Images/CategoriesIcons/Headsets.webp"
import Keyboards from "../../assets/Images/CategoriesIcons/Keyboards.webp"
import Mice from "../../assets/Images/CategoriesIcons/Mice.webp"

const TopCategories = () => {
  return (
      <div className="w-full flex justify-around items-center ">
        <Link to={`/Search?category=Monitors`}>
          <div className="w-[76px] h-[60px] rounded-xl border border-category flex flex-col justify-center items-center m-2 dark:bg-white">
            <img
              src={Monitors}
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px] dark:text-black">
              Monitors
            </div>
          </div>
        </Link>
        <Link to={`/Search?category=Headsets`}>
          <button className="w-[76px] h-[60px] rounded-xl border border-category flex flex-col justify-center items-center m-2 dark:bg-white">
            <img
              src={Headsets}
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px] dark:text-black">
              Headsets
            </div>
          </button>
        </Link>
        <Link to={`/Search?category=Keyboards`}>
          <button className="w-[76px] h-[60px] rounded-xl border border-category flex flex-col justify-center items-center m-2 dark:bg-white">
            <img
              src={Keyboards}
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px] dark:text-black">
              Keyboards
            </div>
          </button>
        </Link>
        <Link to={`/Search?category=Mice`}>
          <button className="w-[76px] h-[60px] rounded-xl border border-category flex flex-col justify-center items-center m-2 dark:bg-white dark:border-none">
            <img
              src={Mice}
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px] dark:text-black">
              Mice
            </div>
          </button>
        </Link>
      </div>
  );
};

export default TopCategories;
