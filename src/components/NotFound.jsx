import classes from "./NotFound.module.css";
import glass from "../images/glass.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 5000);
  }, [navigate]);

  return (
    <div className={classes.main}>
      <img src={glass} alt="" />
      <h2>Page Not Found</h2>
    </div>
  );
}

export default NotFound;
