import classes from "./Input.module.css";

function Input(props) {
  const { label, type, id } = props;

  return (
    <div className={classes.container}>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id}></input>
    </div>
  );
}

export default Input;
