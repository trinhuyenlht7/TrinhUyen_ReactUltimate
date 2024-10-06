import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import "../src/style/app.css";
import { Outlet } from "react-router-dom";
const App = () => {
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
    <>
      <Header />
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
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
