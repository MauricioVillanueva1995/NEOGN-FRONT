import { motion } from "framer-motion";

const LeftySlider = ({ children, onClick, parentHeight }) => {
  return (
    <motion.div
      className="absolute top-0 right-0 bottom-0 left-0 bg-backDrop justify-center items-center z-[9999] hidden lg:flex"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ height: parentHeight }}
    >
      {children}
    </motion.div>
  );
};

export default LeftySlider;
