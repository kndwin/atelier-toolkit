import { styled } from "@stitches/react";
import { Box, Text, Img } from "components";
import { useState } from "react";
import Bottle from "public/svg/bottle-1.svg";

const Header = styled(Text, {
  margin: "0",
  marginBottom: "1em",
  textTransform: "uppercase",
  fontSize: "12px",
  fontWeight: "semi-bold",
});
const Row = styled(Box, {
  display: "flex",
  width: "100%",
	height: "6em"
});
const PricingRow = styled(Box, {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  width: "100%",
});
const Cell = styled(Box, {
  fontFamily: "News Cycle",
  height: "fit-content",
  fontSize: "12px",
});

const Range = (props) => {
  const [payload, setPayload] = useState([
    {
      title: "Multi-Purpose Spray",
      caption: "500ML",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
    {
      title: "Multi-Purpose Spray",
      caption: "500ML",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
    {
      title: "Multi-Purpose Spray",
      caption: "500ML",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
    {
      title: "Multi-Purpose Spray",
      caption: "500ML",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
    {
      title: "Multi-Purpose Spray",
      caption: "500ML",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
  ]);
  return (
    <Box
      css={{
        padding: "1em",

        width: "100%",
      }}
    >
      <Text
        css={{
          fontFamily: "Arktiv Grotesk",
          fontSize: "24px",
          lineHeight: "1em",
        }}
      >
        The Range:
      </Text>
      <Box
        css={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "18em 1fr",
        }}
      >
        <Header>Product</Header>
        <Header>Pricing</Header>
      </Box>
      {payload?.map((payload) => (
        <ProductRow payload={payload} />
      ))}
    </Box>
  );
};

export default Range;
const ProductRow = ({ payload }) => {
  return (
    <Row>
      <Box
        css={{
          display: "flex",
          borderBottom: "1px solid black",
          width: "15em",
          marginRight: "3em",
					height: "100%"
        }}
      >
        <Img
          css={{ height: "3em", width: "3em", objectFit: "scale-down" }}
          src={"svg/bottle-1.svg"}
        />
        <Box>
          <Header>{payload.title}</Header>
          <Header>{payload.caption}</Header>
        </Box>
      </Box>
			<Box css={{ width: "100%", borderBottom: "1px solid black", paddingBottom: "1em" }}>
        <PricingRow>
          <Header>QTY</Header>
          <Header>COST</Header>
          <Header>RRP</Header>
          <Header>MARGIN</Header>
          <Header>MARK UP</Header>
          <Header>TOTAL REV</Header>
          <Header>UNITS SOLD TO BREAK EVEN</Header>
        </PricingRow>
        {payload.pricing.map(({ qty, cost, rrp }) => (
          <PricingRow>
            <Cell>{parseFloat(qty).toLocaleString()}</Cell>
            <Cell>{parseFloat(cost).toFixed(2)}</Cell>
            <Cell>{parseFloat(rrp).toFixed(2)}</Cell>
            <Cell>{parseFloat((cost / rrp) * 100).toFixed(2)}</Cell>
            <Cell>{parseFloat((rrp / cost) * 100).toFixed(2)}</Cell>
            <Cell>
              {parseFloat(rrp * qty * 100).toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </Cell>
            <Cell>{parseInt(8000 / (rrp - cost))}</Cell>
          </PricingRow>
        ))}
      </Box>
    </Row>
  );
};
