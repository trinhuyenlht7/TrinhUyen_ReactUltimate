const TodoNew = (props) => {
  const { addNewTodo } = props;
  return (
    <div className="todo-new">
      <input type="text" />
      <button
        onClick={() => {
          addNewTodo("Chin KaiDo");
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default TodoNew;
