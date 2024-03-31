import { useDispatch, useSelector } from "react-redux";
import { removeItem, setQuantity } from "../../redux/slices/cartSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTheme } from "../ThemeContext";

const CartProduct = ({ id, product }) => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const [total, setTotal] = useState(
    cartItem ? product.price * cartItem.quantity : 0
  );


  const adjustQuantity = (act) => {
    if (act === "+" && cartItem) {
      dispatch(setQuantity({ id: product.id, act: "+" }));
      setTotal(product.price * (cartItem.quantity + 1));
    } else if (act === "-" && cartItem && cartItem.quantity > 1) {
      dispatch(setQuantity({ id: product.id, act: "-" }));
      setTotal(product.price * (cartItem.quantity - 1));
    } else {
      dispatch(removeItem(id));
      toast.success("Product successfully removed");
      setTotal(0);
    }
  };

  const remove = (id) => {
    dispatch(removeItem(id));
    toast.success("Product successfully removed");
  };

  return (
    <div className="flex justify-around items-center shadow w-[auto] min-w-[345px] min-h-[100px] lg:bg-[#D7DCE4] dark:lg:bg-[#D7DCE4] bg-white dark:bg-darkCard rounded-2xl">
      <div className="w-[170px] lg:w-auto h-auto flex items-center gap-x-2 justify-center">
        <div className="flex items-center bg-red-50 lg:bg-transparent dark:lg:bg-transparent dark:bg-white justify-center w-[70px] h-[70px] rounded-[10px]">
          <img
            className="h-[auto] w-[auto]"
            src={product.image}
            alt="Product image"
          />
        </div>
        <div className="w-[100px] lg:w-[130px] h-[70px] flex flex-col items-start justify-between font-semibold gap-y-2 dark:text-[#D7DCE4]">
          <h2 className="lg:font-general-sans lg:font-medium lg:text-xs h-[35px] w-auto lg:text-[#0D3B66] lg:dark:text-[#0D3B66] text-xs font-medium">{product.name}</h2>
          <p className="font-semibold h-auto lg:text-black">$ {product.price}.00</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-6">
        <button className="w-full flex justify-end" onClick={() => remove(id)}>
          <img
            className="w-5 h-5 lg:hidden"
            src={
              theme === "dark"
                ? "https://i.postimg.cc/V63Cw4Yg/trash-bi2n-2-svgrepo-com.png"
                : "https://i.postimg.cc/sfKmNmp9/trash-bin-2-svgrepo-com.png"
            }
          />
          <img
            className="w-5 h-5 hidden lg:dark:visible"
            src="https://i.postimg.cc/sfKmNmp9/trash-bin-2-svgrepo-com.png"
          />
        </button>
        <div className="flex items-center justify-around bg-black lg:bg-[#1D2430] lg:dark:bg-[#1D2430] dark:bg-[#D7DCE4] h-[28px] w-[80px] rounded-lg font-general-sans font-bold">
          <button
            className=" text-white dark:text-black lg:dark:text-white"
            onClick={() => adjustQuantity("-")}
          >
            -
          </button>
          <span className="text-center w-auto text-white dark:text-black lg:dark:text-white">
            {product.quantity}
          </span>
          <button
            className=" text-white dark:text-black lg:dark:text-white"
            onClick={() => adjustQuantity("+")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
