import { styled } from "@stitches/react";
import { Box, Text, Img } from "components";
import { useState } from "react";
import Bottle from "public/svg/bottle-1.svg";
import { Page } from "components/Page";

const Header = styled(Text, {
  margin: "0",
  textTransform: "uppercase",
  fontSize: "12px",
  fontWeight: "bold",
});
const Row = styled(Box, {
  display: "flex",
  width: "100%",
  height: "6.5em",
  alignItems: "center",
});
const PricingRow = styled(Box, {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  width: "100%",
  height: "fit-content",
});
const Cell = styled(Box, {
  fontFamily: "News Cycle",
  height: "fit-content",
  fontSize: "12px",
});

const RangeTemplate = (props) => {
  const [payload, setPayload] = useState([
    {
      title: "Multi-Purpose Spray 1",
      caption: "500ML",
      image: "/svg/spray-bottle.svg",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
    {
      title: "Multi-Purpose Spray 2",
      caption: "500ML",
      image: "/svg/soap-bottle.svg",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
    {
      title: "Multi-Purpose Spray 3",
      caption: "500ML",
      image: "/svg/soap-box.svg",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
    {
      title: "Dishwashing bottle",
      caption: "500ML",
      image: "/svg/dishwashing-bottle.svg",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
    {
      title: "Multi-Purpose Spray 2",
      caption: "500ML",
      image: "/svg/soap-bottle-2.svg",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
    {
      title: "Dishwashing bottle",
      caption: "500ML",
      image: "/svg/dishwashing-bottle.svg",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
    {
      title: "Laundry Box",
      caption: "500ML",
      image: "/svg/laundry-box.svg",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
    {
      title: "Toilet Bottle",
      caption: "500ML",
      image: "/svg/toilet-bottle.svg",
      pricing: [
        { qty: 1000, cost: 5.2, rrp: 14 },
        { qty: 1000, cost: 5.2, rrp: 14 },
      ],
    },
  ]);
  return (
    <>
      <Page
        css={{
          padding: "1em",
        }}
      >
        <Text
          css={{
            fontFamily: "Arktiv Grotesk",
            fontSize: "24px",
            lineHeight: "1em",
            letterSpacing: "1px",
          }}
        >
          The Range:
        </Text>
        <Box
          css={{
            display: "grid",
            width: "100%",
            gridTemplateColumns: "15.5em 1fr",
          }}
        >
          <Header>Product</Header>
          <Header>Pricing</Header>
        </Box>
        {payload?.slice(0, 5)?.map((load, index) => (
          <ProductRow
            key={`${load?.title} ${index}`}
            noBorder={
              (index + 1) % (payload.length < 5 ? payload.length : 5) === 0
            }
            payload={load}
          />
        ))}
      </Page>
      {payload?.length > 5 && (
        <Page
          css={{
            padding: "1em",
          }}
        >
          <Text
            css={{
              fontFamily: "Arktiv Grotesk",
              fontSize: "24px",
              lineHeight: "1em",
              letterSpacing: "1px",
            }}
          >
            The Range:
          </Text>
          <Box
            css={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: "15.5em 1fr",
            }}
          >
            <Header>Product</Header>
            <Header>Pricing</Header>
          </Box>
          {payload?.slice(5, 11)?.map((load, index) => (
            <ProductRow
              key={`${load?.title} ${index}`}
              noBorder={(index + 1) % (payload?.length - 5) === 0}
              payload={load}
            />
          ))}
        </Page>
      )}
    </>
  );
};

export default RangeTemplate;

const ProductRow = ({ payload, noBorder }) => {
  return (
    <Row>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          borderBottom: `${noBorder ? "0" : "1"}px solid black`,
          width: "20em",
          marginRight: "3em",
          height: "100%",
        }}
      >
        <Img
          css={{
            height: "3em",
            width: "3em",
            objectFit: "contain",
            margin: "0 1em",
          }}
          src={payload.image}
        />
        <Box>
          <Text
            css={{
              fontFamily: "Arktiv Grotesk",
              letterSpacing: "0.9px",
              marginBottom: "0",
            }}
          >
            {payload.title}
          </Text>
          <Text css={{ fontSize: "12px" }}>{payload.caption}</Text>
        </Box>
      </Box>
      <Box
        css={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          borderBottom: `${noBorder ? "0" : "1"}px solid black`,
        }}
      >
        <Box
          css={{
            height: "fit-content",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
              <Cell>${parseFloat(cost).toFixed(2)}</Cell>
              <Cell>${parseFloat(rrp).toFixed(2)}</Cell>
              <Cell>{parseFloat((cost / rrp) * 100).toFixed(2)}%</Cell>
              <Cell>{parseFloat((rrp / cost) * 100).toFixed(2)}%</Cell>
              <Cell>
                $
                {parseFloat(rrp * qty * 100).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Cell>
              <Cell>{parseInt(8000 / (rrp - cost))}</Cell>
            </PricingRow>
          ))}
        </Box>
      </Box>
    </Row>
  );
};
