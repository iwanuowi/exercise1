import TodoItem from "./TodoItem";

function TodoList({ data, setData }) {
  return (
    <>
      <h3 className="card-title mb-3">My Todo List</h3>
      <ul className="list-group">
        {data.map((task, index) => {
          const { name, id, isCompleted } = task;

          return (
            <TodoItem
              key={index}
              name={name}
              id={id}
              isCompleted={isCompleted}
              data={data}
              setData={setData}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
