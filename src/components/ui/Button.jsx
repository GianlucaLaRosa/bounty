import classes from "./Button.module.css";

function Button(props) {
  const btnClasses = `${classes.btn} ${props.active ? classes.btnCta : ""}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
