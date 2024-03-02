import axios from "axios";

export function editProduct(id, payload) {
  return async function () {
    // try {
    //   const response = await axios.put(
    //     `http://localhost:3001/api/products/update/${id}`,
    //     payload
    //   );
    //   return response;
    // } catch (error) {
    //   console.error("Error editing product:", error);
    // }

    try {
      const response = await axios.put(
        `https://neogn-back-584v.onrender.com/api/products/update/${id}`,
        payload
      );
      return response;
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };
}
