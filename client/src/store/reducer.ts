// the root reducer
import { combineReducers } from "redux";
import articleListReducer from "./articleList/articleListReducer";

/**
 * Base reducer.
 * @remarks
 * Will combine multiple reducers
 */
export default combineReducers({ articleListReducer });
