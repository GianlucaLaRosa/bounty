import classes from "./Login.module.css";
import Card from "../components/layout/Card";
import { useState } from "react";

function Login() {
  const [log, setLog] = useState(undefined);

  function submitHandler(e) {
    e.preventDefault();
  }

  function resetHandler() {
    setLog(undefined);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <h2>LOG IN</h2>
        </div>
        <div>
          <label htmlFor="">Nome utente</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <div>
          <button onClick={resetHandler}>Reset</button>
          <button className={classes.btnActive}>Login</button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
