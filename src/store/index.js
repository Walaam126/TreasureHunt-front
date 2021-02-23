import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { checkToken } from "./actions/authAction";
import { fetchRandoms, fetchTreasures } from "./actions/thingsActions";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(checkToken());
store.dispatch(fetchRandoms());
store.dispatch(fetchTreasures());

export default store;
