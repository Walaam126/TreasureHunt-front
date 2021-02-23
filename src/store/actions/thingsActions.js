import axios from "axios";
import instance from "./instance";
import * as types from "./types";

export const fetchRandoms = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/things/list");
      dispatch({
        type: types.FETCH_RANDOM,
        payload: { randoms: response.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const fetchProducts = () => {
//     return async (dispatch) => {
//       try {
//         const response = await instance.get("/products");
//         dispatch({
//           type: types.FETCH_PRODUCT,
//           payload: { product: response.data },
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   };
