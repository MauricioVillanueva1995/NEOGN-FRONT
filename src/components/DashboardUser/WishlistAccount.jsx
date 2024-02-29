import { useSelector } from "react-redux";
import WishlistCard from "../../components/Cards/WishlistCard";
import TitleSection from "../../components/TitleSection";
import WishlistAccountDesktop from "./WishlistAccountDesktop";

const WishlistAccount = ({ modalOpenCart, closeCart }) => {
  const wishlist = useSelector((state) => state.user.wishlist);
  return (
    <div className="h-screen w-full">
      <WishlistAccountDesktop
        modalOpenCart={modalOpenCart}
        closeCart={closeCart}
      />
      <div className="h-screen w-full dark:bg-black pt-4 lg:hidden">
        <TitleSection title={"Wishlist"} location={"/Account"} />
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
export default WishlistAccount;
