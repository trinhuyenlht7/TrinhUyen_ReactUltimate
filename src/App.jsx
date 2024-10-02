import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
const App = () => {
  const fullName = "Kaito Kid";
  const age = 18;
  const info = {
    address: "Can Tho",
    phone: "0907307108",
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData name={fullName} age={age} info={info} />
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
