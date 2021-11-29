import { Box, Img, Text, Page } from "components";
import { useCustomer, useForm } from "hooks";

export const NittyGrittyTemplate = (props) => {
  const { customer } = useCustomer();
  const { currency } = useForm();
  const payload = {
    question: `The Nitty\n Gritty`,
    content: `On top of unit costs there is one-off development of 1500 ${currency} per product\n\nThis covers all formulation, packaging and print\n\nThe intellectual property that we develop together is owned solely by you after you have ordered 5000 units\n\nWe like to work to a 2 year manufacturing contract. This ensures a predictable relationship for both parties and locks in pricing and product stability for you. We also guarantee our capacity to expand the line at anytime`,
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
				<Box css={{ display: "flex"}}>
          <Text
            css={{
              fontFamily: "ITC Garamond",
              whiteSpace: "pre-line",
              textAlign: "left",
              fontSize: "$6",
              width: "10em",
              marginTop: "100px",
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
              width: "100%",
              letterSpacing: "0.9px",
              marginTop: "100px",
            }}
          >
            {payload?.content}
          </Text>
        </Box>
        <Img css={{ height: "80%" }} src={payload?.image} />
      </Box>
    </Page>
  );
};
