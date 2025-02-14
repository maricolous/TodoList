const TodoItem = ({ task, toggleTask }) => {
  return (
    <li className="todoItem">
      <input type="checkbox" checked={task.completed} onChange={toggleTask} />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "#999" : "#000000",
        }}
      >
        {task.text}
      </span>
    </li>
  );
};

export default TodoItem;
