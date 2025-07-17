import Swal from "sweetalert2";

function TodoItem({ isCompleted, name, id, data, setData }) {
  // for the delete button
  const handleRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = data.filter((todoList) => todoList.id !== id);
        setData(updatedData);
        Swal.fire({
          title: "Deleted!",
          text: "Your Todo List has been deleted.",
          icon: "success",
        });
      }
    });
  };

  // for the toggle like check and no check
  const handleToggle = () => {
    const updatedData = data.map((todo) => {
      if (todo.id === id) {
        if (todo.isCompleted === true) {
          return { ...todo, isCompleted: false };
        } else {
          return { ...todo, isCompleted: true };
        }
      } else {
        return todo;
      }
    });

    setData(updatedData);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button
          className={`btn btn-sm ${isCompleted ? "btn-success" : "btn-light"}`}
          onClick={handleToggle}
        >
          <i className="bi bi-check-square"></i>
        </button>
        <span
          className={`ms-2 ${
            isCompleted ? " text-decoration-line-through" : ""
          }`}
        >
          {name}
        </span>
      </div>
      <button className="btn btn-sm btn-danger" onClick={handleRemove}>
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
}

export default TodoItem;
