import classes from "./Header.module.css";
import logo from "../../images/logo.png";
import ForkButton from "../ui/ForkButton";

function Header() {
  return (
    <header className={classes.container}>
      <img src={logo} alt="logo bounty pub" className={classes.logo} />
      <ForkButton />
    </header>
  );
}

export default Header;
