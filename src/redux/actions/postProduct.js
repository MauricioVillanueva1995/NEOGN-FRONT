import axios from "axios";

export function postProduct(payload) {
  return async function () {
    // console.log(payload);
    // const response = await axios.post(
    //   "http://localhost:3001/api/products/create",
    //   payload
    // );
    // return response;
  
    console.log(payload);
    const response = await axios.post(
      "https://neogn-back-584v.onrender.com/api/products/create",
      payload
    );
    return response;
  };
}
