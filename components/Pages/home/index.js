import { Box, Text } from "components";
import Link from "next/link";

export const ProposalLink = (props) => {
  const proposals = [
    {
      title: "Proposals for New Business",
      team: "Sales Team",
      href: "/proposal",
    },
    {
      title: "Statement of Work (SOW)",
      team: "Sales Team",
      href: "/statement-of-work",
    },
    {
      title: "Mutual Confidenitality Agreement",
      team: "Sales Team",
      href: "/mutual-confidentiality-agreement",
    },
  ];
  return (
    <Box>
      {proposals.map(({ title, team, href }) => (
        <Link href={href}>
          <Box
            css={{
              borderBottom: "1px solid black",
              padding: "1em",
              cursor: "pointer",
							"&:hover" : {
								backgroundColor: "$primary",
								"p, h2": {
									color: "white"
								}
							}
						}}
					>
            <Text as="h2">{title}</Text>
            <Text css={{ textTransform: "uppercase", fontWeight: "bold" }}>
              {team}
            </Text>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export const Welcome = (props) => {
  return (
    <Box
      css={{
        padding: "$3",
        zIndex: "5",
        maxWidth: "40em",
        borderRight: "1px solid black",
      }}
    >
      <Text as="h1" css={{ margin: "0" }}>
        WELCOME TO THE ATELIER ADMIN CENTRE.
        <br /> <br />
        LET'S GET DOWN TO BIZNIZ!
      </Text>
      <Text>PICK A TEMPLATE TO START.</Text>
    </Box>
  );
};
