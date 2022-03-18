import { DUMMY_SECTIONS as Sections, DUMMY_DATA as Data } from '../dummyDatas';
import classes from './Menu.module.css';
import Section from '../components/Section';
import { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import { db, FirebaseDocumentNames } from '../firebase';
// import { baseApiUrl } from '../firebase/rest-api';
// import axios from 'axios';


function Menu() {
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    (async () => {

      // Rest way
      /*const result = axios(`${ baseApiUrl }/menu`);
      console.log({ result });*/

      // Firebase Way
      const querySnapshot = await getDocs(collection(db, FirebaseDocumentNames.MENU));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    })();
  });

  function openHandler(id) {
    isOpen === id ? setIsOpen(null) : setIsOpen(id);
  }

  const usedSections = Data.map(el => el.sectionId);
  const filteredSections = Sections.filter(el => usedSections.includes(el.id));

  return (
    <>
      <h1>MENU</h1>
      <ul className={ classes.sections }>
        { console.log(Data) }
        { filteredSections.map(sec => (
          <li key={ sec.id }>
            <Section
              id={ sec.id }
              title={ sec.name }
              items={ Data.filter(
                item => item.sectionId === Sections.indexOf(sec)
              ) }
              isOpen={ isOpen }
              onClick={ openHandler }
            />
          </li>
        )) }
      </ul>
    </>
  );
}

export default Menu;
