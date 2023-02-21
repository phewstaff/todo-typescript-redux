import React, { useState } from "react";
import { v4 } from "uuid";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux";

const AddToList: React.FC = () => {
  const dispatch = useDispatch();
  const { addTodo } = bindActionCreators(actionCreators, dispatch);
  const [userInput, setUserInput] = useState("");
  const [id, setId] = useState(v4());
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value.trim().length === 0) {
      {
        setEmpty(true);
      }
    } else {
      setEmpty(false);
    }
    setUserInput(e.currentTarget.value);
  };
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setId(v4());
    e.preventDefault();
    addTodo(userInput, id);
    setUserInput("");
  };
  const [empty, setEmpty] = useState(true);
  return (
    <>
      <form className="todo-form">
        <input
          onChange={handleChange}
          value={userInput}
          className="todo-input"
          placeholder="type what to do"
        ></input>
        <button
          disabled={empty}
          onClick={handleClick}
          className="todo-button edit"
        >
          add task
        </button>
      </form>
    </>
  );
};

export default AddToList;
