const initialState = {
  randoms: [],
  treasures: [],
  fetch: true,
};
export const ThingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RANDOM":
      return {
        ...state,
        randoms: action.payload.randoms,
      };
    case "FETCH_TREASURE":
      return {
        ...state,
        treasures: action.payload.treasures,
        fetch: false,
      };

    default:
      return state;
  }
};

export default ThingsReducer;
