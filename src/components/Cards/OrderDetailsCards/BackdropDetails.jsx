import { motion } from "framer-motion";

const BackdropDetails = ({ children, closeDetail }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 h-[100vh] w-[100vw] bg-backDrop flex justify-center items-center z-[9999]"
      onClick={closeDetail}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
export default BackdropDetails;