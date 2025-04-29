import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");  // Empty default state
  const [desc, setDesc] = useState("");    // Empty default state
  const [error, setError] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (error && e.target.value) setError(""); // Clear error when typing begins
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
    if (error && e.target.value) setError(""); // Clear error when typing begins
  };

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      setError("Title and Description cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");  // Clear inputs after adding todo
      setDesc("");   // Clear inputs after adding todo
      setError("");  // Clear error message
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="form-control"
            id="title"
            // No placeholder, title box will remain empty by default
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input
            type="text"
            value={desc}
            onChange={handleDescChange}
            className="form-control"
            id="desc"
            // No placeholder for description either
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button
          type="submit"
          className="btn btn-sm btn-success"
          disabled={!title || !desc} // Disable button if any input is empty
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
