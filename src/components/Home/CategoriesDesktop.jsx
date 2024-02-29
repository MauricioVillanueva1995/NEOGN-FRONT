import { Link } from "react-router-dom";

const CategoriesDesktop = () => {
  return (
      <div className="flex justify-center items-center lg:gap-x-10 xl:gap-x-20 ">
        <Link to={`/Search?category=Monitors`}>
          <div className="w-[250px] h-[340px] overflow-hidden rounded-xl flex flex-col justify-center items-center">
            <img
              src="https://i.postimg.cc/QCvnzQ7H/Frame-866.png"
              className="w-auto h-auto transition-transform duration-300 hover:scale-125 hover:rotate-6 grayscale hover:grayscale-0"
            />
            <div className="font-bakbak font-semibold text-white absolute text-[30px] dark:text-white z-10">
              MONITORS
            </div>
          </div>
        </Link>
        <Link to={`/Search?category=Headsets`}>
          <button className="w-[250px] h-[340px] overflow-hidden rounded-xl  flex flex-col justify-center items-center">
            <img
              src="https://i.postimg.cc/8k3GbydT/Frame-864.png"
              className="w-auto h-auto transition-transform duration-300 hover:scale-125 hover:rotate-6 grayscale hover:grayscale-0"
            />
            <div className="font-bakbak font-semibold text-white absolute text-[30px] dark:text-white z-10">
              HEADSETS
            </div>
          </button>
        </Link>
        <Link to={`/Search?category=Keyboards`}>
          <button className="w-[250px] h-[340px] overflow-hidden rounded-xl  flex flex-col justify-center items-center">
            <img
              src="https://i.postimg.cc/kgNdqq05/Frame-865.png"
              className="w-auto h-auto transition-transform duration-300 hover:scale-125 hover:rotate-6 grayscale hover:grayscale-0"
            />
            <div className="font-bakbak font-semibold text-white absolute text-[30px] dark:text-white z-10">
              KEYBOARDS
            </div>
          </button>
        </Link>
        <Link to={`/Search?category=Mice`}>
          <button className="w-[250px] h-[340px] overflow-hidden rounded-xl  flex flex-col justify-center items-center dark:border-none">
            <img
              src="https://i.postimg.cc/Dw3K98YD/Frame-867.png"
              className="w-auto h-auto transition-transform duration-300 hover:scale-125 hover:rotate-6 grayscale hover:grayscale-0"
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
