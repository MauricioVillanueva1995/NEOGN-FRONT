import { motion } from "framer-motion";

const BackdropCreate = ({ children, closeCreate }) => {
  return (
    <motion.div
      className="fixed top-0 left-[-12px] h-full w-full bg-backDrop flex justify-center items-center z-[9999] backdrop-blur-[2px]"
      onClick={closeCreate}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
export default BackdropCreate;