import axios from "axios";
import { getFiltered } from "../slices/filteredSlice";

const getFilter = (filterParams) => {
  return async function (dispatch) {
    // try {
    //   const response = await axios.get(
    //     `http://localhost:3001/api/products/filter`,
    //     {
    //       params: filterParams,
    //     }
    //   );
    //   dispatch(getFiltered(response.data));
    // } catch (error) {
    //   console.error(error);
    // }

    try {
      const response = await axios.get(
        `https://neogn-backend.up.railway.app/api/products/filter`,
        {
          params: filterParams,
        }
      );
      dispatch(getFiltered(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default getFilter;
