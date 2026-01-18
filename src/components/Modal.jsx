import { useReducer, useRef } from "react";

export const Modal = () => {
  const formRef = useRef(null);

  const changeBack = (e) => {
    e.preventDefault();
    console.log(formRef.current);
    formRef.current.style.backgroundColor = "red";
  };

  return (
    <form ref={formRef}>
      <label>React Hooks</label>
      <input type="text" placeholder="info" />
      <button onClick={changeBack}>Send info</button>
    </form>
  );
};
