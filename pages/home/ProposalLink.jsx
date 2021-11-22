import { Box, Text } from "components";
import Link from "next/link";

const ProposalLink = (props) => {
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

export default ProposalLink;
