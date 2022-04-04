import classes from "./InputCard.module.css";

function InputCard(props) {
  return (
    <div className={classes.container}>
      <label>{props.label}</label>
      <div className={classes.card}>{props.children}</div>
    </div>
  );
}

export default InputCard;
