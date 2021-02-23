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

export const fetchTreasures = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/things/treasurelist");
      dispatch({
        type: types.FETCH_TREASURE,
        payload: { treasures: response.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
