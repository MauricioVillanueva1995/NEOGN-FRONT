import Aorus from "../assets/Images/FooterLogos/Aorus.webp"
import Asus from "../assets/Images/FooterLogos/Asus.webp"
import Corsair from "../assets/Images/FooterLogos/Corsair.webp"
import HyperX from "../assets/Images/FooterLogos/HyperX.webp"
import Logitech from "../assets/Images/FooterLogos/Logitech.webp"
import Razer from "../assets/Images/FooterLogos/Razer.webp"
const Brands = () => {
  return (
    <div className="hidden w-full h-auto lg:flex flex-col items-center justify-center gap-y-10">
      <h2 className="font-exo font-semibold text-[60px] text-black dark:text-white">
        Brands
      </h2>
      <div className="w-full h-[250px] bg-[#930C20] rounded-t-[30px] grid-cols-3 grid items-center justify-center">
        <div className="w-auto h-auto flex items-center justify-center">
          <img
            className="w-[230px] h-auto"
            src={HyperX}
          />
        </div>
        <div className="w-auto h-auto flex items-center justify-center">
          <img
            className="w-[230px] h-auto"
            src={Razer}
          />
        </div>{" "}
        <div className="w-auto h-auto flex items-center justify-center">
          <img
            className="w-[230px] h-auto"
            src={Corsair}
          />
        </div>{" "}
        <div className="w-auto h-auto flex items-center justify-center">
          <img
            className="w-[230px] h-auto"
            src={Aorus}
          />
        </div>{" "}
        <div className="w-auto h-auto flex items-center justify-center">
          <img
            className="w-[230px] h-auto"
            src={Logitech}
          />
        </div>{" "}
        <div className="w-auto h-auto flex items-center justify-center">
          <img
            className="w-[230px] h-auto"
            src={Asus}
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
