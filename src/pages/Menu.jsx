import { DUMMY_SECTIONS as Sections, DUMMY_DATA as Data } from "../dummyDatas";
import classes from "./Menu.module.css";
import Section from "../components/Section";
import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(null);

  function openHandler(id) {
    isOpen === id ? setIsOpen(null) : setIsOpen(id);
  }

  const usedSections = Data.map(el => el.section);
  const filteredSections = Sections.filter(el => usedSections.includes(el.id));

  return (
    <>
      <h1>MENU</h1>
      <ul className={classes.sections}>
        {filteredSections.map(sec => (
          <li key={sec.id}>
            <Section
              id={sec.id}
              title={sec.name}
              items={Data.filter(
                item => item.section === Sections.indexOf(sec)
              )}
              isOpen={isOpen}
              onClick={openHandler}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
