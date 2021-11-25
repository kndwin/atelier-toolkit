import { Box, Text, Page } from "components";

export const MUATemplates = (props) => {
  return (
    <>
      <FrontPage />
    </>
  );
};

const TopTitle = (
  <Text
    css={{
      fontFamily: "Orelo",
      fontSize: "5em",
      fontWeight: "bold",
      letterSpacing: "30px",
    }}
  >
    ATELIER
  </Text>
);

const FrontPage = () => {
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
        {TopTitle}
        <Text>
          Mutual <br />
          Confidentiality <br />
          Agreement <br />
        </Text>

        <Box></Box>
      </Box>
    </Page>
  );
};

export { Form } from "./Form";
