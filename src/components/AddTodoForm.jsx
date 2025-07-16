function AddTodoForm({ onAddNew }) {
  return (
    <form className="mt-3 d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Add new item...."
        id="taskName"
        required
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();

          if (taskName.value === "") {
            alert("please enter a todo name");
          } else {
            onAddNew(taskName.value);
            taskName.value = "";
          }
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
