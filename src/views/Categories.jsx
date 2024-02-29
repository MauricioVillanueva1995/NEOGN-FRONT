import { Link } from "react-router-dom";

import Monitors from "../utils/images/CategoriesIcons/Monitors.png";
import Headsets from "../utils/images/CategoriesIcons/Headsets.png";
import Keyboards from "../utils/images/CategoriesIcons/Keyboards.png";
import Mice from "../utils/images/CategoriesIcons/Mice.png";
import Mousepads from "../utils/images/CategoriesIcons/Mousepads.png";
import Controllers from "../utils/images/CategoriesIcons/Controllers.png";
import Earbuds from "../utils/images/CategoriesIcons/Earbuds.png";
import Microphones from "../utils/images/CategoriesIcons/Microphones.png";
import TitleSection from "../components/TitleSection";

const Categories = () => {
  return (
    <div className="h-screen px-4 pt-8 dark:bg-black w-full">
      <TitleSection title={"Categories"} location={"/"} />
      <div className="w-auto h-auto flex mt-10 items-center justify-center">
        <div className="grid grid-cols-2 gap-8 w-auto">
          {[
            { image: Monitors, name: "Monitors" },
            { image: Headsets, name: "Headsets" },
            { image: Keyboards, name: "Keyboards" },
            { image: Mice, name: "Mice" },
            { image: Mousepads, name: "Mousepads" },
            { image: Controllers, name: "Controllers" },
            { image: Earbuds, name: "Earbuds" },
            { image: Microphones, name: "Microphones" },
          ].map((el, index) => (
            <Link
              className="block w-[150px] h-full"
              key={index}
              to={`/Search?category=${el.name}`}
            >
              <div className="w-[150px] h-[110px] flex flex-col items-center justify-center dark:bg-white border-gray-300 rounded-3xl shadow-md transition  duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                <img className="w-[70px] h-[70px] max-w-full" src={el.image} />
                <p className="text-center font-semibold">{el.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
