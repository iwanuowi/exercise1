import TodoItem from "./TodoItem";

function TodoList({ data }) {
  return (
    <>
      <h3 className="card-title mb-3">My Todo List</h3>
      <ul className="list-group">
        {data.map((task) => {
          const { name, id, isCompleted } = task;

          return <TodoItem name={name} key={id} isCompleted={isCompleted} />;
        })}
      </ul>
    </>
  );
}

export default TodoList;
