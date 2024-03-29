import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import AddRatingDesktop from "./AddRatingDesktop";

const DetailOrderCardDesktop = ({ product }) => {
  const [modalRatingOpen, setModalRatingOpen] = useState(false);
  const [ratingProduct, setRatingProduct] = useState(0);

  const closeRating = () => setModalRatingOpen(false);
  const openRating = () => setModalRatingOpen(true);

  const handleToRating = async () => {
    const SKU = product.id;
    try {
      const response = await axios.put(`/api/products/rating/${SKU}`, {
        rating: ratingProduct,
      });
      if (response.status === 200) {
        toast.success("Rating successfully added!");
        setShowRating(false);
      }
    } catch (error) {
      console.error("Error editing rating:", error);
    }
  };

  return (
    <div className="relative flex justify-around items-center shadow-[0px_1px_10px_#00000040] shadow-[#e0cdd0] w-[295px] h-[75px] bg-white rounded-[10px] py-3">
      <div className="flex items-center bg-card justify-center w-[50px] h-[50px] rounded-[7px]">
        <img
          className="h-auto w-auto"
          src={product.picture_url}
          alt="Product image"
        />
      </div>
      <div className="w-auto h-[auto] flex flex-col gap-y-2">
        <h2 className="font-general-sans font-medium text-sm overflow-hidden h-auto line-clamp-1 text-black">
          {product.title}
        </h2>
        <div className="flex w-full justify-between gap-x-14 items-center">
          <p className="font-general-sans font-medium text-sm w-auto h-auto text-rose-500">
            $ {product.unit_price}.00
          </p>

          <motion.button
            onClick={() => (modalRatingOpen ? closeRating() : openRating())}
            className="px-2 py-[2px] font-general-sans font-base text-xs bg-[#E54660] text-slate-100 flex justify-center items-center rounded-lg"
          >
            Add Review
          </motion.button>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalRatingOpen && (
              <AddRatingDesktop
                rating={ratingProduct}
                setRating={setRatingProduct}
                handleToRating={handleToRating}
                closeRating={closeRating}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DetailOrderCardDesktop;
