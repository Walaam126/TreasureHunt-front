import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { checkToken } from "./actions/authAction";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(checkToken());
export default store;
