import logo from "../../images/foodLogo.svg";
import classes from "./ForkButton.module.css";

function ForkButton() {
  return <img src={logo} alt="Pulsante menu" className={classes.logo} />;
}

export default ForkButton;
