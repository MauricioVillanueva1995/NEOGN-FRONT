import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import CustomDot from "../CustomDot";
import "react-multi-carousel/lib/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Slide1Desktop from "../../assets/Images/Slider/Slide1Desktop.webp";
import Slide2Desktop from "../../assets/Images/Slider/Slide2Desktop.webp";
import Slide3Desktop from "../../assets/Images/Slider/Slide3Desktop.webp";
import Slide4Desktop from "../../assets/Images/Slider/Slide4Desktop.webp";
import Slide1Mobile from "../../assets/Images/Slider/Slide1Mobile.webp";
import Slide2Mobile from "../../assets/Images/Slider/Slide2Mobile.webp";
import Slide3Mobile from "../../assets/Images/Slider/Slide3Mobile.webp";
import Slide4Mobile from "../../assets/Images/Slider/Slide4Mobile.webp";

const Slider = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 1024 && window.innerWidth <= 1920
  );
  const slides = isDesktop
    ? [Slide1Desktop, Slide2Desktop, Slide3Desktop, Slide4Desktop]
    : [Slide1Mobile, Slide2Mobile, Slide3Mobile, Slide4Mobile];

  const preloadImages = () => {
    slides.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  };

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
      if (windowWidth > 1920) {
        setIsDesktop(true);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    handleWindowResize();
    preloadImages();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
          {isDesktop ? (
            <img
              className="w-full h-full object-cover"
              src={imageUrl}
              alt={`Slide ${index + 1}`}
            />
          ) : (
            <LazyLoadImage
              className="w-full h-full object-cover"
              src={imageUrl}
              alt={`Slide ${index + 1}`}
            />
          )}
        </div>
      ))}
    </Carousel>
  );
};
export default Slider;
