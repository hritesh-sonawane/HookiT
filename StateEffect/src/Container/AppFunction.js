// import React, { useState } from "react";
import React from "react";
// import NewTask from "../Presentational/NewTask";
// import TasksList from "../Presentational/TasksList";
// import EditProfile from "../Presentational/EditProfile";
// import PageTitle from "../Presentational/PageTitle";
// import Counter from "../Presentational/Counter";
// import Timer from "../Presentational/Timer";
import Forecast from "../Presentational/Forecast";

export default function AppFunction() {
  //   const [newTask, setNewTask] = useState({}); // object in state
  //   const handleChange = ({ target }) => {
  //     const { name, value } = target;
  //     setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  //   };

  //   const [allTasks, setAllTasks] = useState([]); // array in state
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (!newTask.title) return;
  //     setAllTasks((prev) => [newTask, ...prev]);
  //     setNewTask({});
  //   };
  //   const handleDelete = (taskIdToRemove) => {
  //     setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
  //   };

  return (
    <main>
      {/* <Timer />
      <br />
      <PageTitle />
      <br />
      <Counter />
      <br />
      <EditProfile />
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} /> */}
      <Forecast />
    </main>
  );
}
