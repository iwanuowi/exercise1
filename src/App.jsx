import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "task 1",
      isCompleted: true,
    },
    {
      id: 2,
      name: "task 2",
      isCompleted: true,
    },
    {
      id: 3,
      name: "task 3",
      isCompleted: false,
    },
    {
      id: 4,
      name: "task 4",
      isCompleted: false,
    },
  ]);
  return (
    <>
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <TodoList data={data} />
          <AddTodoForm
            onAddNew={(newValue) =>
              setData([
                ...data,
                {
                  id: Math.floor(),
                  name: newValue,
                },
              ])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
