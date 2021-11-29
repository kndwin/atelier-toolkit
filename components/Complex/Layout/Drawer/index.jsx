import { Box, ScrollArea, Button, Text } from "components";
import { styled } from "@stitches/react";
import { useDrawer, useCustomer, useForm, useLayout } from "hooks";
import { useReactToPrint } from "react-to-print";
import Cross from "public/svg/cross.svg";

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
  const { customer } = useCustomer();
  const { error, setError, doubleChecked, setDoubleChecked } = useForm();
  const { printRef } = useLayout();
  const print = useReactToPrint({
    content: () => printRef.current,
  });

  const handlePrint = () => {
		if (doubleChecked) {
			print();
			setDoubleChecked(false)
		} else {
			setDoubleChecked(true)
		}
  };
  const bottomButtons = (
    <Box
      css={{
        display: "flex",
				justifyContent: doubleChecked ? "space-between" : "flex-end",
				alignItems: "center",
        width: "100%",
        padding: "1em 2em",
      }}
		>
			{doubleChecked && (
				<Text
					as="h3"
					css={{
						position: "relative",
						fontSize: "$5"
					}}
				>
					Measure twice,
					<br />
					cut once!
					<Text css={{
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
						transform: "rotate(-15deg)"
					}}>
						In other words, check your work before you export!
					</Text>
				</Text>
			)}
			<Button
				css={{ width: "fit-content" }}
				onClick={() => handlePrint()}
			>
        Export PDF
      </Button>
    </Box>
  );
  return (
    <DrawerWrapper isOpen={isOpen}>
      <ScrollArea>
        <DrawerContent>
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
