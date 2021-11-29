import { makeVar, useReactiveVar } from "@apollo/client";

const drawerVar = makeVar({
  isDrawerOpen: false,
});

export const useDrawer = () => {
  const { isDrawerOpen } = useReactiveVar(drawerVar);

  const toggleDrawer = () => {
    drawerVar({ ...drawerVar(), isDrawerOpen: !isDrawerOpen });
  };

  const setDrawer = (isDrawerOpen) => {
    drawerVar({ ...drawerVar(), isDrawerOpen });
  };
  return {
    isDrawerOpen,
    toggleDrawer,
    setDrawer,
  };
};
