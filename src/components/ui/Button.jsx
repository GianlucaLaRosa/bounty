import classes from "./Button.module.css";

function Button(props) {
  const btnClasses = `${classes.btn} ${props.cta ? classes.btnCta : ""}`;

  return (
    <button className={btnClasses} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
