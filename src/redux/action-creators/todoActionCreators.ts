import { ActionTypes } from "../actions/actionTypes";
import { Dispatch } from "redux";
import { Action } from "../actions/IActions";
export const addTodo = (userInput: string, id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.ADD_TODO,
      payload: {
        text: userInput,
        id: id,
      },
    });
  };
};

export const removeTodo = (id: string | undefined) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.REMOVE_TODO,
      payload: id,
    });
  };
};
