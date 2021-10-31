import { makeVar } from "@apollo/client";

export const layoutVar = makeVar({
  isDrawerOpen: false,
  page: "HOME",
  printRef: null,
	disableEdit: false
});
