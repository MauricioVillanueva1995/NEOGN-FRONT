import { motion } from "framer-motion";
import BackdropRating from "./BackdropRating";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, damping: 25, stiffness: 500 },
  exit: { y: "100vh", opacity: 0 },
};

const Rating = ({ rating, setRating, handleToRating, closeRating }) => {
  const handleStarClick = (star) => {
    setRating(star);
  };

  return (
    <BackdropRating closeRating={closeRating}>
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
              <span
                key={star}
                onClick={() => handleStarClick(star)}
                className={`cursor-pointer text-4xl ${
                  star <= rating
                    ? "text-yellow-400"
                    : "text-gray-300 md:font-bold"
                }`}
              >
                {star <= rating ? "★" : "☆"}
              </span>
            ))}
          </div>
          <button
            className="bg-[#E54660] text-white px-4 py-1 rounded-xl"
            onClick={handleToRating}
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </BackdropRating>
  );
};

export default Rating;
