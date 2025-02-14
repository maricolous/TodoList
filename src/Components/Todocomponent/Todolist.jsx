import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks = [], toggleTask, clearTasks }) => {
  return (
    <div>
      {tasks.length > 0 && (
        <button className="smallButton" onClick={clearTasks}>
          X Radera alla uppgifter
        </button>
      )}
      <ul className="todoiList">
        <div className="listWrap">
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              toggleTask={() => toggleTask(index)}
            />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default TodoList;
