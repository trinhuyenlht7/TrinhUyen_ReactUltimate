const TodoData = (props) => {
  const { todos } = props;
  return (
    <div className="todo-data">
      <div>Play bida</div>
      <div>Play Badminton</div>
      <div>My Name is {name}</div>
      <div>{JSON.stringify(props.todos)}</div>
    </div>
  );
};

export default TodoData;
