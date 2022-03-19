import { DUMMY_SECTIONS as Sections, DUMMY_DATA as Data } from '../dummyDatas';
import classes from './Menu.module.css';
import Section from '../components/Section';
import { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import { db, FirebaseDocumentNames } from '../firebase';


function Menu() {
  const [isOpen, setIsOpen] = useState(null);
  const [menuSections, setMenuSections] = useState(Sections.filter(el => Data.map(el => el.sectionId).includes(el.id)));
  const [menuItems, setMenuItems] = useState(Data);

  useEffect(() => {
    (async () => {

      // Get Menu Items
      const menuItemListSnapshot = await getDocs(collection(db, FirebaseDocumentNames.MENU_ITEMS));
      const menuItemList = menuItemListSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log({ menuItemList });
      setMenuItems(menuItemList);

      // Get Menu Sections
      const menuSectionListSnapshot = await getDocs(collection(db, FirebaseDocumentNames.MENU));
      const menuSectionList = menuSectionListSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log({ menuSectionList });
      setMenuSections(menuSectionList.filter(section => menuItemList?.map(s => s.sectionId).includes(section.id)));
    })();

  }, [setMenuSections, setMenuItems]);

  function openHandler(id) {
    isOpen === id ? setIsOpen(null) : setIsOpen(id);
  }

  return (
    menuSections && menuItems &&
    <>
      <h1>MENU</h1>
      <ul className={ classes.sections }>
        { menuSections.map(sec => (
          <li key={ sec.id }>
            <Section
              id={ sec.id }
              title={ sec.name }
              items={ menuItems.filter(
                item => item.sectionId === sec.id
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
