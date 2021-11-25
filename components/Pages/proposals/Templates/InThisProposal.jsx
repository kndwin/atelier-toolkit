import { Box, Text, Img, Page } from "components";
import { useCustomer } from "hooks";

export const InThisProposalTemplate = (props) => {
  const { customer, contactName } = useCustomer();
  const payload = {
    title: "In this Proposal...",
    description: `...we have provided pricing and process around the creation and production of eight products.\n\nTo arrive at these unit costs, we considered the direction provided in the emails back and forth with ${customer}${
      contactName ? `, ${contactName}` : ""
    }, referencing the products discuessed, ingredient and packaging styles\n\nWe are confident in the setup and sourcing of the supply chain for these eight products`,
  };
  return (
    <Page>
      <Box
        css={{
          margin: "0 auto",
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <Box css={{ display: "flex", width: "100%", alignItems: "center" }}>
          <Text
            css={{
              fontFamily: "ITC Garamond",
              fontSize: "$6",
              marginLeft: "1em",
            }}
          >
            {payload.title}
          </Text>
          <Text
            css={{
              fontFamily: "News Cycle",
              fontSize: "$3",
              lineHeight: "1em",
              letterSpacing: "0.9px",
              whiteSpace: "pre-wrap",
              width: "40ch",
            }}
          >
            {payload.description}
          </Text>
        </Box>
        <Img
          css={{
            objectPosition: "-150px center",
            width: "100%",
            height: "100%",
						zoom: "90%", 
            objectFit: "cover",
          }}
          src={"/images/bottle-2.png"}
        />
      </Box>
    </Page>
  );
};
