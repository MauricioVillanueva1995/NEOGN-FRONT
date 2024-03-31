import "./HomeCardDesktop.css";
import { Tilt } from "react-tilt";
import BrandPaths from "../SearchCard/BrandPaths";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 60, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 500, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const HomeCardDesktop = ({ name, image, price, brand, id }) => {
  const dispatch = useDispatch();

  const [brandImg, setBrandImg] = useState({
    brandImage: "",
  });

  useEffect(() => {
    let newBrandImg = {};

    switch (brand) {
      case "Aorus":
        newBrandImg = {
          brandImage: BrandPaths.Aorus,
        };
        break;
      case "Asus":
        newBrandImg = {
          brandImage: BrandPaths.Asus,
        };
        break;
      case "Corsair":
        newBrandImg = {
          brandImage: BrandPaths.Corsair,
        };
        break;
      case "HyperX":
        newBrandImg = {
          brandImage: BrandPaths.HyperX,
        };
        break;
      case "Logitech":
        newBrandImg = {
          brandImage: BrandPaths.Logitech,
        };
        break;
      case "Razer":
        newBrandImg = {
          brandImage: BrandPaths.Razer,
        };
        break;
      default:
        newBrandImg = {
          brandImage: BrandPaths.HyperX,
        };
        break;
    }
    setBrandImg(newBrandImg);
  }, [brand]);

  const handleAddToCart = () => {
    const productData = {
      id,
      name,
      price,
      image,
    };
    toast.success("Added to cart successfully ");
    dispatch(addToCart(productData));
  };

  return (
    <div className="bodyContainer flex">
      <Tilt options={defaultOptions} className="cont">
        <div className="imgbox">
          <Link to={`/${id}`} className="w-auto h-auto flex justify-center">
            <img
              className="image img1 overflow-visible"
              src={Array.isArray(image) && image.length > 0 ? image[0] : image}
            />
            <div className="title px-2 line-clamp-1">{name}</div>
          </Link>

          <div className="buySection flex items-center justify-around w-[250px]">
            <h2>
              <sup>$</sup>
              {price}
              <span>.00</span>
            </h2>
            <button
              onClick={handleAddToCart}
              className="h-[34px] w-auto transition-all duration-500 bg-gradient-to-br to-red-800 via-red-500 from-heroButton bg-size-200 hover:bg-right-bottom rounded-full py-0 px-8 text-center "
            >
              <p className="text-[10px] font-general-sans font-semibold tracking-wider text-white">
                Buy Now
              </p>
            </button>
          </div>
        </div>
        <img
          className="w-auto h-[60px] fixed top-5 right-5 rounded-lg"
          src={brandImg.brandImage}
        />
        <span className="bgtext w-[250px] h-auto overflow-hidden">{brand}</span>
      </Tilt>
    </div>
  );
};
export default HomeCardDesktop;
