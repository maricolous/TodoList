const Input = ({ task, type, onChange, placeholder, label, required }) => {
  return (
    <div className="inputfield">
      <label>{label}</label>
      <input
        task={task}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      ></input>
    </div>
  );
};

export default Input;
