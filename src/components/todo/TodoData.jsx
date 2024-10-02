const TodoData = (props) => {
  const { name, age, info } = props;
  return (
    <div className="todo-data">
      <div>Play bida</div>
      <div>Play Badminton</div>
      <div>My Name is {name}</div>
    </div>
  );
};

export default TodoData;
