const TopProducts = () => {
  return (
    <div className="w-full h-auto hidden lg:flex items-center justify-center gap-x-14 py-20">
      <div className="w-[800px] h-[450px] bg-[#212121] slanted-corners pl-16 flex">
        <div className="w-[450px] h-auto flex flex-col justify-start pt-16 gap-y-10">
          <div className="w-[350px] h-[100px] overflow-hidden flex items-center justify-center">
            <img
              className="w-auto h-[200px]"
              src="https://i.postimg.cc/2jybdtyw/hyper1.png"
            />
          </div>
          <h2 className="font-general-sans text-white text-[35px] font-semibold line-clamp-2">
            Cloud Alpha Wireless – DTS - Gaming Headset
          </h2>
          <div className="font-exo font-medium w-auto h-auto flex justify-start gap-x-5 items-center text-white">
            LEARN MORE
            <img
              className="w-auto h-[15px]"
              src="https://i.postimg.cc/KctdDwDM/right-arrow-svgrepo-com.png"
            />
          </div>
        </div>
        <div className="w-auto h-auto flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-full object-cover"
           src="https://i.postimg.cc/BSjY9f0R/hyperx-cloud-alpha-wireless-3-si-1.png"/>
        </div>
      </div>
      <div className="w-[800px] h-[450px] bg-[#DF102E] slanted-corners pl-16 flex">
        <div className="w-[450px] h-auto flex flex-col justify-start pt-16 gap-y-10">
          <div className="w-[350px] h-[100px] overflow-hidden flex items-center justify-center">
            <img
              className="w-auto h-[200px]"
              src="https://i.postimg.cc/KbN0Ng4k/hyper2.png"
            />
          </div>
          <h2 className="font-general-sans text-white text-[35px] font-semibold line-clamp-2">
            HyperX Clutch Gaming Controller
          </h2>
          <div className="font-exo font-medium w-auto h-auto flex justify-start gap-x-5 items-center text-white">
            LEARN MORE
            <img
              className="w-auto h-[15px]"
              src="https://i.postimg.cc/KctdDwDM/right-arrow-svgrepo-com.png"
            />
          </div>
        </div>
        <div className="w-auto h-auto ml-auto flex items-center justify-center">
          <img src="https://i.postimg.cc/s3gk289D/hyperx-clutch-wireless-gaming-co-1-1.png"/>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
