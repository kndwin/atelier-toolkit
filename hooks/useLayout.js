import { makeVar } from "@apollo/client";

const layoutVar = makeVar({
  page: "HOME",
  printRef: null,
	disableEdit: false
});

export const useLayout = () => {
	const { page, printRef, disableEdit } = layoutVar();
	const setPrintRef = (printRef) => {
		layoutVar({...layoutVar(), printRef });
	}
	return {
		page,
		printRef,
		disableEdit,
		setPrintRef
	};
};
