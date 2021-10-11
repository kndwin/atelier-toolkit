import { useReactiveVar } from "@apollo/client";
import { customerVar } from "apollo/reactiveVar/customer";
import { Box, Text, Img } from "components";

const InThisProposalTemplate = (props) => {
  const { customer } = useReactiveVar(customerVar);
  const payload = {
    title: "In this Proposal",
    description: `...we have provided pricing and process around the creation and production of eight products.\n\nTo arrive at these unit costs, we considered the direction provided in the emails back and forth with ${customer}, referencing the products discuessed, ingredient and packaging styles\n\nWe are confident in the setup and sourcing of the supply chain for these eight products`,
  };
  return (
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
      <Text
        css={{
          fontFamily: "Orelo",
          fontSize: "32px",
          margin: "3em",
          width: "5em",
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
        }}
      >
        {payload.description}
      </Text>
      <Img
        css={{ objectPosition: "center 0%", width: "30em" }}
        src={"/images/bottle-2.png"}
      />
    </Box>
  );
};

export default InThisProposalTemplate;
