const Brands = () => {
  return (
    <div className="hidden w-full h-auto lg:flex flex-col items-center justify-center gap-y-10">
      <h2 className="font-exo font-semibold text-[60px] text-black dark:text-white">
        Brands
      </h2>
      <div className="w-full h-[250px] bg-[#930C20] rounded-t-[30px] grid-cols-3 grid items-center justify-center">
        <div className="w-auto h-auto flex items-center justify-center">
          <img
            className="w-[230px] h-auto"
            src="https://i.postimg.cc/Rh34wGy3/1-01.png"
          />
        </div>
        <div className="w-auto h-auto flex items-center justify-center">
          <img
            className="w-[230px] h-auto"
            src="https://i.postimg.cc/nhKZKXR1/1-02.png"
          />
        </div>{" "}
        <div className="w-auto h-auto flex items-center justify-center">
          <img
            className="w-[230px] h-auto"
            src="https://i.postimg.cc/g0YpgG1b/1-05.png"
          />
        </div>{" "}
        <div className="w-auto h-auto flex items-center justify-center">
          <img
            className="w-[230px] h-auto"
            src="https://i.postimg.cc/KvMmzqtw/1-04.png"
          />
        </div>{" "}
        <div className="w-auto h-auto flex items-center justify-center">
          <img
            className="w-[230px] h-auto"
            src="https://i.postimg.cc/NjvBr64M/1-06.png"
          />
        </div>{" "}
        <div className="w-auto h-auto flex items-center justify-center">
          <img
            className="w-[230px] h-auto"
            src="https://i.postimg.cc/PxVdL03s/1-03.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
