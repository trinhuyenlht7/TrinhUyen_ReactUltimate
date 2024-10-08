import TodoData from "./TodoData";
import TodoNew from "./TodoNew";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = { id: crypto.randomUUID(), name: name };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      {todos.length > 0 ? (
        <TodoData todos={todos} deleteTodo={deleteTodo} />
      ) : (
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      )}
    </div>
  );
};

export default TodoApp;
