import Input from "../Input";

const TaskForm = ({ setFormData, handleSubmit, formRef }) => {
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Input
        task="task"
        type="text"
        placeholder="ex, Äta lunch, skicka email etc."
        label="Lägg till uppgift här"
        onChange={(e) => setFormData({ task: e.target.value })}
        required
      />
      <button type="submit">Lägg till</button>
    </form>
  );
};

export default TaskForm;
