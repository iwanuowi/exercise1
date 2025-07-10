import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <>
      <h3 className="card-title mb-3">My Todo List</h3>
      <ul className="list-group">
        <TodoItem name="Task 1" isCompleted={true} />
        <TodoItem name="Task 2" isCompleted={false} />
        <TodoItem name="Task 3" isCompleted={false} />
        <TodoItem name="Task 4" isCompleted={false} />
      </ul>
    </>
  );
}

export default TodoList;
