import { Page } from "@react-pdf/renderer";

export const PrintPage = ({ children }) => {
  return (
		<Page size="A4">
			{children}
		</Page>
	);
};
