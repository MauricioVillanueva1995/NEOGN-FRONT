import { Link } from "react-router-dom";

const TopCategories = () => {
  return (
      <div className="w-full flex justify-around items-center ">
        <Link to={`/Search?category=Monitors`}>
          <div className="w-[76px] h-[60px] rounded-xl border border-category flex flex-col justify-center items-center m-2 dark:bg-white">
            <img
              src="https://i.postimg.cc/xjXTwHc6/monitor-9678589-7924228.png"
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
              src="https://i.postimg.cc/xdsn7TYr/gaming-headset-7480997-6138641.png"
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
              src="https://i.postimg.cc/DysfZTQs/keyboard-gaming-6013628-4979944.png"
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
              src="https://i.postimg.cc/1Rb5stFs/gaming-mouse-5756086-4818641.png"
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
