import axios from "axios";

export function editProfile(id, payload) {
  return async function () {
    // try {
    //   const response = await axios.put(
    //     `http://localhost:3001/api/users/update/${id}`,
    //     payload
    //   );
    //   return response;
    // } catch (error) {
    //   console.error("Error editing profile:", error);
    // }

    try {
      const response = await axios.put(
        `https://neogn-backend.up.railway.app/api/users/update/${id}`,
        payload
      );
      return response;
    } catch (error) {
      console.error("Error editing profile:", error);
    }
  };
}