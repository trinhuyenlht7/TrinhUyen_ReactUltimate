import { useState } from "react";

const TodoNew = (props) => {
  const [todoName, setTodoName] = useState("");

  const { addNewTodo } = props;
  const handleOnChangeTodoInput = (todoName) => {
    setTodoName(event.target.value);
  };

  const handleOnClickAdd = () => {
    addNewTodo(todoName);
    setTodoName("");
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => {
          handleOnChangeTodoInput(event.target.value);
        }}
        value={todoName}
      />
      <button
        onClick={() => {
          handleOnClickAdd();
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default TodoNew;
