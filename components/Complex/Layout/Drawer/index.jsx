import { Box, ScrollArea, Button, Text } from "components";
import { styled } from "@stitches/react";
import { useDrawer, useCustomer, useForm, useLayout } from "hooks";
import { useReactToPrint } from "react-to-print";
import Cross from "public/svg/cross.svg";
import {useRouter} from "next/dist/client/router";

const DrawerWrapper = styled(Box, {
  zIndex: "9999",
  height: "100%",
  width: "100%",
  maxWidth: "30em",
  position: "fixed",
  transition: "all .5s ease-in-out",
  borderRight: "1px solid black",
  background: "white",
  variants: {
    isOpen: {
      true: {
        left: "0",
      },
      false: {
        left: "-30em",
      },
    },
  },
});

const DrawerContent = styled(Box, {
  height: "100%",
  width: "100%",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

const Drawer = ({ isOpen, children }) => {
  const { setDrawer } = useDrawer();
  const { doubleChecked, setDoubleChecked } = useForm();
  const { printRef } = useLayout();
	const router = useRouter()
  const print = useReactToPrint({
    content: () => printRef.current,
  });

  const handlePrint = () => {
    if (doubleChecked) {
      print();
      setDoubleChecked(false);
    } else {
      setDoubleChecked(true);
    }
  };
  const bottomButtons = (
    <Box
      css={{
        display: "flex",
        justifyContent: doubleChecked ? "space-between" : "flex-end",
        alignItems: "flex-end",
        width: "100%",
        padding: "1em 2em",
      }}
    >
      {doubleChecked && (
        <Text
          as="h3"
          css={{
            position: "relative",
            fontSize: "$5",
          }}
        >
          Measure twice,
          <br />
          cut once!
          <Text
            css={{
              position: "absolute",
              right: "-110%",
              top: "0",
              borderRadius: "50%",
              background: "$primary",
              color: "$light",
              padding: "1em",
              height: "fit-content",
              width: "13em",
              textAlign: "center",
              transform: "rotate(-15deg)",
            }}
          >
            In other words, check your work before you export!
          </Text>
        </Text>
      )}
      <Button css={{ width: "10em" }} onClick={() => handlePrint()}>
        Export PDF
      </Button>
    </Box>
  );
  return (
    <DrawerWrapper isOpen={isOpen}>
      <ScrollArea>
        <DrawerContent>
          <Button
            onClick={() => router.replace("/home")}
            css={{
              position: "absolute",
              top: "2em",
              left: "2em",
              width: "10em",
              zIndex: "9999999",
              cursor: "pointer",
              "&:hover": {
                background: "$primary",
              },
            }}
          >
            Back to home
          </Button>
          <Box
            onClick={() => setDrawer(false)}
            css={{
              position: "absolute",
              top: "1.25em",
              right: ".5em",
              height: "3em",
              width: "3em",
              zIndex: "9999999",
              cursor: "pointer",
              "&:hover": {
                svg: {
                  fill: "$primary",
                },
              },
            }}
          >
            <Cross />
          </Box>
          <Box
            css={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "5em",
              background: "linear-gradient(to top, transparent, white 30%)",
              zIndex: "99999",
            }}
          />
          <Box
            css={{
              marginTop: "3em",
              height: "100%",
              width: "100%",
              zIndex: "20000",
            }}
          >
            {children}
          </Box>
          {bottomButtons}
        </DrawerContent>
      </ScrollArea>
    </DrawerWrapper>
  );
};

export default Drawer;
