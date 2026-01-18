import { render } from "@testing-library/react";
import { useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  // let time = 0;

  const func = () => {
    setTimer(timer + 1);
  };

  const startTimer = setTimeout(func, 1000);
  console.log(startTimer);

  const stopTimer = () => {
    clearTimeout(startTimer);
    setTimer(0);
    console.log(startTimer);
  };

  return (
    <div>
      <p>{startTimer}</p>
      <button onClick={stopTimer}>stop timer</button>
    </div>
  );
};

export default Timer;
