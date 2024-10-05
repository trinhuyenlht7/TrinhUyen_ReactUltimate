import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = { id: crypto.randomUUID(), name: name };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        {todos.length > 0 ? (
          <TodoData todos={todos} />
        ) : (
          <div className="todo-image">
            <img src={reactLogo} className="logo" />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
