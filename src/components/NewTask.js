import React from "react";
import "../styles/newTaskStyle.css";

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="d-flex justify-content-center">
        <input
          className="input-style"
          name="title"
          placeholder="New Task"
          value={newTask.title || ""}
          onChange={handleChange}
        />
        <button type="submit" className="ml-2 task-button">
          Add Task
        </button>
      </div>
    </form>
  );
}
