import { useSelector } from "react-redux";
import WishlistProductDesktop from "./WishlistProductDesktop";

const MyWishlistDesktop = () => {
  const wishlist = useSelector((state) => state.user.wishlist);

  return (
    <div className="xl:w-[700px] flex justify-start">
      <div className="inline-block min-w-full py-2 align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr className="font-poppins text-[#6C7275] text-sm">
                <th scope="col" className="px-3 py-3.5 text-left"></th>
                <th scope="col" className="px-3 py-3.5 text-left">
                  Status
                </th>
                <th scope="col" className="px-3 py-3.5 text-left">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {wishlist.length > 0 ? (
                wishlist.map((product, index) => (
                  <WishlistProductDesktop
                    key={index}
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    image={product.image}
                    price={product.price}
                    description={product.description}
                  />
                ))
              ) : (
                <p className="font-general-sans p-2 dark:text-white">
                  Add products to your wishlist!
                </p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyWishlistDesktop;
