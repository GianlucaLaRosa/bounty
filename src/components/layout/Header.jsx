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
import { useEffect } from "react";
import Timer from "./Timer";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let autoLogoutTimer = setTimeout(() => {
      dispatch(authActions.logout());
      navigate("/");
    }, new Date(localStorage.getItem("expir")).getTime() - new Date().getTime());
    return () => {
      clearTimeout(autoLogoutTimer);
    };
  });

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  function logoutHandler() {
    dispatch(authActions.logout());
    navigate("/login", { replace: true });
  }

  return (
    <header className={classes.container}>
      <Link to="/">
        <img src={logo} alt="logo bounty pub" className={classes.logo} />
      </Link>
      {isLoggedIn && <Timer />}
      <IconContext.Provider value={{ className: classes.icon }}>
        <span>
          {isLoggedIn && (
            <>
              <Link to="/settings">
                <FaRegChartBar />
              </Link>
              <FaSignOutAlt onClick={logoutHandler} />
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
