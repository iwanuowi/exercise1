import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <TodoList />
          <AddTodoForm />
        </div>
      </div>
    </>
  );
}

export default App;
