import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/slices/userSlice";
import { useTheme } from "../ThemeContext";
import toast from "react-hot-toast";

const HomeCard = ({ id, name, image, price, description }) => {
  const {theme} = useTheme();
  const dispatch = useDispatch();
  const checkUser = useSelector((state) => state.user.id)
  const wishlist = useSelector((state) => state.user.wishlist);
  const existingProduct = wishlist.find((product) => product.id === id);

  const handleToggleWishlist = () => {
    if(!checkUser) {
      return toast.error("Please login first");
    }
    if (existingProduct) {
      dispatch(removeFromWishlist({ id }));
      toast.success("Product successfully removed!");
    } else {
      dispatch(addToWishlist({ id, name, image, price, description }));
      toast.success("Product successfully added!");
    }
  };

  return (
    <div className="inline-flex flex-col items-start gap-[8px] relative w-[140px]">
      <Link to={`/${id}`}>
        <div className="w-[140px] h-[120px] relative bg-card rounded-3xl flex items-center justify-center dark:bg-white">
          <img
            className="relative w-[120px] h-auto object-cover"
            alt="Rectangle"
            src={image}
          />
        </div>
      </Link>
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="text-stone-900 text-sm font-semibold font-jakarta-sans leading-[21px] tracking-normal line-clamp-1 dark:text-white">
          {name}
        </div>
        <div className="text-red-600 text-sm font-semibold font-jakarta-sans leading-[21px] tracking-normal">
          $ {price}
        </div>
      </div>
      <div className="inline-flex items-center justify-center gap-[10px] p-[2px] w-[28px] h-[28px] absolute top-[3px] left-[110px] bg-white dark:bg-darkCard dark:shadow-none rounded-[5px] shadow-[0px_1px_10px_#00000040] shadow-[#d4adb2]">
        <img
    src={
      existingProduct
        ? theme === "dark"
          ? "https://i.postimg.cc/YSGJpbnw/heart-svgrepo-com-1.png"
          : "https://i.postimg.cc/YSGJpbnw/heart-svgrepo-com-1.png"
        : theme === "dark"
        ? "https://i.postimg.cc/rsjdRY0z/heart.png"
        : "https://i.postimg.cc/4xFd9d9L/heart-svgrepo-com.png"
    }
    className={`w-[16px] h-auto`}
    onClick={handleToggleWishlist}
  />
      </div>
    </div>
  );
};

export default HomeCard;
