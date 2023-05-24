import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import appReducer from "./app_reducer";
import articlesReducer from "./articles_reducer";

let RootReducer = combineReducers({
  app: appReducer,
  articlesPage: articlesReducer,
});

type RootReducerTypes = typeof RootReducer;
export type AppStateType = ReturnType<RootReducerTypes>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  PropertiesTypes<T>
>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
