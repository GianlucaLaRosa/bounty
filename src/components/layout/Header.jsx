import classes from "./Header.module.css";
import logo from "../../images/logo.svg";
import { GiKnifeFork } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { FaRegChartBar } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

function Header() {
  const settIsVisible = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutHandler() {
    dispatch(authActions.logout());
    navigate("/", { replace: true });
  }

  return (
    <header className={classes.container}>
      <Link to="/">
        <img src={logo} alt="logo bounty pub" className={classes.logo} />
      </Link>
      <IconContext.Provider value={{ className: classes.icon }}>
        <span>
          {settIsVisible && (
            <>
              <Link to="/settings">
                <FaRegChartBar />
              </Link>
              {/* <Link to="/" onClick={logoutHandler}> */}
              <FaSignOutAlt onClick={logoutHandler} />
              {/* </Link> */}
            </>
          )}
          <Link to="/menu">
            <GiKnifeFork />
          </Link>
        </span>
      </IconContext.Provider>
    </header>
  );
}

export default Header;
