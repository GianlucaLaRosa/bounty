import classes from "./Login.module.css";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useState } from "react";
import axios from "axios";

function Signin() {
  const [log, setLog] = useState({ mail: "", pwd: "" });
  console.log(process.env.REACT_APP_API_KEY);

  function changeHandler(e) {
    setLog(prevLog => {
      return { ...prevLog, [e.target.name]: e.target.value };
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await axios({
        method: "post",
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
        data: {
          email: log.mail,
          password: log.pwd,
          returnSecureToken: true,
        },
        headers: { "Content-Type": "application/json" },
      });

      if (response.status !== 200) {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
    }
  }

  function resetHandler(e) {
    e.preventDefault();
    setLog({ mail: "", pwd: "" });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <h2>SIGN IN</h2>
        </div>
        <Input
          label="Indirizzo email"
          type="email"
          id="mail"
          onChange={changeHandler}
          value={log.mail}
        />
        <Input
          label="Password"
          type="password"
          id="pwd"
          onChange={changeHandler}
          value={log.pwd}
        />
        <div className={classes.action}>
          <Button onClick={resetHandler}>Reset</Button>
          <Button active>Signin</Button>
        </div>
      </form>
    </Card>
  );
}

export default Signin;
