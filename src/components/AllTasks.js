import React from "react";
import "../styles/allTasksStyle.css";

export default function AllTasks({ allTasks, handleDelete }) {
  return (
    <ul style={{ listStyleType: "none", margin: "0px", padding: "0px" }}>
      {allTasks.map(({ title, id }) => (
        <li
          key={id}
          style={{ color: "white" }}
          className="list-item-style d-flex justify-content-between p-3"
        >
          <div className="d-flex p-0 text-center">
            <h2 className="p-0 m-0pret">{title}</h2>
          </div>
          <button className="list-btn" onClick={() => handleDelete(id)}>
            <i className="fas fa-times"></i>
          </button>
        </li>
      ))}
    </ul>
  );
}
