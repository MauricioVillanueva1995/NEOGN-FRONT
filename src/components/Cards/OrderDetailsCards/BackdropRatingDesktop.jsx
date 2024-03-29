import { motion } from "framer-motion";

const BackdropRatingDesktop = ({ children, closeRating }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-full bg-backDrop flex justify-center items-center z-[9999] rounded-[16px] backdrop-blur-[2px]"
      onClick={closeRating}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
export default BackdropRatingDesktop;