import { useState, useRef, useEffect } from "react";
import TaskForm from "./TaskForm";
import TasksCompleted from "./Taskscompleted";
import TodoList from "./Todolist";

const TodoComponent = () => {
  const [formData, setFormData] = useState({ task: "" });
  const [tasks, setTasks] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.task.trim() === "") return;

    const newTask = { text: formData.task, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setFormData({ task: "" });
    formRef.current.reset();
  };

  const toggleTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const clearTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <main className="formWrap">
      <TaskForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        formRef={formRef}
      />
      <TasksCompleted tasks={tasks} />
      <TodoList tasks={tasks} toggleTask={toggleTask} clearTasks={clearTasks} />
    </main>
  );
};

export default TodoComponent;
