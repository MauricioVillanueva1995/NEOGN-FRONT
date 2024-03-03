import { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingFilter = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className=" font-jakarta-plus font-normal space-y-2">
      <h6 className="text-xl font-medium font-jakarta-sans text-black dark:text-white">Rating</h6>
      <div className="flex">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label
              key={ratingValue}
              className="flex"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            >
              <input
                type="radio"
                name="rating"
                className="hidden"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className="cursor-pointer transition duration-200"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={25}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RatingFilter;
