import { Box } from "components";
import { styled } from "@stitches/react";
import { useRouter } from "next/dist/client/router";

const DrawerWrapper = styled(Box, {
  height: "100%",
  transition: "1s ease",
	borderRight: "1px solid black",
	background: "white",
  variants: {
    isOpen: {
      true: {
        width: "75em",
        paddingLeft: "1em",
        paddingRight: "1em",
        paddingTop: "3em",
      },
      false: {
        paddingTop: "3em",
        width: "0.4em",
        "*": {
          display: "none",
        },
      },
    },
  },
});

const Drawer = ({ isOpen, children }) => {
  const router = useRouter();
  return (
    <DrawerWrapper isOpen={isOpen}>
			{children}
    </DrawerWrapper>
  );
};

export default Drawer;
