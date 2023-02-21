import { ActionTypes } from "./actionTypes";

interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: {
    id: string;
    text: string;
  };
}
interface RemoveTodoAction {
  type: ActionTypes.REMOVE_TODO;
  payload: string | undefined;
}

export type Action = AddTodoAction | RemoveTodoAction;
