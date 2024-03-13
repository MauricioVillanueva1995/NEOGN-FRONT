import "../HomeCard/HomeCardDesktop.css";
import { Link } from "react-router-dom";
import BrandPaths from "./BrandPaths";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useTheme } from "../../ThemeContext";

const SearchCardDesktop = ({
  name,
  image,
  price,
  id,
  index,
  brand,
  threeDi,
}) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

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
    <div className="bodyContainer hidden lg:flex">
      <div className="card">
        <div className="imgboxSearch">
          <Link
            to={`/${id}`}
            key={index}
            className="h-auto w-auto flex justify-center "
          >
            <img className="imageSearch img1 overflow-visible" src={image[0]} />

            <div className="titleSearch px-2 line-clamp-1">{name}</div>
          </Link>

          <div className="buySection flex items-center justify-around w-[250px]">
            <h2>
              <sup>$</sup>
              {price}
            </h2>
            <button
              onClick={handleAddToCart}
              className="h-[34px] w-auto transition-all duration-500 bg-gradient-to-br to-red-800 via-red-500 from-heroButton bg-size-200 hover:bg-right-bottom  rounded-full py-0 px-8  text-center "
            >
              <p className="text-[14px] font-general-sans font-semibold tracking-wider text-white">
                Buy Now
              </p>
            </button>
          </div>
        </div>
        <img
          className="w-auto h-[60px] fixed top-4 right-4 rounded-lg z-[0]"
          src={brandImg.brandImage}
        />
        {threeDi ? (
          <img
            className="w-[30px] h-auto z-10 absolute top-5 left-5  cursor-pointer bg-transparent border-none"
            src="https://i.postimg.cc/nr10P3bt/360-degrees.png"
          />
        ) : null}
        <span className="bgtext w-[250px] h-auto overflow-hidden">{brand}</span>
      </div>
    </div>
  );
};
export default SearchCardDesktop;
