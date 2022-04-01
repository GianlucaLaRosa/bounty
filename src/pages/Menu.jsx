import classes from "./Menu.module.css";
import Section from "../components/Section";
import { useState } from "react";
import { useMenu } from "../hooks/useMenu";

function Menu() {
  const [isOpen, setIsOpen] = useState(null);
  const { menuTree, menuIsFetching } = useMenu();

  function openHandler(id) {
    isOpen === id ? setIsOpen(null) : setIsOpen(id);
  }

  return (
    <>
      <h1>MENU</h1>
      {menuIsFetching && <span>Loading dishes...</span>}{" "}
      {/*TODO: Create component*/}
      {!menuTree && <span>No dishes, sorry!</span>}{" "}
      {/* TODO: Create component*/}
      {menuTree && (
        <ul className={classes.sections}>
          {menuTree.map(section => (
            <li key={section.id}>
              <Section
                id={section.id}
                title={section.name}
                items={section.items}
                isOpen={isOpen}
                onClick={openHandler}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Menu;
