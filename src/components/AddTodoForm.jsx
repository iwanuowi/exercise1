function AddTodoForm() {
  return (
    <form className="mt-3 d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Add new item...."
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
