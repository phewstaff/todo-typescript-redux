import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const reducers = combineReducers({
  todos: todoReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
