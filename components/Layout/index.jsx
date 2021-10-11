import Head from "next/head";
import { Box, Container } from "components";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import Drawer from "./Drawer";
import { useReactiveVar } from "@apollo/client";
import { layoutVar } from "apollo/reactiveVar/layout";
import {useRouter} from "next/dist/client/router";
import {ScrollArea} from "components/ScrollArea";
import {Logo} from "components/Logo";

const Layout = ({ children }) => {
  const { isDrawerOpen } = useReactiveVar(layoutVar);
	const router = useRouter()
  return (
    <Container>
      <Head>
        <title>Atelier toolkit</title>
      </Head>
			<Sidebar />
			<Box css={{ width: "100%"}}>
				<Banner page={router.pathname} />
				<ScrollArea content>
					{children}
				</ScrollArea>
			</Box>
			<Logo
				reversed={isDrawerOpen}
				onClick={() =>
						layoutVar({ ...layoutVar(), isDrawerOpen: !isDrawerOpen })
				}
			/>
			<Drawer isOpen={isDrawerOpen} />
		</Container>
	);
};

export default Layout;
