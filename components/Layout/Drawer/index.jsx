import { Text, Box } from "components";
import { styled } from "@stitches/react";
import { useRouter } from "next/dist/client/router";
import ProposalMinimap from "./ProposalMinimap";

const DrawerWrapper = styled(Box, {
  height: "100%",
  background: "$primary",
  transition: "1s ease",
  variants: {
    isOpen: {
      true: {
        width: "15em",
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

const Drawer = ({ isOpen }) => {
  const router = useRouter();
  return (
    <DrawerWrapper isOpen={isOpen}>
      <ProposalMinimap />
    </DrawerWrapper>
  );
};

export default Drawer;
