import classes from "./Header.module.css";
import logo from "../../images/logo.svg";
import { GiKnifeFork } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={classes.container}>
      <Link to="/">
        <img src={logo} alt="logo bounty pub" className={classes.logo} />
      </Link>
      <Link to="/menu">
        <IconContext.Provider value={{ className: classes.icon }}>
          <GiKnifeFork />
        </IconContext.Provider>
      </Link>
    </header>
  );
}

export default Header;
