import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import CartDesktop from "../components/Cart/CartDesktop";
import { useSelector, useDispatch } from "react-redux";
import fetchProducts from "../redux/actions/getProducts";
import HomeCard from "../components/Cards/HomeCard";
import Slider from "../components/Home/Slider";
import TopCategories from "../components/Home/TopCategories";
import { Link } from "react-router-dom";
import CategoriesDesktop from "../components/Home/CategoriesDesktop";
import TopProducts from "../components/Home/TopProducts";
import HomeCardDesktop from "../components/Cards/HomeCard/HomeCardDesktop";
import { useTheme } from "../components/ThemeContext";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MainBanner from "../utils/images/Home/MainBanner.webp"
import HomeBanner from "../utils/images/Home/HomeBanner.webp"

const responsive = {
  biggerscreen: {
    breakpoint: { max: 3000, min: 1800 },
    items: 6,
  },
  bigscreen: {
    breakpoint: { max: 1800, min: 1600 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1600, min: 768 },
    items: 4,
  },
};

const Home = ({ modalOpenCart, closeCart }) => {
  const homeRef = useRef();
  const { theme } = useTheme();
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products.products);
  let desktopProducts = useSelector((state) => state.products.products);

  products = products.slice(0, 4);
  desktopProducts = desktopProducts.slice(0, 12);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div ref={homeRef} className="h-full w-auto pb-32 lg:pb-0 dark:bg-[#121212] overflow-x-hidden">
      <div className="h-auto w-auto mx-10 pt-10 lg:mx-0 lg:pt-0">
        <Slider />
      </div>
      <div className="w-auto h-[550px] hidden overflow-hidden lg:flex lg:items-center lg:justify-center object-fill">
        <LazyLoadImage
          effect="blur"
          className="w-full h-auto"
          src={MainBanner}
        />
        <h2 className=" max-w-[930px] text-center font-general-sans font-semibold text-white text-[55px] absolute z-10">{`Discover the top brands supporting the world's best teams.`}</h2>
      </div>
      <TopProducts />
      <div className="font-jakarta-sans w-auto flex justify-between items-center m-6 lg:justify-center">
        <h1 className="text-stone-900 text-[18px] font-bold tracking-wide dark:text-white lg:text-[60px] lg:font-exo lg:font-semibold lg:tracking-tight">
          Categories
        </h1>
        <Link
          to="/Categories"
          className="text-red-500 text-[10px] font-semibold lg:hidden"
        >
          SEE ALL
        </Link>
      </div>
      <div className="w-auto h-auto m-6 lg:hidden">
        <TopCategories />
      </div>
      <div className="w-full h-auto lg:flex items-center justify-center hidden">
        <CategoriesDesktop />
      </div>
      <div className="py-10 hidden lg:flex lg:items-center lg:justify-center ">
        <Link
          to="/Search"
          className="py-2 px-14 rounded-full font-general-sans w-auto h-auto bg-heroButton text-white text-[16px] font-normal "
        >
          Shop All
        </Link>
      </div>
      <div className="w-full h-auto my-20">
        <LazyLoadImage
          className="w-auto h-auto"
          src={HomeBanner}
        />
      </div>
      <div className="font-jakarta-sans w-auto flex justify-between items-center lg:justify-center">
        <h1 className="text-stone-900 text-[18px] font-bold tracking-wide dark:text-white lg:text-[60px] lg:font-exo lg:font-semibold lg:tracking-tight">
          Latest Products
        </h1>
        <p className="text-red-500 text-[10px] font-semibold lg:hidden">
          SEE ALL
        </p>
      </div>
      <div className="lg:hidden w-full flex justify-center items-center">
        <div className="w-auto h-auto grid grid-cols-2 gap-8">
          {products.length > 0 &&
            products.map((product, index) => (
              <HomeCard
                key={index}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image[0]}
                description={product.description}
              />
            ))}
        </div>
      </div>
      <Carousel
        responsive={responsive}
        draggable={false}
        containerClass="carousel-container"
        className="w-auto h-auto py-10 hidden lg:block px-2"
      >
        {desktopProducts.map((product, index) => (
          <div key={index} className="px-10">
            <HomeCardDesktop
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              brand={product.brand}
            />
          </div>
        ))}
      </Carousel>
      <div className="w-full h-auto lg:flex items-center justify-center py-20 hidden">
        <div className="font-exo font-bold text-[24px] max-w-[1200px] py-2 px-8 flex justify-around items-center border-2 rounded-xl gap-x-32">
          <div className="w-[280px] h-auto flex flex-col items-center justify-center">
            {theme === "dark" ? (
              <img
                className="w-[30px] h-[30px]"
                src="https://i.postimg.cc/Mph7Qjvv/gui-shipping-svgrepo-com-1.png"
              />
            ) : (
              <img
                className="w-[30px] h-[30px]"
                src="https://i.postimg.cc/sDx4ZLmj/gui-shipping-svgrepo-com-2.png"
              />
            )}
            <h2 className="text-black dark:text-white text-center">
              Free Standard Shipping on most Orders
            </h2>
          </div>
          <div className="w-[280px] h-auto flex flex-col items-center justify-center">
            {theme === "dark" ? (
              <img
                className="w-[30px] h-[30px]"
                src="https://i.postimg.cc/Y0nNsNrB/package-thin-svgrepo-com-2.png"
              />
            ) : (
              <img
                className="w-[30px] h-[30px]"
                src="https://i.postimg.cc/5Nrq5mKw/package-thin-svgrepo-com-1.png"
              />
            )}
            <h2 className="text-black dark:text-white text-center">
              30-Day Hassle-Free Product Return
            </h2>
          </div>
          <div className="w-[280px] h-auto flex flex-col items-center justify-center">
            {theme === "dark" ? (
              <img
                className="w-[30px] h-[30px]"
                src="https://i.postimg.cc/Mph7Qjvv/gui-shipping-svgrepo-com-1.png"
              />
            ) : (
              <img
                className="w-[30px] h-[30px]"
                src="https://i.postimg.cc/kgtNTtLL/warranty-svgrepo-com-2.png"
              />
            )}
            <h2 className="text-black dark:text-white text-center">
              Up to 2-year Warranty on all products
            </h2>
          </div>
        </div>
      </div>
      <AnimatePresence
       initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpenCart && (
          <CartDesktop
            closeCart={closeCart}
            parentHeight={homeRef.current ? homeRef.current.offsetHeight : 0}
          />
        )}
      </AnimatePresence>
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;
