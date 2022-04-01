import classes from "./Input.module.css";

function Input(props) {
  const { label, type, id, onChange, value } = props;

  return (
    <div className={classes.container}>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} onChange={onChange} value={value} />
    </div>
  );
}

export default Input;
