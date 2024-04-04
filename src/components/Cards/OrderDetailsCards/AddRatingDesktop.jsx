import { motion } from "framer-motion";
import BackdropRatingDesktop from "./BackdropRatingDesktop";
import { FaStar } from "react-icons/fa";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, damping: 25, stiffness: 500 },
  exit: { y: "100vh", opacity: 0 },
};

const AddRatingDesktop = ({ rating, setRating, handleToRating, closeRating }) => {
  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleConfirm = () => {
    handleToRating();
    closeRating();
  };

  return (
    <BackdropRatingDesktop closeRating={closeRating}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="bg-white py-3 px-4 rounded-2xl flex items-center justify-center gap-x-4">
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => handleStarClick(star)}
                className={`cursor-pointer text-4xl ${
                  star <= rating
                    ? "text-[#DF102E]"
                    : "text-[#e4e5e9] md:font-bold"
                }`}
              />
            ))}
          </div>
          <button
            className="transition-all duration-500 bg-gradient-to-br to-red-800 via-red-500 from-heroButton bg-size-200 hover:bg-right-bottom rounded-lg p-2 py-1 dark:text-black text-[14px] font-general-sans font-semibold tracking-wider text-white hover:bg-slate-700"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </BackdropRatingDesktop>
  );
};

export default AddRatingDesktop;
