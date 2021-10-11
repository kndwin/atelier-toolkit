import { useReactiveVar } from "@apollo/client";
import { customerVar } from "apollo/reactiveVar/customer";
import { Box, Img, Text } from "components";
import { Page } from "components/Page";

const NittyGrittyTemplate = (props) => {
  const { customer } = useReactiveVar(customerVar);
  const payload = {
    question: `The Nitty Gritty`,
    content: `On top of unit costs there is one-off development of 1500 AUD per product\n\nThis covers all formulation, packaging and print\n\nThe intellectual property that we develop toegether is owned solely by you after you have ordered 5000 units\n\nWe like to work to a 2 year manufacturing contract. This ensures a predictable relationship for both parties and locks in pricing and product stability for you. We also guarantee our capacity to expand the line at anytime`,
    image: "/images/keanu.png",
  };

  return (
    <Page>
      <Box
        css={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Text
          css={{
            fontFamily: "Arktiv Grotesk",
            fontSize: "2em",
            width: "10em",
            marginBottom: "5em",
          }}
        >
          {payload?.question}
        </Text>
        <Text
          css={{
            whiteSpace: "pre-wrap",
            fontFamily: "News Cycle",
            lineHeight: "1em",
            fontSize: "$3",
            margin: "0 3em",
            width: "25em",
            letterSpacing: "0.9px",
          }}
        >
          {payload?.content}
        </Text>
        <Img css={{ height: "80%" }} src={payload?.image} />
      </Box>
    </Page>
  );
};

export default NittyGrittyTemplate;
