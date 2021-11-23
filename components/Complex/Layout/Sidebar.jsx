import { styled } from "@stitches/react";
import { Button, Box } from "components";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const SidebarWrapper = styled(Box, {
  height: "100%",
  width: "100%",
  maxWidth: "10em",
  padding: "$3",
  gridRowEnd: "span 2",
  borderRight: "1px solid $dark",
});

const Sidebar = (props) => {
  const router = useRouter();
  const buttons = [
    { href: "/home", label: "Home" },
    { href: "/proposal", label: "Proposal" },
  ];
  return (
    <SidebarWrapper>
      {buttons?.map(({ href, label }) => (
        <Link href={href}>
          <Button selected={href === router.pathname} css={{ width: "100%" }}>
            {label}
          </Button>
        </Link>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
