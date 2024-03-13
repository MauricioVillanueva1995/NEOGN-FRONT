import { Link } from "react-router-dom";
import Monitors from "../../assets/Images/CategoriesDesktop/Monitors.webp";
import Headsets from "../../assets/Images/CategoriesDesktop/Headsets.webp";
import Keyboards from "../../assets/Images/CategoriesDesktop/Keyboards.webp";
import Mice from "../../assets/Images/CategoriesDesktop/Mice.webp";

const CategoriesDesktop = () => {
  return (
    <div className="flex justify-center items-center lg:gap-x-10 xl:gap-x-20 ">
      <Link to={`/Search?category=Monitors`}>
        <div className="w-[250px] h-[340px] overflow-hidden rounded-xl flex flex-col justify-center items-center">
          <img
            src={Monitors}
            className="w-auto h-auto transition-transform duration-500 hover:scale-125 hover:rotate-6 grayscale hover:grayscale-0"
          />
          <div className="font-bakbak font-semibold text-white absolute text-[30px] dark:text-white z-10">
            MONITORS
          </div>
        </div>
      </Link>
      <Link to={`/Search?category=Headsets`}>
        <button className="w-[250px] h-[340px] overflow-hidden rounded-xl  flex flex-col justify-center items-center">
          <img
            src={Headsets}
            className="w-auto h-auto transition-transform duration-500 hover:scale-125 hover:rotate-6 grayscale hover:grayscale-0"
          />
          <div className="font-bakbak font-semibold text-white absolute text-[30px] dark:text-white z-10">
            HEADSETS
          </div>
        </button>
      </Link>
      <Link to={`/Search?category=Keyboards`}>
        <button className="w-[250px] h-[340px] overflow-hidden rounded-xl  flex flex-col justify-center items-center">
          <img
            src={Keyboards}
            className="w-auto h-auto transition-transform duration-500 hover:scale-125 hover:rotate-6 grayscale hover:grayscale-0"
          />
          <div className="font-bakbak font-semibold text-white absolute text-[30px] dark:text-white z-10">
            KEYBOARDS
          </div>
        </button>
      </Link>
      <Link to={`/Search?category=Mice`}>
        <button className="w-[250px] h-[340px] overflow-hidden rounded-xl  flex flex-col justify-center items-center dark:border-none">
          <img
            src={Mice}
            className="w-auto h-auto transition-transform duration-500 hover:scale-125 hover:rotate-6 grayscale hover:grayscale-0"
          />
          <div className="font-bakbak font-semibold text-white absolute text-[30px] dark:text-white z-10">
            MICE
          </div>
        </button>
      </Link>
    </div>
  );
};

export default CategoriesDesktop;
