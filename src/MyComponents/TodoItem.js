import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, onDelete }) => {
  
  const handleDelete = () => {
    // Ask user for confirmation before deleting
    if (window.confirm(`Are you sure you want to delete "${todo.title}"?`)) {
      onDelete(todo); // If user confirms, delete the todo
    }
  };

  return (
    <div className="todo-card">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn" onClick={handleDelete}>
        <FaTrash style={{ marginRight: "8px" }} /> Delete
      </button>
    </div>
  );
};

export default TodoItem;
