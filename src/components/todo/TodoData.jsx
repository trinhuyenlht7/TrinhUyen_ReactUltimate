const TodoData = (props) => {
  const { todos, deleteTodo } = props;
  const onClickForDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="todo-data">
      {todos.map((item) => {
        return (
          <div key={item.id} className="todo-item">
            <div> {item.name}</div>
            <button
              onClick={() => {
                onClickForDelete(item.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
