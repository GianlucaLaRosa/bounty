import { DUMMY_SECTIONS as Sections, DUMMY_DATA as Data } from "../dummyDatas";
import classes from "./Menu.module.css";
import Section from "../components/Section";
import { useState } from "react";

function Menu() {
  const [isVisible, setIsVisible] = useState(null);

  function visibilityHandler(id) {
    isVisible === id ? setIsVisible(null) : setIsVisible(id);
    console.log(isVisible);
  }

  function filterSections() {
    const filteredSections = [];
    for (const dish of Data) {
      if (!filteredSections.includes(dish.section)) {
        filteredSections.push(dish.section);
      }
    }
    return filteredSections;
  }

  return (
    <ul className={classes.sections}>
      {Sections.map(sec => (
        <li key={Sections.indexOf(sec)}>
          <Section
            id={Sections.indexOf(sec)}
            title={sec}
            items={Data.filter(item => item.section === Sections.indexOf(sec))}
            isVisible={isVisible}
            onClick={visibilityHandler}
          />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
