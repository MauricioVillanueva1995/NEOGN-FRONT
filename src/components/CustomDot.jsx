const CustomDot = ({ onClick, active }) => {
  const dotClasses = `w-2 h-2 sm:w-4 sm:h-4 rounded-full m-2 xl:relative xl:bottom-5 cursor-pointer ${
    active ? "bg-red-500" : "bg-gray-300/[0.2] backdrop-blur-sm"
  }`;

  return (
      <div className={dotClasses} onClick={() => onClick()} />
  );
};

export default CustomDot;
