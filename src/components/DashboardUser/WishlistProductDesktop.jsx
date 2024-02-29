import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/slices/cartSlice";
import { removeFromWishlist } from "../../redux/slices/userSlice";
import { useTheme } from "../ThemeContext";

const WishlistProductDesktop = ({
  id,
  name,
  image,
  price,
  description,
  brand,
}) => {
  const {theme}= useTheme();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.user.wishlist);
  const existingProduct = wishlist.find((product) => product.id === id);

  const handleAddToCart = () => {
    const productData = {
      id,
      name,
      price,
      image,
      description,
    };
    toast.success("Added to cart successfully ");

    console.log(productData);
    dispatch(addToCart(productData));
  };

  const removeCard = () => {
    if (existingProduct) {
      dispatch(removeFromWishlist({ id }));
      toast.success("Product successfully removed!");
    }
  };

  return (
    <tr>
      <td className="dark:text-white whitespace-nowrap px-3 py-4 text-sm">
      <button
            type="button"
            onClick={removeCard}
            className="text-gray-400 bg-transparent hover:bg-gray-300 rounded-lg text-sm inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
          {theme === "dark" ? <img
              className="w-[30px] h-[30px]"
              src="https://i.postimg.cc/Y2mQRcQJ/close-x-svgrepo-com.png"
            /> : <img
              className="w-[30px] h-[30px]"
              src="https://i.postimg.cc/25xRm6Zd/close-x-svgrepoblack-com.png"
            /> }
            
          </button>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm flex items-start gap-x-4">
        <div className="w-[60px] h-auto">
          <img className="w-auto h-auto" src={image} />
        </div>
        <div>
          <p className="dark:text-white line-clamp-1 font-general-sans font-medium text-sm max-w-[250px]">
            {name}
          </p>
          <p className="dark:text-gray-400 line-clamp-1 font-general-sans font-base text-sm max-w-[250px]">
            {brand}
          </p>
        </div>
      </td>
      <td className="dark:text-white whitespace-nowrap px-3 py-4 text-sm">
        $ {price}
      </td>
      <td className="py-4 pl-3 pr-4 text-right text-sm sm:pr-6 underline">
        <button
          onClick={handleAddToCart}
          className="bg-[#DF102E] text-white py-[6px] px-[24px] rounded-[8px]"
        >
          Add to cart
        </button>
      </td>
    </tr>
  );
};
export default WishlistProductDesktop;
