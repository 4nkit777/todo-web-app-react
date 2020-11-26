import React, { useState } from "react";
import AllTasks from "./AllTasks";
import NewTask from "./NewTask";

export default function MainScreen() {
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
      id: Date.now(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prevState) => {
      return [newTask, ...prevState];
    });
    setNewTask(() => ({}));
  };

  const handleDelete = (taskIdToRemove) => {
    // console.log(allTasks);
    setAllTasks((prev) => {
      return prev.filter((t) => {
        // console.log(t)
        return t.id !== taskIdToRemove;
      });
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div
          className="col-md-6 p-3"
          style={{ backgroundColor: "#f1faee", borderRadius: "5px" }}
        >
          <h2
            className="text-center p-2"
            style={{ backgroundColor: "#a8dadc", color: "white" }}
          >
            Task List
          </h2>
          <NewTask
            newTask={newTask}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <AllTasks allTasks={allTasks} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
