import { Box, ScrollArea } from "components";
import { styled } from "@stitches/react";
import { useDrawer } from "hooks";

const DrawerWrapper = styled(Box, {
  zIndex: "9999",
  height: "100%",
	minHeight: "100vh",
  width: "100%",
  maxWidth: "30em",
  position: "absolute",
  top: "0",
  left: "0",
  transition: "all 1s ease-in-out",
  borderRight: "1px solid black",
  background: "white",
  variants: {
    isOpen: {
      true: {
        width: "75em",
      },
      false: {
        left: "-100%",
      },
    },
  },
});

const DrawerContent = styled(Box, {
  height: "100%",
  width: "100%",
});

const Drawer = ({ isOpen, children }) => {
  const { setDrawer } = useDrawer();
  return (
    <DrawerWrapper isOpen={isOpen}>
      <ScrollArea>
        <DrawerContent>
          <Box
            onClick={() => setDrawer(false)}
            css={{
              position: "absolute",
              top: "1em",
              right: "1em",
              cursor: "pointer",
            }}
          >
            ❌
          </Box>
          <Box
            css={{
              height: "100%",
              width: "100%",
              zIndex: "20000",
            }}
          >
            {children}
          </Box>
        </DrawerContent>
      </ScrollArea>
    </DrawerWrapper>
  );
};

export default Drawer;
