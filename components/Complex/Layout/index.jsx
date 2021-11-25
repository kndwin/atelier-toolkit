import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { styled } from "@stitches/react";

import { useRouter } from "next/dist/client/router";
import { useDrawer, useLayout} from "hooks";
import { Logo } from "components";

import { Welcome } from "components/Pages/home";
import Drawer from "./Drawer";

const Container = styled("div", {
  display: "flex",
  height: "100%",
  width: "100%",
  overflowX: "hidden",
  position: "relative",
});

export const Layout = ({ children, sidedraw, pushContent, printContent }) => {
  const { isDrawerOpen, toggleDrawer, setDrawer } = useDrawer();
  const { setPrintRef } = useLayout();
  const [showLogo, setShowLogo] = useState(false);
  const router = useRouter();
  const printRef = useRef();

  useEffect(() => {
    if (router.pathname === "/home") {
      setDrawer(false);
    } else {
      setShowLogo(true);
    }
  }, [router]);

	useEffect(() => {
    setPrintRef(printRef);
	}, [printContent])

  const Main = styled("div", {
    width: "100%",
    opacity: "100%",
    position: "relative",
  });

  const Content = styled("div", {
    variants: {
      isDrawerOpen: {
        true: {
          opacity: "40%",
        },
      },
      pushContent: {
        true: {
          marginLeft: "0em",
          transition: "all 1s ease-in-out",
        },
      },
    },

    compoundVariants: [
      {
        isDrawerOpen: true,
        pushContent: true,
        css: {
          transition: "all 1s ease-in-out",
          marginLeft: "30em",
        },
      },
    ],
  });

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

      <Main>
        <Content pushContent={pushContent} isDrawerOpen={isDrawerOpen}>
          {printContent ? <div ref={printRef}>{children}</div> : <>{children}</>}
        </Content>
      </Main>

      {showLogo && (
        <Logo reversed={isDrawerOpen} onClick={() => toggleDrawer()} />
      )}
    </Container>
  );
};
