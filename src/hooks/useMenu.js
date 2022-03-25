import { getMenuItems, getMenuSections } from '../api/menu';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMenuIsFetchingSelector, useMenuTreeSelector } from '../store/menu/menu.selectors';
import { fetchMenu, fetchMenuFailure, fetchMenuSuccess } from '../store/menu/menu.slice';

export const useMenu = () => {
  const dispatch = useDispatch();
  const menuTree = useMenuTreeSelector();
  const menuIsFetching = useMenuIsFetchingSelector();

  useEffect(() => {
      (async () => {

        if(menuTree.length) {
          // This prevents the menu to be refetched if we've already fetched on load of the app
          return;
        }

        try {
          dispatch(fetchMenu());
          const [items, sections] = await Promise.all([getMenuItems(), getMenuSections()]);
          dispatch(fetchMenuSuccess({ items, sections }));
        } catch(err) {
          console.log(err);
          dispatch(fetchMenuFailure());
        }

      })();

    },
    [dispatch, menuTree.length]);

  return { menuTree, menuIsFetching };
};
