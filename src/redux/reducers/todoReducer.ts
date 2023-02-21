import { ActionTypes } from "../actions/actionTypes";
import { Action } from "../actions/IActions";
import { ITodo } from "../../types";

const initialState: ITodo[] = [{ id: "dkfjsghjkdsfhg", text: "lkdfsjglk" }];

const todoReducer = (state: ITodo[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state, { id: action.payload.id, text: action.payload.text }];
    case ActionTypes.REMOVE_TODO:
      return [...state.filter((item) => item.id !== action.payload)];
    default:
      return state;
  }
};

export default todoReducer;
