import classes from "./Settings.module.css";
import { useRef } from "react";
import { createSection } from "../api/menu";

function Settings() {
  const nameInputRef = useRef();
  const orderInputRef = useRef();

  function addSectionHandler(e) {
    e.preventDefault();
    createSection(nameInputRef.current.value, orderInputRef.current.value);
  }

  return (
    <>
      <h1>Settings</h1>
      <form onSubmit={addSectionHandler}>
        <h3>CREA SEZIONE</h3>
        <div>
          <label htmlFor="name">Nome della sezione</label>
          <input id="name" name="name" type="text" ref={nameInputRef}></input>
        </div>
        <div>
          <label htmlFor="order">Ordine della sezione</label>
          <input
            id="order"
            name="order"
            type="number"
            min={0}
            ref={orderInputRef}
          ></input>
        </div>
        <div>
          <button type="reset">Reset</button>
          <button>Crea</button>
        </div>
      </form>
    </>
  );
}

export default Settings;
