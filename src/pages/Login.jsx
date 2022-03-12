import classes from "./Login.module.css";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useState } from "react";

function Login() {
  const [log, setLog] = useState(undefined);

  function submitHandler(e) {
    e.preventDefault();
  }

  function resetHandler(e) {
    e.preventDefault();
    setLog(undefined);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <h2>LOG IN</h2>
        </div>
        <Input label="Nome utente" type="text" id="name" />
        <Input label="Password" type="password" id="pwd" />
        <div className={classes.action}>
          <Button onClick={resetHandler}>Reset</Button>
          <Button active>Login</Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
