import { useSelector } from "react-redux";
import WishlistCard from "../components/Cards/WishlistCard";
import TitleSection from "../components/TitleSection";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.user.wishlist);
  const user = useSelector((state) => state.user);

  if (!user.id) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center mt-[-100px] gap-6">
        <h1 className="text-[24px] font-semibold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white flex justify-center">
          Welcome to your Wishlist! 😊
        </h1>
        <p className="text-gray-900 dark:text-white text-center">
          To start saving your favorite products, please log in.
        </p>
        <Link to="/Account">
          <button className="text-white bg-heroColor hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-full text-base px-4 py-2 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800">
            Go to Login
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      <div className="h-screen w-full lg:hidden dark:bg-[#121212]">
        <TitleSection title={"Wishlist"} location={"/"} />
        <div className="w-full h-auto flex justify-center items-center">
          <div className="w-auto h-auto grid grid-cols-1 gap-y-4 justify-center mx-3 font-bold pt-4">
            {wishlist.length > 0 ? (
              wishlist.map((product) => (
                <WishlistCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                />
              ))
            ) : (
              <p>You still do not have products on Wishlist.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
