import classes from "./Input.module.css";

function Input(props) {
  const { label, type, id, onChange, value } = props;
  const inputClasses = `${classes.container} ${props.hor ? classes.hor : ""}`;

  return (
    <div className={inputClasses}>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} onChange={onChange} value={value} />
    </div>
  );
}

export default Input;
