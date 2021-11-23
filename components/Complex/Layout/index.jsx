import Head from "next/head";
import { Box, ScrollArea, Logo } from "components";
import { styled } from "@stitches/react";

import { useRouter } from "next/dist/client/router";
import { useDrawer } from "hooks";
import Drawer from "./Drawer";
import { useEffect, useState } from "react";
import { Welcome } from "components/Pages/home/Welcome";

const Container = styled("div", {
  display: "flex",
  height: "100%",
  width: "100%",
  overflowX: "hidden",
  position: "relative",
});

export const Layout = ({ children, sidedraw }) => {
  const { isDrawerOpen, toggleDrawer, setDrawer } = useDrawer();
  const [showLogo, setShowLogo] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/home") {
      setDrawer(false);
    } else {
      setShowLogo(true);
    }
  }, [router]);

  return (
    <Container>
      <Head>
        <title>Atelier toolkit</title>
      </Head>
      {router.pathname == "/home" ? (
        <Welcome />
      ) : (
        <Drawer isOpen={isDrawerOpen}>{sidedraw}</Drawer>
      )}
      <Box css={{ width: "100%" }}>
        <ScrollArea content>
          {children}
        </ScrollArea>
      </Box>

      {showLogo && (
        <Logo reversed={isDrawerOpen} onClick={() => toggleDrawer()} />
      )}
    </Container>
  );
};
