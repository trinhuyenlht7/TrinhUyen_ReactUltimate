import { useState } from "react";

const TodoNew = (props) => {
  const [todoName, setTodoName] = useState("");

  const { addNewTodo } = props;
  const handleOnChangeTodoInput = (todoName) => {
    setTodoName(event.target.value);
  };

  const handleOnClickAdd = () => {
    console.log(todoName);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => {
          handleOnChangeTodoInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          handleOnClickAdd();
        }}
      >
        ADD
      </button>
      <div>new todo : {todoName}</div>
    </div>
  );
};

export default TodoNew;
