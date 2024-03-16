import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import AddRating from "./AddRating";

const DetailOrderCard = ({ product }) => {
  const [showRating, setShowRating] = useState(false);
  const [ratingProduct, setRatingProduct] = useState(0);

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
    <div className="relative flex justify-around items-center shadow-[0px_1px_10px_#00000040] shadow-[#f7e2e5] w-full min-w-[350px] h-[92px] bg-white rounded-2xl">
      <div className="flex items-center bg-card  justify-center w-[60px] h-[60px] rounded-[10px]">
        <img
          className="h-[auto] w-auto"
          src={product.picture_url}
          alt="Product image"
        />
      </div>
      <div className="w-auto h-[auto] flex flex-col gap-y-3">
        <h2 className="font-general-sans font-semibold overflow-hidden h-auto line-clamp-1">
          {product.title}
        </h2>
        <div className="flex w-full gap-x-20">
          <p className="font-general-sans font-medium text-xl w-auto h-auto text-rose-500">
            $ {product.unit_price}
          </p>
          {showRating && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-4 rounded-lg">
                <AddRating
                  rating={ratingProduct}
                  setRating={setRatingProduct}
                  handleToRating={handleToRating}
                />
              </div>
            </div>
          )}
          <button
            onClick={() => setShowRating(true)}
            className="px-2 font-poppins font-medium text-xs bg-[#E54660] text-slate-100 flex justify-center items-center rounded-lg"
          >
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailOrderCard;
