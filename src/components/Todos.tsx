import React from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import { useDispatch } from "react-redux";
import { State } from "../redux/reducers/combineReducers";
import { useTypedSelector } from "../redux/hooks/useTypedSelector";

const Todo: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useTypedSelector((state: State) => state.todos);
  const { removeTodo } = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      {todos.map((item) => {
        return (
          <div>
            <div className="todo-rows" key={item.id}>
              <div className="title">{item.text} </div>
              <button
                onClick={(e): void => {
                  e.preventDefault();
                  removeTodo(item.id);
                  console.log(item.id);
                }}
                className="todo-button-delete"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
// спросить: const Component = (props: IProps)
