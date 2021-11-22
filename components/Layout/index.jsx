import Head from "next/head";
import { Box, Container } from "components";
import Drawer from "./Drawer";
import { useReactiveVar } from "@apollo/client";
import { layoutVar } from "apollo/reactiveVar/layout";
import { useRouter } from "next/dist/client/router";
import { ScrollArea } from "components/ScrollArea";
import { Logo } from "components/Logo";

const Layout = ({ children, sidedraw }) => {
  const { isDrawerOpen } = useReactiveVar(layoutVar);
  const router = useRouter();
  return (
    <Container>
      <Head>
        <title>Atelier toolkit</title>
      </Head>
      <Drawer isOpen={isDrawerOpen}>{sidedraw}</Drawer>
      <Box css={{ width: "100%" }}>
        <ScrollArea content>{children}</ScrollArea>
      </Box>
      <Logo
        reversed={isDrawerOpen}
        onClick={() =>
          layoutVar({ ...layoutVar(), isDrawerOpen: !isDrawerOpen })
        }
      />
    </Container>
  );
};

export default Layout;
