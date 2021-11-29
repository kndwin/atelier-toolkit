import { Page, Box, Text } from "components";
import { useCustomer, useForm } from "hooks";

const MAX_PRODUCTS = 12;

export const StatementOfWorkTemplates = (props) => {
  return (
    <>
      <FrontPage />
      <Description />
      <Invoice />
      <SignedAgreement />
    </>
  );
};

const FrontPage = (props) => {
  const { address } = useForm();
  const { customer } = useCustomer();
  console.log({ address });
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
          <Text as="h1" css={{ lineHeight: "1em" }}>
            Statement <br />
            of work
          </Text>
        </Box>
        <Box
          css={{ display: "grid", grid: "2em 1fr / 20em 1fr", gridGap: "2em" }}
        >
          <Text
            css={{
              fontFamily: "News Cycle",
              fontWeight: "bold",
              fontSize: "$2",
              span: "2",
            }}
          >
            PARTIES
          </Text>
          <Text css={{ gridColumnStart: "1", whiteSpace: "pre-wrap" }}>
            {customer}
            <br />
            {address}
          </Text>
          <Text>
            E XD PTY LTD <br />
            95 Riley St <br />
            Darlinghurst, <br />
            NSW 2010
          </Text>
        </Box>
      </Box>
    </Page>
  );
};
const Initials = (
  <Box
    css={{
      position: "absolute",
      bottom: "1em",
      left: "1em",
      display: "flex",
      alignItems: "center",
    }}
  >
    <Box
      css={{
        height: "2em",
        width: "2em",
        border: "1px solid $primary",
        borderRadius: "50%",
        marginRight: "1em",
      }}
    />
    <Text css={{ color: "$primary", fontWeight: "bold" }}>INITIAL</Text>
  </Box>
);
const Description = (props) => {
  const { SOWPriceAndRange } = useForm();
  const maxProductsReached = SOWPriceAndRange.length >= MAX_PRODUCTS;
  console.log({ maxProductsReached, SOWPriceAndRange });
  return (
    <Page orientation="portrait" aspectRatio="A4" withBorder>
      {Initials}
      <Box
        css={{
          padding: "5em",
          display: "grid",
          grid: `2fr 1fr auto 2fr ${
            maxProductsReached ? "" : "1fr"
          }/ 1fr 1fr 1fr`,
          gridGap: "2em",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
        }}
      >
        <Text bold>DESCRIPTION</Text>
        <Text
          css={{
            gridColumn: "span 2",
          }}
        >
          E XD PTY LTD specialises in the design, development, prototyping,
          supply chain creation and supply chain management for beauty, health
          and wellness products.
          <br />
          <br />
          This statement of work represents the specification, terms and
          estimates of cost, time and product componentry for the design,
          development and establishment of supply chains for 1 product for
          CLIENT NAME.
        </Text>
        <Text bold>PRODUCTS</Text>
        <Box css={{ gridColumn: "span 2" }}>
          {SOWPriceAndRange?.map(({ price, range }) => (
            <Box
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "1em",
              }}
            >
              <Text>{price}</Text>
              <Text>{range}</Text>
            </Box>
          ))}
        </Box>
        <Text bold>DEVELOPMENT PROCESS</Text>
        <Box
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "1em",
            gridColumn: "span 2",
          }}
        >
          <Box>
            <Text css={{ marginBottom: "1em" }} bold>
              CONCEPT DEVELOPMENT
            </Text>
            <Text>
              1. Product brief issued <br />
              2. Workshop <br />
              3. Technical specification drafted <br />
              4. Lab brief created <br />
              5. Packaging brief created
            </Text>
            <Text css={{ margin: "2em 0 1em 0" }} bold>
              CONCEPT DEVELOPMENT
            </Text>
            <Text>
              1. Lab partner identified <br />
              2. Lab partner engaged <br />
              3. Initial ingredients sourced <br />
              4. Formulation prototype produced <br />
              5. Formulation revision (ongoing) <br />
              6. Final formulation sign off <br />
              7. Formulation stability <br />
              8. Testing, microbial testing and certifications (where
              appropriate).
              <br />
            </Text>
            <Text css={{ margin: "2em 0 1em 0" }} bold>
              SUPPLY CHAIN PILOT
            </Text>
            <Text>
              1. Packaging mass production <br />
              2. Quality control <br />
              3. Packaging shipped <br />
              4. Product filling <br />
              5. Quality control
            </Text>
          </Box>
          <Box>
            <Text css={{ marginBottom: "1em" }} bold>
              PRIMARY PACKAGING DEVELOPMENT
            </Text>
            <Text>
              1. Initial design produced <br />
              2. Design revision (ongoing) <br />
              3. Manufacturing partner identified <br />
              4. Manufacturing partner engaged <br />
              5. Tooling created <br />
              6. Prototype created <br />
            </Text>
            <Text css={{ margin: "2em 0 1em 0" }} bold>
              SECONDARY PACKAGING DEVELOPMENT
            </Text>
            <Text>
              1. Initial design produced <br />
              2. Design revision (ongoing) <br />
              3. Manufacturing partner identified <br />
              4. Manufacturing partner engaged <br />
              5. Tooling created <br />
              6. Prototype produced <br />
              7. Final prototype sign off
              <br />
            </Text>
          </Box>
        </Box>
        <Text bold>PRODUCT COMPONENTS</Text>
        <Box>
          <Text bold css={{ marginBottom: "1em" }}>
            PRODUCT COMPONENTS
          </Text>
          <Text>
            Primary vessels Primary closures Printing/labelling Unit Carton
            Shipping Carton
          </Text>
        </Box>
        <Box>
          <Text bold css={{ marginBottom: "1em" }}>
            PRODUCT{" "}
          </Text>
          <Text>
            Primary vessels Primary closures Printing/labelling Unit Carton
            Shipping Carton
          </Text>
        </Box>
        {!maxProductsReached && (
          <>
            <Text bold>ORDER QUANTITY</Text>
            <Box>
              <Text bold css={{ marginBottom: "1em" }}>
                ORDER QUANTITY
              </Text>
              <Text>1000</Text>
            </Box>
          </>
        )}
      </Box>
    </Page>
  );
};

const Invoice = (props) => {
  const { SOWPriceAndRange } = useForm();
  const maxProductsReached = SOWPriceAndRange.length >= MAX_PRODUCTS;

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
        {Initials}
        <Box
          css={{
            display: "grid",
            grid: `${maxProductsReached ? "3em" : ""} 1fr 1fr / 17em 1fr`,
            height: "100%",
            gridRowGap: "2em",
          }}
        >
          {maxProductsReached && (
            <>
              <Text bold>ORDER QUANTITY</Text>
              <Box>
                <Text bold css={{ marginBottom: "1em" }}>
                  ORDER QUANTITY
                </Text>
                <Text>1000</Text>
              </Box>
            </>
          )}
          <Text bold>INVOICE STAGES</Text>
          <Box
            css={{
              display: "grid",
              grid: "3em repeat(8, 1fr) auto / 4em 2.5fr 2fr 2fr",
            }}
          >
            <Text bold>STAGES</Text>
            <Text bold>INVOICE DESCRIPTION</Text>
            <Text bold>INVOICE AMOUNT</Text>
            <Text bold>NOTES</Text>

            <Text>1. </Text>
            <Text>Development fee</Text>
            <Text>1,500</Text>
            <Text>1 X 1,5000 Development fee</Text>

            <Text>2. </Text>
            <Text>Production Samples Delievered</Text>
            <Box css={{ gridColumn: "span 2" }} />

            <Text>3. </Text>
            <Text>Primary Ordered</Text>
            <Text>TBC</Text>
            <Text>50% of Production</Text>

            <Text>3. </Text>
            <Text>Secondary Ordered</Text>
            <Box css={{ gridColumn: "span 2" }} />

            <Text>3. </Text>
            <Text>Formulation Ordered</Text>
            <Box css={{ gridColumn: "span 2" }} />

            <Text>4. </Text>
            <Text>Prodution Complete</Text>
            <Text>TBC</Text>
            <Text>50% of Production</Text>

            <Text>5. </Text>
            <Text>Delivery</Text>
            <Box css={{ gridColumn: "span 2" }} />

            <Text css={{ gridColumn: "span 4" }}>
              Above prices are excluding GST. Lip Syrup is responsible for
              payment of GST where applicable.
            </Text>
          </Box>
          <Text bold>INVOICE STAGES</Text>

          <Text>
            Due to the exploratory nature of the services the timelines, costs
            and indicated qualities are estimates with the exception of
            “development fee”.
            <br />
            <br />
            If E XD PTY LTD is unable to complete the work by the time scales
            indicated on any quotation then it will inform Lip Syrup in writing.
            Any time scales supplied in quotation are best estimates only.
          </Text>
        </Box>
      </Box>
    </Page>
  );
};

const SignedAgreement = (props) => {
  const { customer } = useCustomer();
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
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            marginRight: "30em",
            height: "50%",
          }}
        >
          <Text bold css={{ marginBottom: "1em" }}>
            SIGNED AGREEMENT
          </Text>
          <Text bold>EXECUTED BY E XD PTY LTD</Text>
          <Text bold>ABN 51 627 664 162</Text>
          <Text>in accordance with section 127 of the Corporations Act</Text>
          <Text
            css={{
              marginTop: "5em",
              borderTop: "1px solid black",
              paddingTop: ".5em",
            }}
          >
            Director / Secretary (Signature)
          </Text>
          <Text
            bold
            css={{
              marginTop: "5em",
              borderBottom: "1px solid black",
              paddingBottom: ".5em",
            }}
          >
            NICK BENSON
          </Text>
          <Text css={{ marginTop: ".5em" }}>
            Director / Secretary (Signature)
          </Text>
          <Text
            css={{
              marginTop: "5em",
              borderTop: "1px solid black",
              paddingTop: ".5em",
            }}
          >
            Date
          </Text>
        </Box>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            marginRight: "30em",
            height: "50%",
          }}
        >
          <Text bold css={{ marginBottom: "1em" }}>
            SIGNED AGREEMENT
          </Text>
          <Text bold css={{ textTransform: "uppercase" }}>
            EXECUTED BY {customer}
          </Text>
          <Text bold>ABN 51 627 664 162</Text>
          <Text>in accordance with section 127 of the Corporations Act</Text>
          <Text
            css={{
              marginTop: "5em",
              borderTop: "1px solid black",
              paddingTop: ".5em",
            }}
          >
            Director / Secretary (Signature)
          </Text>
          <Text
            css={{
              marginTop: "5em",
              borderTop: "1px solid black",
              paddingTop: ".5em",
            }}
          >
            Full name (please print)
          </Text>
          <Text
            css={{
              marginTop: "5em",
              borderTop: "1px solid black",
              paddingTop: ".5em",
            }}
          >
            Date
          </Text>
        </Box>
      </Box>
    </Page>
  );
};

export { Form } from "./Form";
