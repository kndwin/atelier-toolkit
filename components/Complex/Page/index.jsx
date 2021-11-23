import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { styled } from "@stitches/react";

const AspectRatio = AspectRatioPrimitive;

const PageWrapper = styled("div", {
  background: "$light",
  margin: "3em auto",
  "@media print": {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
    padding: "0 4em",
    height: "100%",
    width: "100%",
    "@page": {
      size: "landscape",
    },
    border: "none",
    margin: "0",
  },
});

export const Page = ({ children }) => {
  return (
    <PageWrapper>
      <AspectRatio.Root ratio={16 / 9}>{children}</AspectRatio.Root>
    </PageWrapper>
  );
};
