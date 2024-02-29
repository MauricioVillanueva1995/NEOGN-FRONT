import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import CustomDot from "../CustomDot";
import "react-multi-carousel/lib/styles.css";
import Slide1 from "../../utils/images/Slider/Slide1.jpg";
import Slide2 from "../../utils/images/Slider/Slide2.jpg";
import Slide3 from "../../utils/images/Slider/Slide3.jpg";
import Slide4 from "../../utils/images/Slider/Slide4.jpg";

const Slider = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 1024 && window.innerWidth <= 1080
  );

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const windowWidth = window.innerWidth;
      setIsDesktop(windowWidth >= 1024 && windowWidth <= 1280);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const slides = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
  ];

  return (
    <Carousel
      showDots={isDesktop ? false : true}
      draggable={false}
      autoPlay={responsive !== "mobile" ? true : false}
      autoPlaySpeed={5000}
      responsive={responsive}
      transitionDuration={500}
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      customDot={<CustomDot />}
      className="rounded-3xl lg:rounded-none h-auto sm:h-auto xl:h-[788px] overflow-hidden lg:w-auto"
    >
      {slides.map((imageUrl, index) => (
        <div 
          key={index}
          className=" w-auto h-auto lg:h-[925px] xl:h-auto flex items-center justify-center overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
};
export default Slider;
