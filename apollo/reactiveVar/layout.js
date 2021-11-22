import { makeVar } from "@apollo/client";

export const layoutVar = makeVar({
  isDrawerOpen: true,
  page: "HOME",
  printRef: null,
	disableEdit: false
});
