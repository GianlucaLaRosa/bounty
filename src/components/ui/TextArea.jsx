import classes from "./TextArea.module.css";

function TextArea(props) {
  const { id, label, value } = props;
  return (
    <div className={classes.container}>
      <label htmlFor={id}>{label}</label>
      <textarea name={id} id={id}>
        {value}
      </textarea>
    </div>
  );
}

export default TextArea;
