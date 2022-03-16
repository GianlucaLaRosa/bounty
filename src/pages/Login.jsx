import classes from "./Login.module.css";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

function Login() {
  const [log, setLog] = useState({ mail: "", pwd: "" });
  const dispatch = useDispatch();

  function changeHandler(e) {
    setLog(prevLog => {
      return { ...prevLog, [e.target.name]: e.target.value };
    });
  }

  async function submitHandler(e) {
    e.preventDefault();
    console.log(log);
    try {
      const response = await axios({
        method: "post",
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
        data: {
          email: log.mail,
          password: log.pwd,
          returnSecureToken: true,
        },
        headers: { "Content-Type": "application/json" },
      });

      const { expiresIn, idToken } = response.data;

      if (response.status === 200) {
        dispatch(authActions.login([expiresIn, idToken]));
      } else {
        throw new Error();
      }
    } catch (err) {
      console.error(err.response.data.error.message);
    }
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <h2>LOG IN</h2>
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
          <Button type="reset">Reset</Button>
          <Button type="submit" cta="true">
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
