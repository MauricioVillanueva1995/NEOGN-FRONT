import { motion } from "framer-motion";

const Backdrop = ({ children, closeFilter }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 h-full w-[100%] bg-backDrop flex justify-center items-center z-[9999]"
      onClick={closeFilter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
export default Backdrop;
