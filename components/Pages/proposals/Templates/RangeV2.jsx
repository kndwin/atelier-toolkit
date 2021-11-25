import { Box, Img, Text, Page, Header, Row, Cell } from "components";
import { useForm } from "hooks";

export const RangeTemplateV2 = (props) => {
  const { pricing } = useForm();
  const pricingTable = ({ priceToDisplay }) => {
    return (
      <Box>
        {priceToDisplay?.map(({ id, name, description, volume, prices }) => (
          <Box
            css={{
              display: "flex",
              borderBottom: "1px solid rgba(0,0,0,.5)",
              marginBottom: "1em",
              padding: "1em 0",
            }}
            key={id}
          >
            <Box
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "1em",
                width: "20em",
              }}
            >
              <Img
								src="/svg/soap-bottle.svg"
                css={{
                  display: "flex",
                  height: "5em",
                  width: "5em",
                  objectFit: "contain",
                }}
              />
              <Box
                css={{
                  display: "flex",
                  flexDirection: "column",
                  width: "fit-content",
                  maxWidth: "10em",
                }}
              >
								<Text css={{ fontFamily: "ITC Garamond", fontSize: "$5", margin: "0" }}>
                  {name}
                </Text>
                <Text css={{ fontSize: "$3" }}>{volume}</Text>
                <Text>{description}</Text>
              </Box>
            </Box>
            <Box css={{ width: "100%" }}>
              <Row pricing>
                {[
                  "QTY",
                  "COST",
                  "RRP",
                  "MARGIN",
                  "MARK UP",
                  "TOTAL REV",
                  "UNITS SOLD TO BREAK EVEN",
                ].map((header) => (
                  <Header key={header}>{header}</Header>
                ))}
              </Row>
              {prices.map(({ id: priceId, cost, rrp, moq }) => (
                <Row pricing key={priceId}>
                  <Cell>{parseFloat(moq).toLocaleString()}</Cell>
                  <Cell>${parseFloat(cost).toFixed(2)}</Cell>
                  <Cell>${parseFloat(rrp).toFixed(2)}</Cell>
                  <Cell>{parseFloat(((rrp - cost) / rrp) * 100).toFixed(2)}%</Cell>
                  <Cell>{parseFloat((rrp / cost) * 100).toFixed(2)}%</Cell>
                  <Cell>
                    $
                    {parseFloat(
                      parseFloat(rrp) * parseInt(`${moq}`.replace(/,/g, ""))
                    ).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </Cell>
                  <Cell>{parseInt((cost * moq) / rrp)}</Cell>
                </Row>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    );
  };
  return (
    <>
      <Page>
        <Box
          css={{
            padding: "1em 2em",
          }}
        >
					<Text as="h1" css={{ fontSize: "$6"}}>The Range:</Text>
          <Text bold>PRODUCT</Text>
          {pricingTable({ priceToDisplay: pricing.slice(0, 4) })}
        </Box>
      </Page>
      {pricing.length < 9 && pricing.length > 4 && (
        <Page>
          <Box
            css={{
              padding: "0 3em",
            }}
          >
						<Text as="h1" css={{ fontSize: "$6"}}>The Range:</Text>
            <Text bold>PRODUCT</Text>
            {pricingTable({ priceToDisplay: pricing.slice(4, 9) })}
          </Box>
        </Page>
      )}
    </>
  );
};
