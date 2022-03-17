import classes from "./Timer.module.css";
import { useEffect, useState } from "react";

function Timer() {
  const calculateTimeLeft = () => {
    const difference = +new Date(localStorage.getItem("expir")) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  function minTwoDigits(num) {
    return (num < 10 ? "0" : "") + num;
  }

  Object.keys(timeLeft).forEach(interval => {
    timerComponents.push(timeLeft[interval]);
  });
  let timerClass = `${classes.timer} ${
    timerComponents[0] > 4 ? classes.hidden : ""
  }`;
  return (
    <p className={timerClass}>
      You will be logged out in {timerComponents[0]}:
      {minTwoDigits(timerComponents[1])}
    </p>
  );
}

export default Timer;
