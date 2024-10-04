import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "have sex with her" },
    { id: 2, name: "khan giay uot" },
  ]);

  const addNewTodo = (name) => {
    console.log(`Hi ${name} nha, chuc chin hoc nhanh nha`);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        <TodoData todos={todos} />
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
