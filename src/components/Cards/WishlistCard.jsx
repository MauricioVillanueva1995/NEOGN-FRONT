import { Link } from "react-router-dom";
import toast  from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/slices/userSlice";

const WishlistCard = ({
  id,
  name,
  image,
  price,
  description,
}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.user.wishlist);
  const existingProduct = wishlist.find((product) => product.id === id);

  const removeCard = () => {
    if(existingProduct){
      dispatch(removeFromWishlist({ id }));
      toast.success('Product successfully removed!')
    }
  };

  return (
    <div className="p-[16px] rounded-2xl shadow-[0px_1px_10px_#00000040] shadow-[#f7e2e5] w-[350px] h-[140px] dark:shadow-none bg-white dark:bg-darkCard">
      <div className="flex items-center gap-x-4">
        <Link to={`/${id}`}>
          <div className="w-[108px] h-[108px] bg-card dark:bg-white rounded-[10px] flex justify-center items-center">
            <img src={image} alt={name} className="w-auto h-auto" />
          </div>
        </Link>
        <div className="w-full flex flex-col">
          <div className="w-full h-auto flex justify-between">
            <div className="font-general-sans w-[150px] h-auto flex flex-col justify-between items-start">
              <div className="text-gray-800 text-base font-semibold line-clamp-1 dark:text-white">
                {name}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm font-medium mt-2 line-clamp-2">
                {description}
              </div>
            </div>
            <div className="w-[24px] h-[24px] rounded-[5px] p-[5px] shadow-[0px_1px_10px_#00000040] shadow-[#e4ccd0] bg-white dark:bg-white dark:shadow-none inline-flex items-center justify-center">
              <img
                src={
                  existingProduct
                    ? "https://i.postimg.cc/YSGJpbnw/heart-svgrepo-com-1.png"
                    : "https://i.postimg.cc/4xFd9d9L/heart-svgrepo-com.png"
                }
                className={`w-[16px] h-auto`}
                onClick={removeCard}
              />
            </div>
          </div>
          <div className="price py-1 text-red-600 dark:text-darkHero text-lg font-semibold flex flex-row items-center justify-between mt-auto">
            <div>$ {price}</div>
            <button className="button bg-heroColor dark:bg-darkHero text-white text-base rounded-[8px] w-auto h-[24px] flex justify-center items-center px-5 py-3">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
