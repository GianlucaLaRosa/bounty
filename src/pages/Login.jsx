import classes from "./Login.module.css";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [log, setLog] = useState({ mail: "", pwd: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeHandler(e) {
    setLog(prevLog => {
      return { ...prevLog, [e.target.name]: e.target.value };
    });
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, log.mail, log.pwd);
      let currUser = auth.currentUser;
      let expirTime = currUser.stsTokenManager.expirationTime;
      let uid = currUser.uid;
      if (currUser) {
        dispatch(authActions.login({ expirTime, uid }));
        navigate("/settings");
      } else {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
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
