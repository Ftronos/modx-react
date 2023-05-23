import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import appReducer from "./app_reducer";
import articlesReducer from "./articles_reducer";

let reducers = combineReducers({
  app: appReducer,
  articlesPage: articlesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
