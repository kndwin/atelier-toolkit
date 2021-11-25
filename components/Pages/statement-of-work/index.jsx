import { Page, Box, Text } from "components";

export const StatementOfWorkTemplates = (props) => {
	
  return (
    <>
      <FrontPage />
      <FrontPage />
    </>
  );
};

const FrontPage = (props) => {
  return (
    <Page orientation="portrait" aspectRatio="A4" withBorder>
      <Box
        css={{
          padding: "5em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
					width: "100%",
				}}
      >
        <Text
          as="h2"
          css={{
            textTransform: "uppercase",
            fontFamily: "Orelo",
            fontSize: "$5",
            letterSpacing: "10px",
          }}
        >
          ATELIER
        </Text>
        <Box>
          <Text as="h1">Page 1</Text>
        </Box>
        <Box>Parties</Box>
      </Box>
    </Page>
  );
};

export { Form } from "./Form";
