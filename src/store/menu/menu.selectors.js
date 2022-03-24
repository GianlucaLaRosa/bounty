import { useSelector } from 'react-redux';
import { menuSliceKey } from './menu.slice';

export const useMenuStateSelector = () => useSelector(state => state[menuSliceKey]);

export const useMenuTreeSelector = () => {
  const { sections, items } = useMenuStateSelector();

  const usedSections = sections.filter(section => items?.map(item => item.sectionId).includes(section.id));
  return usedSections.map(section => ({
    ...section,
    items: items.filter(i => i.sectionId === section.id)
  }));
};

export const useMenuIsFetchingSelector = () => useMenuStateSelector().isFetching;

