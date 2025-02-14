import React from "react";

const TasksCompleted = ({ tasks = [] }) => {
  const allCompleted = tasks.every((task) => task.completed);

  if (allCompleted) {
    return (
      <div className="completed-message animate__animated animate__heartBeat">
        All tasks are done! 🎉
      </div>
    );
  }

  return null;
};

export default TasksCompleted;
