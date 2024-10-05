const TodoData = (props) => {
  const { todos } = props;

  return (
    <div className="todo-data">
      {todos.map((item) => {
        return (
          <div key={item.id} className="todo-item">
            <div> {item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
