import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import CustomDot from "../CustomDot";
import "react-multi-carousel/lib/styles.css";
import Slide1Desktop from "../../utils/images/Slider/Slide1Desktop.webp";
import Slide2Desktop from "../../utils/images/Slider/Slide2Desktop.webp";
import Slide3Desktop from "../../utils/images/Slider/Slide3Desktop.webp";
import Slide4Desktop from "../../utils/images/Slider/Slide4Desktop.webp";
import Slide1Mobile from "../../utils/images/Slider/Slide1Mobile.webp";
import Slide2Mobile from "../../utils/images/Slider/Slide2Mobile.webp";
import Slide3Mobile from "../../utils/images/Slider/Slide3Mobile.webp";
import Slide4Mobile from "../../utils/images/Slider/Slide4Mobile.webp";

const Slider = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 1024 && window.innerWidth <= 1920
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
      setIsDesktop(windowWidth >= 1024 && windowWidth <= 1920);
    };

    window.addEventListener("resize", handleWindowResize);

    // Llamar a handleWindowResize al inicio para establecer el estado inicial correctamente
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const slides = isDesktop ? [Slide1Desktop, Slide2Desktop, Slide3Desktop, Slide4Desktop] 
                            : [Slide1Mobile, Slide2Mobile, Slide3Mobile, Slide4Mobile];

  return (
    <Carousel
      showDots={true}
      draggable={false}
      autoPlay={isDesktop}
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
