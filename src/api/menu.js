import { collection, getDocs } from 'firebase/firestore';
import { db, FirebaseDocumentNames } from '../firebase';

export async function getMenuItems() {
  const menuItemListSnapshot = await getDocs(collection(db, FirebaseDocumentNames.MENU_ITEMS));
  return menuItemListSnapshot.docs.map((doc) =>
    ({ id: doc.id, ...doc.data() })
  );
}

export async function getMenuSections() {
  const menuSectionListSnapshot = await getDocs(collection(db, FirebaseDocumentNames.MENU));
  return menuSectionListSnapshot.docs.map((doc) =>
    ({ id: doc.id, ...doc.data() })
  );
}
