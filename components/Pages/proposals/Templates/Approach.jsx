import { Box, Img, Text, Page } from "components";
import { useCustomer } from "hooks";

export const ApproachTemplate = (props) => {
  const { customer } = useCustomer();
  const payload = {
    question: `How would we approach a project with ${customer}?`,
    content: `To launch the brand's product range we will being by deep diving into ${customer}'s values and design sensibility, We will learn the market ${customer} serves. We will apply scientific rigor and earned secrets we have developed through years of creating products within the beauty health and wellness space.\n\nWe will take these insights and develop an initial range of products for ${customer} communicates the ethors of the brand through form and function\n\nLastly, we will gain an understanding of ${customer}, business objects and develop a range of products that make sens at the bottom line.`,
    image: "/images/approach.png",
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
            fontFamily: "ITC Garamond",
            fontSize: "$6",
            width: "10em",
          }}
        >
          {payload?.question}
        </Text>
        <Text
          css={{
            whiteSpace: "pre-wrap",
            fontFamily: "News Cycle",
            lineHeight: "1em",
            fontSize: "$2",
            margin: "0 3em",
            width: "19em",
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
