import { combineReducers } from "redux";
import ThingsReducer from "./ThingReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  ThingsReducer: ThingsReducer,
});

export default rootReducer;
