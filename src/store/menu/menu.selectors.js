import { useSelector } from 'react-redux';
import { menuSliceKey } from './menu.slice';

export const useMenuSelector = () => useSelector(state => {
  const { sections, items } = state[menuSliceKey];

  const usedSections = sections.filter(section => items?.map(item => item.sectionId).includes(section.id));
  return usedSections.map(section => ({
    ...section,
    items: items.filter(i => i.sectionId === section.id)
  }));
});

export const useMenuIsFetchingSelector = () => useSelector(state => state.menu.isFetching);

